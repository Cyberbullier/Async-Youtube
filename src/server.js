const app = require('express')();
const http = require('http').createServer(app);
const port = process.env.PORT || 3000

const io = require('socket.io')(http);


// endpoints

app.get('/', (req,res) => res.sendFile(__dirname + '/index.html'));
// listener for socket.io
io.on('connection', socket=>{
    socket.on('chat message',msg => {
        console.log(`message from user: ${msg}`);
    // brodbasts chat message to every client
        io.emit('chat message',msg);
        });



 });


http.listen(port, () => console.log(`listening on port: ${port}`));