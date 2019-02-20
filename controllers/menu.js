const knex = require("../db/knex.js");

module.exports = {
    // CHANGE ME TO AN ACTUAL FUNCTION
    index: function (req, res) {
        knex("menu")
            .select(
                'menu.id as menu_id',
                'menu.eng_name',
                'menu.ch_name',
                'menu.description',
                'menu.priceInCents',
                'menu.img_url',
                'menu.is_spicy as isSpicy',
                'menu_sections.id as section_id',
                'menu_sections.eng_section',
                'menu_sections.ch_section',
                'categories.id as category_id',
                'categories.eng_category',
                'categories.ch_category'
            )
            .join('categories', 'categories.id', 'menu.category_id')
            .join('menu_sections', 'menu_sections.id', 'categories.section_id')
            .then(results => {
                let structuredMenu = results.reduce((acc, currentItem) => {
                    acc = {
                        ...acc,
                        sections: !acc.sections.find(item => item.section_id === currentItem.section_id) ?
                            acc.sections.concat({
                                section_id: currentItem.section_id,
                                eng_section: currentItem.eng_section,
                                ch_section: currentItem.ch_section
                            }) :
                            acc.sections,
                        categories: !acc.categories.find(item => item.category_id === currentItem.category_id) ?
                            acc.categories.concat({
                                category_id: currentItem.category_id,
                                eng_category: currentItem.eng_category,
                                ch_category: currentItem.ch_category,
                                section_id: currentItem.section_id,
                            }) :
                            acc.categories,
                        menu_items: !acc.menu_items.find(item => item.menu_id === currentItem.menu_id) ?
                            acc.menu_items.concat({
                                menu_id: currentItem.menu_id,
                                category_id: currentItem.category_id,
                                eng_name: currentItem.eng_name,
                                ch_name: currentItem.ch_name,
                                description: currentItem.description,
                                priceInCents: currentItem.priceInCents,
                                img_url: currentItem.img_url,
                                isSpicy: currentItem.isSpicy
                            }) :
                            acc.menu_items

                    }
                    return acc
                }, {
                        sections: [],
                        categories: [],
                        menu_items: []
                    })
                res.send(structuredMenu)
            })
            .catch(err => res.json(err))
    },
    show: (req, res) => {
        knex("menu")
            .where('menu.id', req.params.id)
            .select(
                'menu.id as menu_id',
                'menu.eng_name',
                'menu.ch_name',
                'menu.description',
                'menu.priceInCents',
                'menu.img_url',
                'menu.is_spicy as isSpicy',
                'menu_sections.id as section_id',
                'menu_sections.eng_section',
                'menu_sections.ch_section',
                'categories.id as category_id',
                'categories.eng_category',
                'categories.ch_category'
            )
            .join('categories', 'categories.id', 'menu.category_id')
            .join('menu_sections', 'menu_sections.id', 'categories.section_id')
            .then(result => {
                res.send(result)
            })
            .catch(err => console.log(err))
    },
    create: (req, res) => {
        knex('menu')
            .insert({
                ...req.body
            })
            .returning("*")
            .then(result => {
                res.send(result)
            })
            .catch(err => console.log(err))
    },
    update: (req, res) => {
        knex("menu")
            .where('menu.id', req.params.id)
            .update({
                ...req.body
            })
            .returning('*')
            .then(result => {
                res.send(result)
            })
            .catch(err => console.log(err))
    },
    destroy: (req, res) => {
        knex("menu")
            .where('menu.id', req.params.id)
            .del()
            .returning('*')
            .then(result => {
                res.send(result)
            })
            .catch(err => console.log(err))
    }
}
