var arr = [{name:1,age:2,sex:null}]
// var b = arr
// b[0].name = 33
// console.log(arr);

var objDeepCopy = function (source) {
    var sourceCopy = source instanceof Array ? [] : {};
    for (var item in source) {
        sourceCopy[item] = typeof source[item] === 'object' ? objDeepCopy(source[item]) : source[item];
    }
    return sourceCopy;
}
var b = objDeepCopy(arr)
b[0].name = 33
console.log(b);
console.log(arr);