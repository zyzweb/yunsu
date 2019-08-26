form.on(
  "onLoad",
  function(data, dataPermission) {
    dataPermission["user_phone"].e = false;
    let _this = this;
    let queryParam = _this.$router.currentRoute.query;
    let idCard = queryParam.idCard;
    let userPhone = queryParam.userPhone;
    const param = {
      /* userPhone: userPhone,
          idCard: idCard,
          code: '1212' */
      userPhone: "18668173937",
      idCard: "340621199505065613",
      code: "1212"
    };
    return axios.post("/api/education/selectByIdAndPhone", param).then(res => {
      if (res.errcode === 0) {
        if (res.data.length == 0) {
          _this.user_phone.value = userPhone; //手机号
          _this.id_card.value = idCard; //身份证号码
        } else {
          const lists = res.data;
          console.log(lists);
          console.log("查询成功");
        }
        return res.data;
      } else if (res.errcode === 5001) {
        _this.$confirm({ title: "提示", content: res.errmsg });
      } else if (res.errcode === 5002) {
        _this.$confirm({ title: "提示", content: res.errmsg });
      }
      return data;
    });
  },
  "cover"
);
