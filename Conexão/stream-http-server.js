import http from 'node:http'
import { Transform } from 'node:stream' 

class inverso extends Transform {
    _transform (chunk, encoding, callback){
        const transforma = Number(chunk.toString())* -1

        console.log(transforma)

        callback(null, Buffer.from(String(transforma)))
    }
}
const server = http.createServer((req, res)=>{
    return req
    .pipe(new inverso())
    .pipe(res)

})

server.listen(3334)