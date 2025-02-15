const http = require("http");
const {listen} = require("express/lib/application");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain"});
    res.end("Bienvenu(e) sur mon serveur node");
})
server.listen(3000, () =>{
    console.log("Server started on: http://localhost:3000");
})