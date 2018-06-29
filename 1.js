let http=require('http');
let fs=require('fs');
let static=require('express-static');
let server=http.createServer(function (req,res) {
    console.log(req.url);
    res.setHeader('content-type', 'text/html;charset=utf-8');
    if (req.url==='/'){
        fs.readFile('./index.ejs',function (err,data) {
            res.end(data);
        });
    }
});
let io=require('socket.io')(server);
io.on('connection',function (socket) {
   console.log('io链接');
    socket.on('question',function (msg) {
        console.log(msg);
        //socket.emit('answer','hahahaha');

        //广播模式
        io.emit('answer',msg);
    });
});
server.listen(3000);