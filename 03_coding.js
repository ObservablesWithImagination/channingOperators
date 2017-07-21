class Observable {
    constructor (fn) {
        this.subscribe = fn
    }

    map (mapFn) {
        return new Observable(observer => {
            return this.subscribe({
                next: value => observer.next(mapFn(value)),
                error: err => observer.error(err),
                complete: comp => observer.complete(comp)
            })
        });
    }
}

const observable = new Observable(observer => observer.next('hello world'))
.map(value => value + ' !!')
.map(value => value.split(' '))
.map(value => value.length);

observable.subscribe({
    next: value => {console.log(value)}
});