```js
//计算规则
{invoiceApplicationFormSon.iqty}-{invoiceApplicationFormSon.invoiceIssuedNum}
//销售确认单数量- 已开票数量
{payApplicationFormSon.ftaxsum}*{fexchrate}
```

### a-sheet  子表   
```js
this.sheet.rows.length   //子表数据行数
this.sheet.removeRow()    
this.sheet.removeRow(i)   //移除行
this.invoiceApplicationFormSon.getColumnValueChange("warehouse").subscribe()
that.matter_list.rows[0].value = {}; //整行赋值
this.Sheet1554966955640.rows[0].children.text1.value = 'dfdf'  //单元格赋值
this.sheet1.getCell(0, 0).value = 'a';  //第一行第一列赋值
changed.value
changed.oldValue
监控子表某一列的数据---recommendedActivity（子表名）themeImg（列名)
子表每一行的id带不过来需要重新发一个请求(list) 
```

### 自定义表单

自定义表单可以写div且必须放在section里面,在线编辑只能引用jquery,不能写div
可以引入jquery  不用打包  以**iframe**形式加载
子表的数据是在list xhr请求中


<script src="https://cdn.bootcss.com/jquery/2.2.4/jquery.min.js"></script>
按钮   this.actions.code
.h3-panel  子标题

路由   this.$router.currentRoute

### 阻止提交

onCustomAction   onPreAction中   onActionDone   **return false**   阻止提交
如果 需要在 提交表单之前做 拦截的话， onActionDone 里面返回 false， 在需要 处理的地方执行 this.action( 'code' )

表单逻辑执行接口
执行表单内置逻辑，如暂存、提交等，目前公开的函数：
·doAction
·submit 
submit是doAction（submit）的简写，doAction唯一的参数是action.code

### 升级版本
- 先下载最新产品源码(source)   
- 打包的时候要把原来版本的extend文件夹和src/apis 替换到当前版本中
- admin  portal  mobile 分别打包然后通过ftp上传  
- 重启一下**Nginx**

### 反向代理

![1566481459924](C:\Users\16090\AppData\Roaming\Typora\typora-user-images\1566481459924.png)

![1566489428155](C:\Users\16090\AppData\Roaming\Typora\typora-user-images\1566489428155.png)
docker restart nginx 重启nginx
修改ip之后要重启引擎

### 数据权限
```js
dataPermission.examinedOrg.r = true  // r必填  e可写  v可见
```

### 钉钉后台配置

![1567068697129](C:\Users\16090\AppData\Roaming\Typora\typora-user-images\1567068697129.png)

我们的两个基础库我全部都配有自动格式化与代码规范。有时代码自动格式化不好用是因为需要把该项目以工作区的形式存在，因为vscode只会读取根目录下的配置



