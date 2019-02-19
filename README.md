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
      
      
## GET request to http://127.0.0.1:8000/menu/:menu_id
* Example server response body: 
```javascript
[
    {
        "menu_id": 1,
        "eng_name": "Hong Kong Style Coffee",
        "ch_name": "港式咖啡",
        "description": "Sweetened & served hot or cold",
        "priceInCents": 325,
        "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "isSpicy": false,
        "section_id": 1,
        "eng_section": "HONG KONG STYLE MENU",
        "ch_section": "HONG KONG STYLE MENU",
        "category_id": 1,
        "eng_category": "DRINKS",
        "ch_category": "飲料"
    }
]
```

## POST request to http://127.0.0.1:8000/menu
Exammple request body: 
```javascript
{
	"eng_name": "Hong Kong Beef",
	"ch_name": "香港牛肉",
	"description": "Delicious Hong Kong Beef",
	"img_url": "https://image.shutterstock.com/z/stock-photo-chow-mein-fried-noodles-with-chicken-and-vegetables-close-up-horizontal-view-from-above-271938194.jpg",
	"is_spicy": "false",
	"priceInCents": 1000,
	"category_id": 6
}
```
img_url and is_spicy are optional, however, is_spicy will default to false if not specified

* Example server response body (the server returns the newly created menu item) : 
```javascript
[
    {
        "id": 353,
        "eng_name": "Hong Kong Beef",
        "ch_name": "香港牛肉",
        "description": "Delicious Hong Kong Beef",
        "priceInCents": 1000,
        "img_url": "https://image.shutterstock.com/z/stock-photo-chow-mein-fried-noodles-with-chicken-and-vegetables-close-up-horizontal-view-from-above-271938194.jpg",
        "is_spicy": false,
        "category_id": 6,
        "created_at": "2019-02-18T22:18:45.009Z",
        "updated_at": "2019-02-18T22:18:45.009Z"
    }
]
```
## PATCH request to http://127.0.0.1:8000/menu/:menu_id
All the same information can be passed in the request body as in a POST request
Example request body: 
```javascript
{	"eng_name": "American BBQ Beef" }
```
Example server response body (the server returns the updated menu item) :
```javascript
[
    {
        "id": 353,
        "eng_name": "American BBQ Beef",
        "ch_name": "香港牛肉",
        "description": "Delicious Hong Kong Beef",
        "priceInCents": 1000,
        "img_url": "https://image.shutterstock.com/z/stock-photo-chow-mein-fried-noodles-with-chicken-and-vegetables-close-up-horizontal-view-from-above-271938194.jpg",
        "is_spicy": false,
        "category_id": 6,
        "created_at": "2019-02-18T22:18:45.009Z",
        "updated_at": "2019-02-18T22:18:45.009Z"
    }
]
```

## DELETE request to http://127.0.0.1:8000/menu/:menu-id
Deletes the specified menu item
Example server response body (the server returns the deleted menu item):
```javascript
[
    {
        "id": 2,
        "eng_name": "Hong Kong Style Coffee with Milk Tea",
        "ch_name": "港式鴛鴦",
        "description": "Sweetened & served hot or cold)",
        "priceInCents": 325,
        "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "is_spicy": false,
        "category_id": 1,
        "created_at": "2019-02-18T21:25:30.743Z",
        "updated_at": "2019-02-18T21:25:30.743Z"
    }
]
```

