const http = require("http");
const fileSystem = require("fs");
const readline = require("readline");

const server = http.createServer((req, res) => {
    if (req.url === "/create") {
        fileSystem.writeFile("./file", "Ici le contenu ajouté depuis le client",(err)=>{
            if (err){
                res.writeHead(500, { "Content-Type": "text/plain"});
                res.end(err);
            }
            res.end("Creation effectue");
        })
    }else if (req.url === "/read") {
        if (fileSystem.existsSync("./file") === false) {
            res.writeHead(400, { "Content-Type": "text/plain"});
            res.end("Not found");
        }
        fileSystem.readFile("./file", (err, data)=>{
            res.end(data);
        })
    }else if (req.url === "/delete") {
        if (fileSystem.existsSync("./file") === false) {
            res.writeHead(400, { "Content-Type": "text/plain"});
            res.end("File Not found");
        }
        fileSystem.unlink("./file", (err)=>{
            if (err){
                res.writeHead(500, { "Content-Type": "text/plain"});
                res.end(err);
            }
            res.end("Suppression prise en compte")
        })

    }else if (req.url === "/edit") {
        if (fileSystem.existsSync("./file") === false) {
            res.writeHead(400, { "Content-Type": "text/plain"});
            res.end("File Not found");
        }
        fileSystem.appendFile("./file","nouveau contnu", (err)=>{
            if (err) res.end(err);
        })
        res.end("Edition prise en compte")
    }else{
        res.writeHead(200, { "Content-Type": "text/plain"});
        res.end("Bienvenu sur ma page d'accueil")
    }
    // res.end("Bienvenu(e) sur mon serveur node");
})

server.listen(3000, () =>{
    console.log("Server started on: http://localhost:3000");
})