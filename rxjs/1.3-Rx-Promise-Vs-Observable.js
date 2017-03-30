const Rx = require("rx");
const log = console.info.bind(this);
let promise = new Promise((resolve)=>{
    log("Promise started!")
    setTimeout(()=>{
      log("Inside promise timeout!!");
      resolve("Hi am doing ok with promise!");
    }, 1000)
});
promise.then(log);

let source = Rx.Observable.create((observal)=>{
  log("Observable started!")
  const id = setTimeout(()=>{
    log("Inside observal timeout!!");
    observal.onNext("Hi am doing ok with observal!");
  }, 1000);
  return ()=>{
    clearTimeout(id);
  }
})
const disposable = source.forEach(log);
setTimeout(()=>disposable.dispose(), 500);
