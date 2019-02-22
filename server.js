const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const chalk = require('chalk')
const cowsay = require('cowsay')
const cows = require("./cows.js")
const cors = require('cors')
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log("client connected")
    socket.on('changeOrderStatus', function (data) {
        io.emit('updateOrderStatus', data)
    })
});
// io.on('test-event', function (data) {
//     console.log(data);
// })



app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.use(express.static(path.join(__dirname, "public")));

require("./config/session.js")(app)

var routes_setter = require('./config/routes.js');
routes_setter(app);


server.listen(port, function () {
    console.clear()
    console.log(chalk.magenta(cowsay.say({
        text: `server now listening on port ${port}`,
        f: cows[Math.floor(Math.random() * cows.length)].animal
    })));
});