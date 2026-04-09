const http = require("http"); 
const fs = require("fs"); 

const port = 7000; 

const server = http.createServer(); 

server.on("request", (req, res) => {
    let url = req.url; 
    console.log(url); 

if(url === "/index.html") {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("./index.html").pipe(res); 
}

else if(url === "/portfolio.css") {
    res.writeHead(200, {"Content-Type": "text/css"});
    fs.createReadStream("./portfolio.css").pipe(res);
}

else if(url === "/portfolio.js") {
    res.writeHead(200, {"Content-Type": "text/javascript"});
    fs.createReadStream("./portfolio.js").pipe(res);
}

else if(url === "/about.html") {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("./about.html").pipe(res);
}

else if(url === "/contact.html") {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("./contact.html").pipe(res);
}

else if(url === "/project.html") {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("./project.html").pipe(res);
}

else if(url === "/resume.html") {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream("./resume.html").pipe(res);
}

else if(url.startsWith("/images/")) {
    res.writeHead(200, {"Content-Type": "image/png"});
    fs.createReadStream("./" + url).pipe(res);
}

else {
    res.writeHead(404, {"Content-Type": "text/html"});
    res.end("<h1>404 Not Found</h1>");
}
}); 

server.on("listening", () => {
    console.log('Server is listening on port ' + port); 
}); 

server.listen(port); 