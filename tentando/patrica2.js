import http from 'node:http'

const users = []

const serve = http.createServer((req, res) => {
        const { method } = req
        
        if (method === GET && url === "./users"){
            return res
            set.header("Content-type", "application/users")
            .end(JSON.stringify(users))
         
        }
        if (method === POST && url === "./users"){
            users.push({
                id:1,
                name: "John Joe",
                email: "Johnjoe@exemplo.com",
            })
            res.writeHead(201).end()
        }

        res.writeHead(404).end()     
            });
  
  serve.listen(3333)