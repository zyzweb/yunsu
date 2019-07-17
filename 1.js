function arr() {
    console.log(arguments[0]);
    console.log(arguments.callee);
    console.log(arguments.length);
}
arr(2)