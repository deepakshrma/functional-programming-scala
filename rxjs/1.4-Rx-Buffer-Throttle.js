console.clear();
const log = console.info;
let btn = document.querySelector('button');
let clicks = Rx.Observable.fromEvent(btn, 'click');

const open = Rx.Observable.interval(1000);

function sendValues(arr){
    console.log(">>>>", arr)
    let result = document.querySelector('#results');
    result.innerHTML = result.innerHTML + '<br/>' + JSON.stringify(arr);
}
let count =0

clicks.scan((s)=>s+1, 0)
  //.buffer(open) //using open interval Observal
  .buffer(clicks.throttle(1000)) //using open interval Observal
  .filter( x => x.length > 0)
  .forEach(sendValues);
