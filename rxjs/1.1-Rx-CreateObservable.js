const Rx = require("rx");
let source = Rx.Observable.create((obserable)=>{
      const id = setTimeout(()=>{
        console.log("Inside timeout");
        obserable.onNext("42");
        obserable.completed();
      }, 2000);
      //called on dispose call 
      return () => {
          clearTimeout(id);
      }
});

let sub = source.subscribe((data)=>{
    console.log("data:", data);
},
(error)=>{
    console.error("error:", error);
},
()=>{
    console.error("done");
})
setTimeout(()=>{
    sub.dispose();
}, 500)
