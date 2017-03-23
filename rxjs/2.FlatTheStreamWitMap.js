const Rx = require("rx");
require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }

    var $ = require("jquery")(window);


    //jquery in node

    //start from here

    const requestStream = Rx.Observable.just('https://api.github.com/users');

    const responseStream = requestStream.flatMap(requestUrl => Rx.Observable.fromPromise($.getJSON(requestUrl)));

    responseStream.subscribe(res =>{
         console.log(res);
    });
});
