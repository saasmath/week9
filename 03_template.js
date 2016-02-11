//Write a function that takes a port as an argument and makes a server
//which displays the time when one goes to the url.
//Note that the raspberry pis receive packets on port x000 to x100 where
//x is the number of the raspberry pi

port = process.argv[2];
var port = (process.argv[2] ? Number(process.argv[2]) : 3000);
var net = require('net');
var server = net.createServer(respond);

function respond(socket) {
    d = new Date();
    socket.end(d.toString());
}
console.log("Listening on port ", port);
server.listen(port);