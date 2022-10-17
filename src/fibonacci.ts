function fibo(len: number): Array<any> {
    let start = 0;
    let second = 1;
    let arr = [0, 1];
    for(let i = 2; i < len; i++) {
        let latest = second + start;
        start = second;
        second = latest;
        arr.push(second)
    }
    return arr;
}
console.log(JSON.stringify(fibo(6)))
// total of all fibo series
const fibolist = fibo(6);
function addition(arr: Array<any>): number {
    let total = 0;
    arr.map( a => {
        total = total + a;
    })
    return total
}
console.log(addition(fibolist))
