### 语法
 [简书](http://www.jianshu.com)
 ![](http://upload-images.jianshu.io/upload_images/259-0ad0d0bfc1c608b6.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
 > 一盏灯， 一片昏黄； 一简书， 一杯淡茶。 守着那一份淡定， 品读属于自己的寂寞。一片昏黄； 一简书， 一杯淡茶。 守着那一份淡定， 品读属于自己的寂寞。一片昏黄； 一简书， 一杯淡茶。 守着那一份淡定， 品读属于自己的寂寞。
 *一盏灯*
 **一杯**
`hello world`
```
hello world
```

### 自定义表单

自定义表单可以引用jquery,可以写 div但必须放在<section> 里面,
在线编辑可以引用 jquery,不能写 div
不用打包 以**iframe**形式加载
子表的数据是在 list xhr 请求中

<script src="https://cdn.bootcss.com/jquery/2.2.4/jquery.min.js"></script>
按钮 this.actions.code
.h3-panel 子标题

路由 this.$router.currentRoute.query.objectId

### 阻止提交

onCustomAction onPreAction 中 onActionDone **return false** 阻止提交
如果 需要在 提交表单之前做 拦截的话， onActionDone 里面返回 false， 在需要 处理的地方执行 this.action( 'code' )

表单逻辑执行接口
执行表单内置逻辑，如暂存、提交等，目前公开的函数：
·doAction
·submit === doAction('submit)
submit 是 doAction（submit）的简写，doAction 唯一的参数是 action.code

### 升级版本

- 先下载最新产品源码(source)
- 打包的时候要把原来版本的 extend 文件夹和 src/apis 替换到当前版本中
- admin portal mobile 分别打包然后通过 ftp 上传
- 重启一下**Nginx**
- npm run package 会将@cloudpivot 打包进 node_modules
- portal/src/apis/ehr/ehr.api.ts 和 portal/extends/ehrApi/ehr.api.ts 中
  const ehrApiPath: string = env.apiHost; 不能写死

### 反向代理

![1566481459924](C:/Users/16090/AppData/Roaming/Typora/typora-user-images/1566481459924.png)

![1566489428155](C:\Users\16090\AppData\Roaming\Typora\typora-user-images\1566489428155.png)

![1567504544643](C:\Users\16090\AppData\Roaming\Typora\typora-user-images\1567504544643.png) docker restart nginx 重启 nginx
修改 ip 之后要重启引擎


### 钉钉后台配置

![1567068697129](C:\Users\16090\AppData\Roaming\Typora\typora-user-images\1567068697129.png)


```js
//.env.debug
NODE_ENV = "debug";

VUE_APP_API = "http://47.106.247.123:8080"; //云枢接口请求地址,后台提供

VUE_APP_OAUTH_HOST = "http://47.106.247.123:8888"; //云枢安全验证,后台提供
VUE_APP_PORTAL_IP = "http://47.106.247.123"; //前台部署地址
VUE_APP_OAUTH_CLINET_ID = "demo"; //请求前缀? api 鉴权参数
VUE_APP_OAUTH_SECRET = "8a5da52ed126447d359e70c05721a8aa"; //应用验权, 引擎给
VUE_APP_OAUTH_SCOPE = "oauth"; //应用验权key,引擎给
VUE_APP_OAUTH_REDIRECT = "http://127.0.0.1:9100"; //登录后跳转地址pc端是不需要加后缀,admin与移动端要加后缀
VUE_APP_OAUTH_DDAPPID = "dingoat966ilgmylhvaqby"; //钉钉应用appid 创建钉钉企业时生成,由用户或后台提供(移动端配单点) 在系统管理里面拿到
```

应用简介：
中检联云枢系统
应用首页地址：
http://47.106.77.226/mobile/index.html?corpId=$CORPID$&agentId=282600079
PC端首页地址：
http://47.106.77.226?corpId=$CORPID$&agentId=282600079
管理后台地址：
http://47.106.77.226/admin
可使用范围：
奥哲团队,赵永安,朱原正,李祖平,李耀中,李婷兰,胡玮宏
AgentId：282600079
服务器出口IP：
47.106.77.226
AppKey：dingherxvpln2ln3izt6
AppSecret：RtVGIyPsHyAT1qZ4q2d0iVRTRUxAKaRHilS8sCqtSu3xFfEVv8ri__soouOR3BU3


### 添加权限
钉钉后台通讯录添加一个人进组织---在Navicat user表中更改账号密码

https://open-doc.dingtalk.com/microapp/serverapi2/kymkv6  钉钉扫码登录

https://www.cnblogs.com/vicky1018/p/9086171.html

免登

https://open-doc.dingtalk.com/microapp/dev/about


五 南山项目分享（主要实现功能）

1 钉钉门户
2 免登
3 扫码签到
4 富文本编辑
5 表单页面自定义按钮，自定义交互，图片上传前压缩处理
6 报表及热力图
7 公用组件 移动端数据选择 日期选择 左划选择 搜索组件等。
8 注册相关
9 地图相关（定义，导航）
10 移动端预览

 





