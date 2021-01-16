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
`<html maaa=a >
<head>
    <style>
body div #myid{
    width:100px;
    background-color:#ff5000;
}
body div img{
    width:30px;
    background-color:#ff1111;
}
    </style>
</head>
<body>
    <div>
        <img id="myid" />
        <img />
    </div>
</body>
</html>`);
    })
}).listen(8088);
console.log('server started')