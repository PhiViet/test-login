var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var server = require('http').Server(app);
var io = require('socket.io')(server);
// mongoose.connect('mongodb://phiviet:viethoa00@ds139951.mlab.com:39951/dbchat', { useNewUrlParser: true });

// path to dist
app.use(express.static(__dirname + '/dist/APP-LOGIN'));
server.listen(process.env.PORT || 8080);


var listUser = [];

io.on('connection', function (socket) {
    console.log('a user connected');    
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('login',function(data) {
        // console.log(data);
        listUser.push(data);
        io.emit('online',listUser);
        // socket.broadcast.emit('online',listUser);
        console.log(listUser);

    });

    // socket.emit('online',listUser);
});