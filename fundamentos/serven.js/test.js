import {Readable, Transform, Writable} from 'node:stream'

class onetohundredstream extends  Readable {
    index = 1

    _read(){
        const i = this.index++

       setTimeout(() =>{
        if (i > 100){
            this.push(null)
        } else {
            const buf = Buffer.from(String(`${i}\n`)) // `$ = Dá espaço entre os número {i} \n = pula uma linha`
            this.push(buf)
        }
       },100) // 100 serve para os números irem aparecendo mais devagar, apagando o 100 e a vírgula tudo vai aparecer muito rápido.
    }
}

class inverso extends Transform {
    _transform (chunk, encoding, callback){
        const transforma = Number(chunk.toString())* -1
        callback(null, Buffer.from(String(transforma)))
    }
}
class multiplybytenstream extends Writable {
    _write (chunk, encoding, callback){
        console.log(Number(chunk.toString())*10)
        callback()
    }
}
new onetohundredstream()
.pipe(new inverso())
.pipe(new multiplybytenstream())