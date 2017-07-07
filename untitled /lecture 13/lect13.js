// its time for some back-end
var http= require('http');

var port=5001;

function requestHandler(request,response){
    response.end("hello world");
}

var server = http.createServer(requestHandler);
// console.log(server);

server.listen(port,function (err) {
    if (err) {
        throw err;
    }
    console.log("server is running on port"+port);
});
// server.close();
