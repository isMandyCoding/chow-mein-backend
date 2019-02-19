
const menu = require("../controllers/menu.js");
const orders = require("../controllers/orders.js")

module.exports = function (app) {

    //menu routes
    app.get('/menu', menu.index);
    app.get('/menu/:id', menu.show)
    app.post('/menu', menu.create)
    app.patch('/menu/:id', menu.update)
    app.delete('/menu/:id', menu.destroy)


    //orders routes
    app.get('/orders', orders.index)
    app.get('/orders/:id', orders.show)
    app.post('/orders', orders.create)
    app.patch('/orders/:id', orders.update)
    app.delete('/orders/:id', orders.destroy)



}
