let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
app.set('view engine','ejs');
app.get('/',function (req,res,next) {
    res.render('index');
});
server.listen(8080);