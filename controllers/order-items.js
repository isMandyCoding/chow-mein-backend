const knex = require("../db/knex.js");

module.exports = {
    index: (req, res) => {
        knex('order_items')
            .select(
                'order_items.id as order_items_id',
                'order_items.menu_id',
                'menu.eng_name',
                'menu.ch_name',
                'menu.img_url'
            )
            .join('menu', 'order_items.menu_id', 'menu.id')
            .then(results => {

                res.send(results)
            })
            .catch(err => res.json(err))

    }
}