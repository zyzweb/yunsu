# H3BPM单点登录技术规范

## 一.钉钉（dingtalk）移动端免登录

### 1.登录流程

图示: 
- 1:请求认证码
- 2.返回钉钉授权码
- 3.使用钉钉授权码换取token 
- 4.返回token
- 5.使用token访问资源  

```

  -------------------	                   -------------------
 |                   |                    |                   |
 |   资源服务器       |                    |   认证服务器      |
 |                   |                    |                   |
  -------------------	                  --------------------
          ^                                    |      ^
          |5                                   |      |
          |                                  4 |      |
  -------------------                          |      | 3
 |                   |<------------------------       |
 |  钉钉客户端应用    |                                |
 |                   |--------------------------------
 |                   |
  -------------------
       |  ^
     1 |  | 2
       V  |
  -------------------
 |                   |
 |   钉钉认证服务器   |
 |                   |
  -------------------

```

### 2.Ajax登录接口

-  登录Api接口地址

http://${登录服务器地址}:8888/login/mobile/ajax?code=${dingtalk授权码}&client_id=${分配的应用客户端id}&scope=read&state=${state}
- 请求参数

| 参数  | 含义说明   | 数据格式  |   
| - | - | - | 
| code | 钉钉授权码 |  文本  |   
| client_id | 给客户端分配的应用ID |  文本  |   
| scope | 固定值：read | 文本   |   
| state | 状态码，服务端会原文返回 |  文本  |  
 

例子：
<pre>
<code>
	http://47.106.153.78:8888/login/mobile/ajax?code=S9DET&client_id=api&scope=read
</code>
</pre>


- 返回数据 
返回数据为Json格式。

| 参数  | 含义说明   | 数据格式  |  可能值  | 
| - | - | - | - |
| errcode | 登录结果 |   长整形  | 0:成功, 100002:缺少参数    | 
| access_token | access_token内容 |   文本  | JWT标准access_token值   | 
| refresh_token | refresh_token内容 |  文本   |  JWT标准refresh_token值   | 
| user_id | 登录用户ID |   文本  |   | 
| scope | 固定值 |  字符数组  |    ["read"]  | 
| mobile | 是否移动端登录 |  布尔值  |   true  | 
| expiration | access_token过期日期的毫秒时间 |  长整形  |    | 
| token_type | access_token类型 | 文本  |   bearer  | 
| expires_in | access_token有效的秒数 | 长整形  |     | 
| userinfo | 登录用户信息 |  Json对象  |    | 

userinfo格式:

| 参数  | 含义说明   | 数据格式  |   
| - | - | - | 
| id | 用户ID |   文本  |  
| name | 用户姓名 |   文本  |      
| username | 用户登录名 |  文本  |     
| imgUrl | 用户头像Url地址 |  文本  |     

例子：
<pre>
<code>

{
    "errcode": 0,
    "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpIl0sInVzZXJfbmFtZSI6ImFkbWluIiwic2NvcGUiOlsicmVhZCJdLCJleHAiOjE1NTA2NjQxNDAsImF1dGhvcml0aWVzIjpbIlVTRVIiLCJBVVRIX1NZU1RFTV9NQU5BR0UiXSwianRpIjoiYjdjZjE4ODYtMjU4ZS00ZjEyLTgwZGUtMmY1MDE3MjYxM2RjIiwiY2xpZW50X2lkIjoiYXBpIn0.bBaC1_Bp6nyJwxefvoOCMu5gg1l7BFWys6C1jDA_G3PjpEZNStnwP2DV0RTDVPrAVzpNnTlQ8FaXFAIkcwmlKyv3aOWiqdP66hBKFtoFph8_bdmS07KAuoVqWF0dmWzJupaPtC_z3f1BfjPDrDbHBj9EHnnldA8W7BMjfCFGsfO5_s7ktTcTn0P5y8nGp3Wjud8yC_OyIoBo1GgcmRcLOHAU2sMKzEqd_Gkv4I6spWjvBwGFadw4398kO8tpKzRYiJ9tV5s-0xX_DUqHKphQNPWE69HKGnmLpjiBqN2fUZ5iVZqmVsMV015qGlxuRi-lNkq9_XKLhGEyhqOiFa7YWQ",
    "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpIl0sInVzZXJfbmFtZSI6ImFkbWluIiwic2NvcGUiOlsicmVhZCJdLCJhdGkiOiJiN2NmMTg4Ni0yNThlLTRmMTItODBkZS0yZjUwMTcyNjEzZGMiLCJleHAiOjE1NTEwMjQxNDAsImF1dGhvcml0aWVzIjpbIlVTRVIiLCJBVVRIX1NZU1RFTV9NQU5BR0UiXSwianRpIjoiZmVkMDJhMTktYmEwNi00YjU0LTllZjktY2VmMjc2NGJlN2EzIiwiY2xpZW50X2lkIjoiYXBpIn0.K49HiPCLPiMpIYdvCBpNlj_OPxKDBGQhWa4Z6Vu9RxNMCd_Vm_rj7OFqYBda6WnFrqgrT0v9NhGwrVPxC2tXs9fqmGwYDEbUmNuf4rFoGZKcZT-POKcTMv659Utwew_hSlKBxeIhmVY_iQwylVAv-xxUpE0hQIvzPLJ7wOxmorjHeDer7GGiwQeB_O1cmb0Rw94gTGDrAMFt-wsfG06n-9e4T_b4WvTzspf-wQ3gB-vT4IsfdoQuuLTpSBpn_PJWWb9d2ZSEQ_N4iuoeDPPEi9jU9JR8ECKDNeh-VCdaQQF_kI_UbkKtUk-b3qZv_jF0I47PTIDO33LOxd6w6BKL0w",
    "user_id": "1",
    "scope": [
        "read"
    ],
    "mobile": true,
    "expiration": 1550664140286,
    "token_type": "bearer",
    "expires_in": 2543100,
    "userinfo": {
        "id": "1",
        "name": "管理员",
        "username": "admin"
        "imgUrl": "http://47.106.153.78/image.png"
    }
}

</code>
</pre>
