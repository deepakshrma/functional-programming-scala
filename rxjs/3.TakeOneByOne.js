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

      const createSuggestionStream = (stream) => {
            return stream.map(listOfUser => listOfUser[Math.floor(Math.random() * listOfUser.length)]);
      }
      const suggestion1 = createSuggestionStream(responseStream);
      const suggestion2 = createSuggestionStream(responseStream);
      const suggestion3 = createSuggestionStream(responseStream);

      const renderUser = (user, selector) => {
          console.log({
            href: user.html_url,
            login: user.login,
            img: user.avatar_url
          });
      }
      suggestion1.subscribe((user)=>{
        renderUser(user, ".some-ran-elem")
      });
      suggestion2.subscribe((user)=>{
        renderUser(user, ".some-ran-elem")
      });
      suggestion3.subscribe((user)=>{
        renderUser(user, ".some-ran-elem")
      });
  });
