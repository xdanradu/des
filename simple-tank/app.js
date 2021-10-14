const { Subject } = rxjs;

class Tank {
    level = 0;

    in = null;
    out = null;

    full$ = new Subject(false);
    empty$ = new Subject(false);

    width = 0;
    step = 1;
    timeInterval = 100;

    constructor (volume = 100)  {
        this.volume = volume;
        this.progress = document.getElementById("bar");
    }

    fill() {
        this.in = setInterval(() => {
            if (this.level >= this.volume) {
                this.full$.next(true);
            } else {
                this.level += this.step;
                console.log(`Filling: ${this.level}`);
                this.fillFrame();
            }
        }, this.timeInterval);
    }

    closeIn() {
        clearInterval(this.in);
    }

    drain() {
        this.out =  setInterval(() => {
            if (this.level <= 0) {
                this.empty$.next(true);
            } else {
                this.level -= this.step;
                console.log(`Draining: ${this.level}`);
                this.drainFrame()
            }
        }, this.timeInterval);
    }

    closeOut() {
        clearInterval(this.out);
    }

    fillFrame() {
            this.width++;
            this.progress.style.width = ((100/this.volume)*this.width) + '%';
            this.progress.innerHTML = Math.round((100/this.volume)*this.width * 1)  + '%';
    }

    drainFrame() {
        this.width--;
        this.progress.style.width = ((100/this.volume)*this.width) + '%';
        this.progress.innerHTML = Math.round((100/this.volume)*this.width * 1)  + '%';
    }
}

let tank = new Tank(30);

tank.full$.subscribe(() => {
    console.log('Tank full');
    tank.closeIn();
    tank.drain();
});

tank.empty$.subscribe(() => {
    console.log('Tank empty');
    tank.closeOut();
});

function start(){
    tank.fill();
}
