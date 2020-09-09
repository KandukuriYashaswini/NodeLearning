var http=require('http');
var requestListener=function(req,res){
    if(req.url=='/register'){
        res.writeHead(200);
        res.end("<h1>registration page</h1>");
    }
    else{

    res.writeHead(200);
    res.end("<h1>hello world</h1>");
    }
}
var server=http.createServer(requestListener);
server.listen("8000");