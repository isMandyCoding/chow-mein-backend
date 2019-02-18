
const menu = require("../controllers/menu.js")
module.exports = function (app) {

    app.get('/menu', menu.index);

}
