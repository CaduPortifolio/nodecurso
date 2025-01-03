import http from 'node:http'
import { Transform } from 'node:stream' 

class inverso extends Transform {
    _transform (chunk, encoding, callback){
        const transforma = Number(chunk.toString())* -1

        console.log(transforma)

        callback(null, Buffer.from(String(transforma)))
    }
}
const server = http.createServer(async(req, res)=>{
    const buffers = []

    for await (const chunk of req){
        buffers.push(chunk)
    }

    const fullstreamcontent = Buffer.concat(buffers).toString()

    console.log(fullstreamcontent)

    return res.end(fullstreamcontent)
})

server.listen(3334)