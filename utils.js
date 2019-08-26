// 日期 加年  不用单独判断 平年闰年
const dateDeal = function(date) {
    const startYear = date.getFull() //当前年
    const startMonth = date.getMonth() + 1 //当前月
    const startDay = date.getDate() //当前日
    const startDate = startYear + '-' + startMonth + '-' + startDay; //开始日期
    const contractDuration = +( this.contractDuration.value || 0) //默认为0
    if( contractDuration) {
        const endYear = startYear + contractDuration;//结束年份
        let endDate = endYear + '-' + startMonth + '-' + startDay //结束日期
        const d = new Date( endDate )
        const dMonth = d.getMonth() + 1
        if( !dateTime || dMonth != startDay ) { //二月日期问题特殊处理
            endDate = endYear + '-' + startMonth + '-' +startDay
        }
        this.endContract .value = new Date( endDate )
    }
}

//合并参数
function merge(obj1, obj2) {
    obj1 = obj1 || {}
    obj2 = obj2 || {}
    for (var key in obj2) {
        if(obj2.hasOwnProperty(key)) {
            obj1[key] = obj2[key]
        }
    }
    return obj1
}