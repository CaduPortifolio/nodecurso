import http from 'node:http'

const users = []

const serve = http.createServer(async(req, res) => {
        const {method, url} = req
        
        const buffers = []

        for await (const chunk of req){
            buffers.push(chunk)
        }
    
        try {
            req.fullstreamcontent = JSON.parse(Buffer.concat(buffers).toString())
        } catch{
            req.fullstreamcontent = null
        }
    
        

        if(method === "GET" && url === "/users"){
                return res
                .setHeader("Content-type", "application/json")
                .end(JSON.stringify(users))
        }
        if(method === "POST" && url === "/users"){
            const {name, email} = req.fullstreamcontent
                users.push({
                        "id": 1,
                        name,
                        email,
                })
                return res.writeHead(201).end()
        }
                return res.writeHead(404).end()
        

})
  serve.listen(3333)