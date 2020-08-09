function printLog(a = 1) {
    console.log({ a });
}
printLog();

function getDefault() {
    return 1;
}
function printLog(a = getDefault()) {
    console.log({ a });
}
printLog();

function required() {
    throw new Error('no parameter');
}
function printLog02(a = required()) {
    console.log({ a });
}
printLog02(10); // { a: 10 }
// printLog02(); // 에러 발생: no parameter

function printLog(a, ...rest) {
    console.log({ a, rest });
}
printLog(1, 2, 3);
