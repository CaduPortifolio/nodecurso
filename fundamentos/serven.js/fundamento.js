import { Readable } from "node:stream"

class onetohundredstream extends Readable {
    index = 1

    _read(){
        const i = this.index++

        if (i > 100){
            this.push(null)
        } else {
            const buf = Buffer.from(String(i))
            this.push(buf)
        }
    }
}
new onetohundredstream()
.pipe(process.stdout)