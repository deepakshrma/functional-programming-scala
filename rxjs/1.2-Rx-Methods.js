const Rx = require("rx");

let source = [1,2,3,4,5];

source.filter(x=> x%2===1)
      .map(x=> x+"!")
      .forEach(x=> console.log(x))
// let rsource = Rx.Observable.fromArray([1,2,3,4,5]);
let rsource = Rx.Observable.interval(500).take(10);

rsource.filter(x=> x%2===1)
      .map(x=> x+"!")
      .forEach(x=> console.log(x))
