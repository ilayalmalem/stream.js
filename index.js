function ranGEN(len) {
    const abc = [
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9
    ]
    let r = '';
    for (let index = 0; index <= len; index++) {r += abc[Math.floor(Math.random() * Math.floor(abc.length))]}
    return r;
}

class Stream {
    constructor(data) {
        this.data = data;
        this.listeners = [];
    }

    update(newData) {
        this.listeners.forEach(l => {
            l.cb(newData)
        })
    }

    emit(data) {
        this.listeners.forEach(l => {
            if (l.emitCB) {
                l.emitCB(data)
            }

            else {
                console.warn(`Listener ${l.id} didn't attach, skipping.`)
            }
        })
    }
}

class Listener {
    constructor(stream, cb) {
        if (stream instanceof Stream) {
            this.stream = stream;
            this.cb = cb;
            this.id = `b[${ranGEN(4)}]::i[${ranGEN(10)}]`
            this.stream.listeners.push(this);
        }
        else {
            throw new TypeError('The passed stream is not an instance of a Stream object.')
        }
    }

    attach(cb) {
        this.emitCB = cb;
    }
}

