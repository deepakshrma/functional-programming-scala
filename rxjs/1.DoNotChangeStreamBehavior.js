const Rx = require("rx");

//Init behavior on start
var streamA = Rx.Observable.of(3, 4);

//Don't do..
//streamA.set(4);
var streamB = streamA.map(a =>10 * a);

streamB.subscribe(b=>console.log(b));
