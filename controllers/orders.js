const knex = require("../db/knex.js");

module.exports = {
    index: (req, res) => {
        knex("orders")
            .select(
                "orders.id as order_id",
                "orders.customer_name",
                "orders.for_time",
                "orders.created_at",
                "orders.from_guest as fromGuest",
                "orders.customer_id",
                "orders.status_id",
                "orders.customer_email",
                "statuses.status",
                "order_items.id as item_id",
                "order_items.quantity",
                "menu.eng_name",
                "menu.ch_name",
                "menu.priceInCents",
                "menu.img_url"
            )
            .join("statuses", "statuses.id", "orders.status_id")
            .join("order_items", "order_items.order_id", "orders.id")
            .join("menu", "menu.id", "order_items.menu_id")
            .then(results => {
                let structuredOrders = results.reduce((acc, currentOrder) => {

                    acc = {
                        ...acc,
                        [currentOrder.order_id]: acc[currentOrder.order_id] ?
                            {
                                ...acc[currentOrder.order_id],
                                items: acc[currentOrder.order_id].items.concat({
                                    item_id: currentOrder.item_id,
                                    eng_name: currentOrder.eng_name,
                                    ch_name: currentOrder.ch_name,
                                    priceInCents: currentOrder.priceInCents,
                                    quantity: currentOrder.quantity,
                                    img_url: currentOrder.img_url
                                })
                            } :
                            {
                                order_id: currentOrder.order_id,
                                customer_name: currentOrder.customer_name,
                                for_time: currentOrder.for_time,
                                fromGuest: currentOrder.fromGuest,
                                customer_id: currentOrder.customer_id,
                                customer_email: currentOrder.customer_email,
                                status: currentOrder.status,
                                created_at: currentOrder.created_at,
                                items: [{
                                    item_id: currentOrder.item_id,
                                    eng_name: currentOrder.eng_name,
                                    ch_name: currentOrder.ch_name,
                                    priceInCents: currentOrder.priceInCents,
                                    quantity: currentOrder.quantity,
                                    img_url: currentOrder.img_url
                                }]
                            }

                    }


                    return acc
                }, {})
                res.send(structuredOrders)
            })
            .catch(err => res.send(err))
    },
    show: (req, res) => {
        knex("orders")
            .where('orders.id', req.params.id)
            .select(
                "orders.id as order_id",
                "orders.created_at",
                "orders.customer_name",
                "orders.for_time",
                "orders.from_guest as fromGuest",
                "orders.customer_id",
                "orders.status_id",
                "orders.customer_email",
                "statuses.status",
                "order_items.id as item_id",
                "order_items.quantity",
                "menu.id as menu_id",
                "menu.eng_name",
                "menu.ch_name",
                "menu.priceInCents"
            )
            .join("statuses", "statuses.id", "orders.status_id")
            .join("order_items", "order_items.order_id", "orders.id")
            .join("menu", "menu.id", "order_items.menu_id")
            .then(results => {
                let structuredResult = results.reduce((acc, currentOrder) => {
                    acc = {
                        ...acc,
                        [currentOrder.order_id]: acc[currentOrder.order_id] ?
                            {
                                ...acc[currentOrder.order_id],
                                items: acc[currentOrder.order_id].items.concat({
                                    menu_id: currentOrder.menu_id,
                                    item_id: currentOrder.item_id,
                                    eng_name: currentOrder.eng_name,
                                    ch_name: currentOrder.ch_name,
                                    priceInCents: currentOrder.priceInCents,
                                    quantity: currentOrder.quantity
                                })
                            } :
                            {
                                order_id: currentOrder.order_id,
                                customer_name: currentOrder.customer_name,
                                for_time: currentOrder.for_time,
                                fromGuest: currentOrder.fromGuest,
                                customer_id: currentOrder.customer_id,
                                customer_email: currentOrder.customer_email,
                                status: currentOrder.status,
                                created_at: currentOrder.created_at,
                                items: [{
                                    menu_id: currentOrder.menu_id,
                                    item_id: currentOrder.item_id,
                                    eng_name: currentOrder.eng_name,
                                    ch_name: currentOrder.ch_name,
                                    priceInCents: currentOrder.priceInCents,
                                    quantity: currentOrder.quantity
                                }]
                            }
                    }
                    return acc
                }, {})

                res.send(structuredResult)
            })
            .catch(err => res.send(err))
    },
    create: (req, res) => {
        knex("orders")
            .insert({
                customer_name: req.body.customer_name,
                customer_email: req.body.customer_email,
                customer_id: req.body.customer_id || null,
                for_time: req.body.for_time,
                from_guest: req.body.from_guest,
                status_id: 1
            })
            .returning("id")
            .then(result => {
                let orderId = result[0]
                console.log(orderId)
                let orderItems = req.body.items.map(item => {
                    return {
                        menu_id: item.menu_id,
                        order_id: result[0],
                        quantity: item.quantity
                    }
                })
                knex("order_items")
                    .insert(orderItems)
                    .then(result => {
                        res.send({
                            orderId: orderId,
                            message: "Your order was placed successfully!"
                        })
                    })
                    .catch(err => res.send(err))
            })
            .catch(err => console.log(err))
    },
    update: (req, res) => {
        knex("orders")
            .where("orders.id", req.params.id)
            .update({
                customer_name: req.body.customer_name,
                customer_email: req.body.customer_email,
                customer_id: req.body.customer_id || null,
                for_time: req.body.for_time,
                from_guest: req.body.from_guest,
            })
            .returning('id')
            .then(result => {
                let orderID = result[0]
                knex("order_items")
                    .where("order_items.order_id", orderID)
                    .then(result => {
                        if (!(result.filter((item, index) => item.menu_id === req.body.items[index].menu_id).length === req.body.items.length)) {
                            knex("order_items")
                                .where("order_items.order_id", orderID)
                                .del()
                                .then(() => {
                                    let orderItems = req.body.items.map(item => {
                                        return {
                                            ...item,
                                            order_id: orderID,
                                        }
                                    })
                                    knex("order_items")
                                        .insert(orderItems)
                                        .then(() => {
                                            res.send("order updated successfully")
                                        })
                                        .catch(err => console.log(err))
                                })

                                .catch(err => console.log(err))

                        } else {
                            res.send("order updated successfully, no items update")
                        }
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => res.send(err))
    },
    updateStatus: (req, res) => {
        knex("orders")
            .where("orders.id", req.params.id)
            .update({
                status_id: req.body.status_id
            })
            .returning('id')
            .then(orderId => {
                knex("orders")
                    .where("orders.id", orderId[0])
                    .join("statuses", "statuses.id", "orders.status_id")
                    .select(
                        "orders.id as orderId",
                        "statuses.status"
                    )
                    .then(result => {
                        io.
                            res.send(result[0])
                    })
                    .catch(error => res.json(error))
            })
            .catch(error => res.json(error))
    },
    destroy: (req, res) => {
        knex("orders")
            .where("orders.id", req.params.id)
            .del()
            .returning('id')
            .then(result => {
                res.send(result)
            })
            .catch(err => res.json(err))
    }
}

