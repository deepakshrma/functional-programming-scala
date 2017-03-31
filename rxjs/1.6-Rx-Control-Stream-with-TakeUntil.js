const stream = document.querySelector('#stream');
const toggleBtn = document.querySelector('#toggle');
const checked = Rx.Observable.fromEvent(toggleBtn, 'change')
                  .map(x=> x.target.checked);
const dotSource = Rx.Observable.interval(300)
                    .map(()=> '.');
checked
  .filter(x=> x === true)
  .flatMap(x=> dotSource.takeUntil(checked))
  .subscribe(x=> stream.innerHTML += x);
