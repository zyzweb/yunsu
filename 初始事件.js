(function(form){
    /**
     * 用户自定义JS区域
     */
    /**
     * 事件绑定，form.on
     * @param eventType 事件类型
     * @params function 事件
     * @param  cover    true, false 是否覆盖root的生命周期 默认不覆盖 
     */
    //数据加载后，渲染之前，this为window
    form.on('onLoad',function(data, dataPermission){},'cover');
    //渲染完成后
    form.on('onRendered',function(data){});
    //内置校验完成后，返回false阻止提交
    form.on('onValidate',function(action,data){});
    //操作前（包含自定义按钮）执行，返回false阻止按钮操作
    form.on('onPreAction',function(action,data){});
    //自定义按钮执行
    form.on('onCustomAction',function(action,data){});
    //操作完成后执行
    form.on('onActionDone',function(action,data,httpRes){});
})


// 5b8417b73ccf49238a52b1b4cc8dc639