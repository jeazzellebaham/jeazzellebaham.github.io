const http = require("http");
const request = require("request");
const port = 8686;

var args = process.argv.slice(2);

const server = http.createServer(function(req, res){
    var url = args[0] ? args[0] : "http://jeazzellebaham.github.io";
//  request("http://jeazzellebaham.github.io", function callBackFunction(err, resp, body))
    request(url, function(err, res, body) {
        if(!err && response.statusCode === 200) {
            res.writeHead(200, {'content-type': 'text/html'})
            res.write(body);
        }
        else {
            res.writeHead(200, {'content-type': 'text/plain'})
            res.write(error.toString());
        }
        res.end();
    });
    
});

server.listen(port);
console.log("servin' on da portha ${port}");