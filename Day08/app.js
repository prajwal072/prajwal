const http = require("http")
const fs = require('fs')

// function rqListener(req, res) {

// }

// http.createServer(rqListener);

const server = http.createServer((req,res) => {
    // console.log(req);
    // console.log(req.url, req. method, req.headers);
    // process.exit();

    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Enter message </title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end();  //to not execute belowed code so return (to exit out of this function)
    }
    if(url === '/message' && method ==='POST'){
        const body = [];
        req.on('data', (chunk) => {  //on allows to listen certain events used to bind events to objects, allowing you to execute functions when specific events occur.
            console.log(chunk);     //entered data we get into chunks r
            body.push(chunk);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString(); //buffer which allows to hold multiplt chunks before they are released
            const message = parseBody.split('=')[1];
            // fs.writeFileSync('message.txt', message); //it is synchronus if in case we have large file at that time next code after this line not executed until this line get exceuted so NOT USE SYNC in case of large file it can stuck
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/')      //err for if error happened here we are not handling it 
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My First page</title></head>')
    res.write('<body> <h1>Hello From my node.js server </h1></body>')
    res.write('</html>')
    res.end();
})

server.listen(3000);