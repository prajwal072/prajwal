const http = require('http');
var fs= require('fs');
var os=require('os');

console.log(os.freemem());
console.log(os.cpus());
console.log("normal log");
console.log("danger");
console.assert(true,"transaction Completed");
console.assert(false,"transaction failed");




const server = http.createServer((req, res) => {
  if(req.url=="/"){
    fs.readFile("pr.txt",(error,data)=>{

      res.write(data);
      res.end();
    })
    res.write("this is default page");
    res.end();
  }
  if(req.url=="/product"){
    res.write("this is product page");
    res.end();
  }
  if(req.url=="/user"){
    res.write("this is user page");
    res.end();
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });

  // Create a JSON object to send
  const responseObject = {
    message: 'Hello World!',
    status: 'successful in life should',
    timestamp: new Date().toISOString(),
  };

  // Send the JSON response
  res.end(JSON.stringify(responseObject));
});

// Starts a simple HTTP server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
