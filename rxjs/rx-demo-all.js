const init = (_win, _$) => {
  const log = console.info.bind(_win);
  const container = _$.querySelector('.container');
  const consoleDiv = _$.querySelector('#pen');
  const log2Console = (message) => {
    consoleDiv.innerHTML += '<br/>' + message;
  }
  const log3Console = (message) => {
    consoleDiv.innerHTML += message;
  }
  const clearConsole = () => {
    consoleDiv.innerHTML = '';
  }
  clearConsole();
  var clearBtn = _$.querySelector('#clear');
  clearBtn.addEventListener('click', clearConsole);


  //Example: 1. Event capture
  var firstBtn = _$.querySelector('#firstBtn');

  firstBtn.addEventListener('click', () => log('Clicked! by plain js'));

  Rx.Observable.fromEvent(firstBtn, 'click')
    .subscribe(() => log2Console('Clicked! by Rx'));

  //Example: 2. Purity

  var count = 0;
  firstBtn.addEventListener('click', () => log(`Clicked ${++count} times`));

  Rx.Observable.fromEvent(firstBtn, 'click')
    .scan(count => count + 1, 0)
    .subscribe(count => log2Console(`Clicked ${count} times`));

  //Example: 3. Flow
  var count = 0;
  var rate = 1000;
  var lastClick = Date.now() - rate;
  firstBtn.addEventListener('click', () => {
    if (Date.now() - lastClick >= rate) {
      log(`Clicked ${++count} times`);
      lastClick = Date.now();
    }
  });
  Rx.Observable.fromEvent(firstBtn, 'click')
    .throttleTime(1000)
    .scan(count => count + 1, 0)
    .subscribe(count => log2Console(`Flow: Clicked ${count} times`));
  //Other flow control operators are filter, delay, debounceTime, take, takeUntil, distinct, distinctUntilChanged etc.

  //Flow: filter
  var clicks = Rx.Observable.fromEvent(_$, 'click');
  var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
  //Flow: delay
  //Delay each click by one second
  var delayedClicks = clicksOnDivs.delay(1000); // each click emitted after 1 second
  //Delay all clicks until a future date happens
  var date = new Date();
  date.setMinutes(date.getMinutes() + 1)// in the future
  var printAfter1Min = clicksOnDivs.delay(date); // each click emitted after 1 second
  //Note work as expected: printAfter1Min ... need to see
  delayedClicks.subscribe(ev => log2Console(ev.target.tagName));
  //DebounceTime and ThrottleTime
  const mousemoveArea = _$.querySelector('#mousemove');

  var mousemoveStream = Rx.Observable.fromEvent(mousemoveArea, 'mousemove');

  mousemoveStream
    .throttleTime(500)
    .subscribe(function (e) {
        log3Console("t ")
    });
  mousemoveStream
    .debounceTime(500)
    .subscribe(function (e) {
        log3Console("d ")
    });

  //Take: Take the first 5 seconds of an infinite 1-second interval Observable
  var interval = Rx.Observable.interval(1000);
  var five = interval.take(5);
  five.subscribe(x => log3Console("take:"+x));
  //TakeUntil: Tick every second until the first click happens
  result = interval.takeUntil(mousemoveStream);
  result.subscribe(x => log3Console("tu"+x));
  const Ob = Rx.Observable;
  //Distinct:
  log3Console("Distincts 1:")
  Ob.of(1,2,3,4,2,1)
    .distinct()
    .subscribe((x)=> log2Console(x))
  const users =[
    {name:"deepak",age:27},
    {name:"ram",age:29},
    {name:"monty",age:30},
    {name:"deepak",age:41}
  ];
  log3Console("Distincts users:")
  Ob.of.apply(null,users)
    .distinct((user) => user.name)
    .subscribe((user)=> log2Console(user.name));

    //Values:
    var count = 0;
    var rate = 1000;
    var lastClick = Date.now() - rate;
    firstBtn.addEventListener('click', (event) => {
      if (Date.now() - lastClick >= rate) {
        count += event.clientX;
        log("Value: " + count)
        lastClick = Date.now();
      }
    });
    Ob.fromEvent(firstBtn, 'click')
      .throttleTime(1000)
      .map(event => event.clientX)
      .scan((count, clientX) => count + clientX, 0)
      .subscribe(count => log2Console("Value: "+count));

    //Pluck:
    var clicks = Rx.Observable.fromEvent(_$, 'click');
    var tagNames = clicks.pluck('target', 'tagName');
    tagNames.subscribe(x => log(x));

    var clicks = Ob.fromEvent(_$, 'click');
    var pairs = clicks.pairwise();
    var distance = pairs.map(pair => {
      var x0 = pair[0].clientX;
      var y0 = pair[0].clientY;
      var x1 = pair[1].clientX;
      var y1 = pair[1].clientY;
      return {
        x : [x0, y0],
        y : [x1, y1],
        diff : Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2))
      };
    });
    distance.subscribe(x => log("pairwise: ",x));
}
setTimeout(init, 1000, window, window.document);
