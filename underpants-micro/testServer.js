// import the library
const http = require("http");
let port = process.argv[2];

// create the server

http.createServer(function(req,res){
  // handle response  
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('Hi ');
      res.end('Planet!');

}).listen(port);
