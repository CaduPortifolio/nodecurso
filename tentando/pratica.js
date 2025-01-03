import http from 'node:http'

const users = []

const serve = http.createServer((req, res) => {
        const {method, url} = req;
        

        if(method === "GET" && url === "/users"){
                return res
                .setHeader("Content-type", "application/JSON")
                .end(JSON.stringify(users))
        }
        if(method === "POST" && url === "/users"){
                users.push({
                        "id": 1,
                        "name": "Carlos Macedo",
                        "email": "Cadumacedo@estudando.com.br",
                })
                return res.writeHead(201).end()
        }
                return res.writeHead(404).end()
        

})
  serve.listen(3333)