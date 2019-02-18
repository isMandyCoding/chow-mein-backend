
const menu = require("../controllers/menu.js")
module.exports = function (app) {

    app.get('/menu', menu.index);
    app.get('/menu/:id', menu.show)
    app.post('/menu', menu.create)

}
