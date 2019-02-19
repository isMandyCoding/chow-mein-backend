# chow-mein-backend

## GET request to http://127.0.0.1:8000/menu
* Example server response body: 
```javascript
{
    "sections": [
        {
            "section_id": 1,
            "eng_section": "HONG KONG STYLE MENU",
            "ch_section": "HONG KONG STYLE MENU"
        },
        {
            "section_id": 2,
            "eng_section": "AZ Style Menu",
            "ch_section": "AZ Style Menu"
        }
    ],
    "categories": [
        {
            "category_id": 1,
            "eng_category": "DRINKS",
            "ch_category": "飲料"
        },
        {
            "category_id": 2,
            "eng_category": "APPETIZERS",
            "ch_category": "小食"
        },
        {
            "category_id": 3,
            "eng_category": "SOUP",
            "ch_category": "湯"
        }
    ],
    "menu_items": [
        {
            "menu_id": 1,
            "category_id": 1,
            "section_id": 1,
            "eng_name": "Hong Kong Style Coffee",
            "ch_name": "港式咖啡",
            "description": "Sweetened & served hot or cold",
            "priceInCents": 325,
            "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "isSpicy": false
        },
        {
            "menu_id": 2,
            "category_id": 1,
            "section_id": 1,
            "eng_name": "Hong Kong Style Coffee with Milk Tea",
            "ch_name": "港式鴛鴦",
            "description": "Sweetened & served hot or cold)",
            "priceInCents": 325,
            "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "isSpicy": false
        },
        {
            "menu_id": 3,
            "category_id": 1,
            "section_id": 1,
            "eng_name": "Hong Kong Style Milk Tea",
            "ch_name": "港式奶茶",
            "description": "Sweetened & served hot or cold",
            "priceInCents": 325,
            "img_url": "http://www.asiancafeexpress.com/_/rsrc/1468849187734/menu/drinks/hk_style_milk_tea.JPG?height=200&width=150",
            "isSpicy": false
        },
        {
            "menu_id": 4,
            "category_id": 1,
            "section_id": 1,
            "eng_name": "Tea with Lemon",
            "ch_name": "檸檬茶",
            "description": "Sweetened & served hot or cold",
            "priceInCents": 325,
            "img_url": "http://www.asiancafeexpress.com/_/rsrc/1468849187716/menu/drinks/073111%20Homemade%20Ice%20Tea.jpg?height=200&width=160",
            "isSpicy": false
        },
        {
            "menu_id": 5,
            "category_id": 1,
            "section_id": 1,
            "eng_name": "Boba with Milk Tea",
            "ch_name": "波霸奶茶",
            "description": "Sweetened & served hot or cold",
            "priceInCents": 325,
            "img_url": "https://image.shutterstock.com/z/stock-photo-homemade-milk-bubble-tea-with-tapioca-pearls-409592239.jpg",
            "isSpicy": false
        },
        {
            "menu_id": 6,
            "category_id": 1,
            "section_id": 1,
            "eng_name": "Iced Red Bean",
            "ch_name": "紅豆冰",
            "description": "Sweetened & served cold",
            "priceInCents": 325,
            "img_url": "http://www.asiancafeexpress.com/_/rsrc/1468849187868/menu/drinks/ice_red_bean.JPG?height=200&width=150",
            "isSpicy": false
        },
        {
            "menu_id": 7,
            "category_id": 1,
            "section_id": 1,
            "eng_name": "Taro Coconut with Tapioca",
            "ch_name": "西米露",
            "description": "Sweetened & served cold",
            "priceInCents": 325,
            "img_url": "http://www.asiancafeexpress.com/_/rsrc/1468849188686/menu/drinks/073111%20Cold%20Taro%20Coconut%20Tapioca%20Drink.jpg?height=200&width=149",
            "isSpicy": false
        },
        {
            "menu_id": 8,
            "category_id": 1,
            "section_id": 1,
            "eng_name": "Hot Oolong Tea",
            "ch_name": "热茶",
            "description": "",
            "priceInCents": 100,
            "img_url": "https://image.shutterstock.com/z/stock-photo-tea-383863684.jpg",
            "isSpicy": false
        },
        {
            "menu_id": 9,
            "category_id": 1,
            "section_id": 1,
            "eng_name": "Soda",
            "ch_name": "苏打",
            "description": "Selection varies – check the soda display case",
            "priceInCents": 100,
            "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "isSpicy": false
        }
       ]
      }
      ```
