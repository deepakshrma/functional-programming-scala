const Rx = require("rx");
const axios = require("axios");
const jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;
const {
    window
} = new JSDOM();

// var $ = require("jquery")(window);

//jquery in node

//start from here

const requestStream = Rx.Observable.just("https://jsonplaceholder.typicode.com/posts/1");

const responseStream = requestStream.flatMap(requestUrl =>
    Rx.Observable.fromPromise(fetch(requestUrl))
);

responseStream.subscribe(res => {
    console.log(res);
});
function fetch(url) {
    return axios.get(url).then(x=>x.data)
}