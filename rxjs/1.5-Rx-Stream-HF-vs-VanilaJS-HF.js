console.clear && console.clear();
const log = console.info;
const Rx = require("rx");

let numbers = [1,2,3,4,5,6];

var result = numbers
  .filter((x, i, arr)=> {
    log("filter-Is my array same as old: "+ (numbers === arr));
    return x%2 === 0;
  })
  .map((x, i, arr)=> {
    log("map-Is my array same as old: "+ (numbers === arr));
    return x + '!';
  })
  .reduce((r, x, i, arr)=> {
    log("reduce-Is my array same as old: "+ (numbers === arr));
    return r + x;
  }, '');

log(result);

let rxNumbers = Rx.Observable.fromArray([1,2,3,4,5,6]);

rxNumbers
  .filter((x)=> {
    log("rx filter- "+ x);
    return x%2 === 0;
  })
  .map((x)=> {
    log("rx map- "+ x);
    return x + '!';
  })
  .reduce((r, x)=> {
    log("rx reduce- "+ x);
    return r + x;
  }, '')
  .subscribe(log);;
