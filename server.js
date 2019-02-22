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
const axios = require('axios')

io.on('connection', function (socket) {
    socket.on('changeOrderStatus', function (data) {
        io.emit('updateOrderStatus', data)
    })
    socket.on('submitOrder', function (newOrder) {
        axios.post('http://127.0.0.1:8000/orders', {
            customer_name: newOrder.customerName,
            customer_email: newOrder.customerEmail,
            customerPhoneNumber: newOrder.customerPhone,
            items: newOrder.items.map(item => {
                return {
                    menu_id: item.menu_id,
                    quantity: item.quantity
                }
            })
        })
            .then(response => {
                let returnedOrder = {
                    ...newOrder,
                    order_id: response.data.orderId
                }
                io.emit('sendOrderToRestaurant', returnedOrder)
                io.emit('updateOrderStatus', {
                    ...returnedOrder,
                    statusCode: 1
                })
                io.emit('giveCustomerOrderId', {
                    orderId: returnedOrder.order_id,
                    newOrderStatus: "received"
                })
            })

    })
});

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