## GET request to http://127.0.0.1:8000/orders
Gets all orders
Example server response body:
```javascript
{
    "1": {
        "order_id": 1,
        "customer_name": "Mandy",
        "for_time": "ASAP",
        "fromGuest": false,
        "customer_id": 1,
        "customer_email": "email1@email.com",
        "status": "received",
        "items": [
            {
                "item_id": 1,
                "eng_name": "Hong Kong Style Coffee",
                "ch_name": "港式咖啡",
                "priceInCents": 325
            },
            {
                "item_id": 17,
                "eng_name": "Satay Beef",
                "ch_name": "沙爹牛肉(辣)",
                "priceInCents": 850
            },
            {
                "item_id": 33,
                "eng_name": "Cantonese Style Deep Fried Whole Tilapia",
                "ch_name": "廣東紅燒全魚",
                "priceInCents": 950
            },
            {
                "item_id": 34,
                "eng_name": "Deep Fried Whole Tilapia with Black Bean Sauce",
                "ch_name": "豉椒全魚",
                "priceInCents": 950
            },
            {
                "item_id": 35,
                "eng_name": "Deep Fried Whole Tilapia with Sour Vegetables",
                "ch_name": "酸菜全魚",
                "priceInCents": 950
            },
            {
                "item_id": 36,
                "eng_name": "Deep Fried Whole Tilapia & Eggplant",
                "ch_name": "茄子全魚",
                "priceInCents": 950
            }
        ]
    },
    "2": {
        "order_id": 2,
        "customer_name": "Nancy",
        "for_time": "ASAP",
        "fromGuest": false,
        "customer_id": 2,
        "customer_email": "email2@email.com",
        "status": "cooking",
        "items": [
            {
                "item_id": 2,
                "eng_name": "Tea with Lemon",
                "ch_name": "檸檬茶",
                "priceInCents": 325
            },
            {
                "item_id": 18,
                "eng_name": "Ma Po Tofu & Minced Pork",
                "ch_name": "麻婆豆腐飯(辣)",
                "priceInCents": 650
            },
            {
                "item_id": 37,
                "eng_name": "Eggplant & Spare Ribs",
                "ch_name": "茄子排骨飯",
                "priceInCents": 650
            },
            {
                "item_id": 38,
                "eng_name": "Eggplant & Spare Ribs",
                "ch_name": "茄子排骨飯",
                "priceInCents": 650
            },
            {
                "item_id": 39,
                "eng_name": "Spare Ribs with Black Bean Sauce",
                "ch_name": "豉椒排骨飯",
                "priceInCents": 650
            }
        ]
    }
}
```

## GET request to http://127.0.0.1:8000/orders/:order_id
Retrieves a single order by id
Example server response body: 
```javascript
{
    "21": {
        "order_id": 21,
        "customer_name": "Barack Obama",
        "for_time": "ASAP",
        "fromGuest": true,
        "customer_id": null,
        "customer_email": "whitehouse@email.com",
        "status": "received",
        "items": [
            {
                "menu_id": 34,
                "item_id": 58,
                "eng_name": "Hong Kong Style Ground Beef Congee",
                "ch_name": "港式牛肉粥",
                "priceInCents": 650
            },
            {
                "menu_id": 44,
                "item_id": 59,
                "eng_name": "XO Sauce with Soft Tofu",
                "ch_name": "XO醬豆腐(辣)",
                "priceInCents": 850
            },
            {
                "menu_id": 46,
                "item_id": 56,
                "eng_name": "Tofu with Salted Shrimp & Shredded Pork",
                "ch_name": "咸蝦肉絲豆腐",
                "priceInCents": 850
            },
            {
                "menu_id": 100,
                "item_id": 57,
                "eng_name": "Hong Kong Style Beef Loin",
                "ch_name": "中式牛",
                "priceInCents": 950
            }
        ]
    }
}
```

## POST request to http://127.0.0.1:8000/orders
A request to this route will post an order. The request body must look like this: 
```javascript
{
	"customer_name": "Barack Obama",
	"customer_email": "whitehouse@email.com",
	"for_time": "ASAP",
	"from_guest": true,
	"items": [46, 100, 34, 44]
}
```

A customer_id field may be supplied if the user not ordering as a guest. In this case, the from_guest field will need to be sent as false. 

The items field must be an array of menu_id's. 

Example server response body: 
```javascript
order placed successfully
```

## PATCH request to http://127.0.0.1:8000/orders/:order_id
A request to this route will update the order, as well as update the order items if they have been changed

The request body can contain any fields that a POST request to this same path would contain. 

Example server response body: 
```javascript
order updated successfully
```

DELETE request to http://127.0.0.1:8000/orders/:order_id
A request to this route will delete the specified order

Example server response body (the server returns the id of the deleted order): 
```javascript
[
    15
]
```


