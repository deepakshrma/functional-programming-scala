$(()=>{
  const refreshBtn = $(".refresh");
  const refreshButtonS = Rx.Observable.fromEvent(refreshBtn, 'click');

  const closeStream1 =Rx.Observable.fromEvent($("#close1"), 'click');
  const closeStream2 =Rx.Observable.fromEvent($("#close2"), 'click');
  const closeStream3 =Rx.Observable.fromEvent($("#close3"), 'click');

  const startInitStream = Rx.Observable.just('https://api.github.com/users');

  const requestOnRefreshStream = refreshButtonS.map(ev => {
    var randomOffset = Math.floor(Math.random() * 500);
    return "https://api.github.com/users?since="+randomOffset;
  });

  // ----u-----------------t-->
  //     startWith(null)
  // null----u-------------t-->
  // ----------null---null---->
  //         merge
  // null----u-null---null-t-->
  const requestStream = startInitStream.merge(requestOnRefreshStream);
  const responseStream = requestStream
  .flatMap(requestUrl =>{
    return Rx.Observable.fromPromise(jQuery.getJSON(requestUrl));
  })
  .shareReplay(1);
  const getRandomUser = (listOfUser) =>{
    return listOfUser[Math.floor(Math.random() * listOfUser.length)];
  };
  //RefreshCleckS:    ------------f---------->
  //startInitStream:  f---------------------->
  //            merge
  //requestStream:    r-----------r---------->
  //responseStream:   -----R----------R------>
  //closeStream1:     -------------------x--->
  //suggestion1:      N----u------N--u---u--->

  const createSuggestionStream = (resStream, closeStream)=>{
    return resStream.map(listOfUser => {
      return getRandomUser(listOfUser);
    })
    //onstart hide data
    .startWith(null)
    //while refresh hide data
    .merge(requestOnRefreshStream.map(ev=> null))
    //Merge with close steam, to refres only selected item
    .merge(closeStream.withLatestFrom(resStream, (ev, userList)=>{
      return getRandomUser(userList);
    }))
    ;
  };
  const suggestion1 = createSuggestionStream(responseStream, closeStream1);
  const suggestion2 = createSuggestionStream(responseStream, closeStream2);
  const suggestion3 = createSuggestionStream(responseStream, closeStream3);

  const renderUser = (user, selector) => {
    if(user == null){
      $(selector).hide();
    }else{
      $(selector).show().text(JSON.stringify({
        href: user.html_url,
        login: user.login,
        img: user.avatar_url
      }, null, 4));
    }
  };
  suggestion1.subscribe((user)=>{
    renderUser(user, "#user1");
  });
  suggestion2.subscribe((user)=>{
    renderUser(user, "#user2");
  });
  suggestion3.subscribe((user)=>{
    renderUser(user, "#user3");
  });
});
