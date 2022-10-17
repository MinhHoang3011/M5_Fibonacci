function fibo(len) {
    var start = 0;
    var second = 1;
    var arr = [0, 1];
    for (var i = 2; i < len; i++) {
        var latest = second + start;
        start = second;
        second = latest;
        arr.push(second);
    }
    return arr;
}
console.log(JSON.stringify(fibo(6)));
// total of all fibo series
var fibolist = fibo(6);
function addition(arr) {
    var total = 0;
    arr.map(function (a) {
        total = total + a;
    });
    return total;
}
console.log(addition(fibolist));
