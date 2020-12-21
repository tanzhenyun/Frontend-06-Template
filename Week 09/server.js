const http = require("http");

http.createServer((request,response) =>{
    let body = [];
    request.on('error',(err)=>{
        console.log(err)
    }).on('data',(chunk)=>{
        body.push(chunk.toString());
    }).on('end',()=>{
        // body = Buffer.concat(body).toString();
        // body = (Buffer.concat([ Buffer.from(body.toString()) ])).toString();
        response.setHeader('Content-Type','text/html');
        response.setHeader('X-Foo','bar');
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.end(
`<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>第九周</title>
</head>
<body>
</body>
</html>`);
    })
}).listen(8088);
console.log('server started')