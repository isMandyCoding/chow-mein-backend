
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('menu').del()
    .then(function () {
      // Inserts seed entries
      return knex('menu').insert([
        {
          "eng_name": "Hong Kong Style Coffee",
          "ch_name": "港式咖啡",
          "description": "Sweetened & served hot or cold",
          "priceInCents": 325,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 1,
          "is_spicy": false
        },
        {
          "eng_name": "Hong Kong Style Coffee with Milk Tea",
          "ch_name": "港式鴛鴦",
          "description": "Sweetened & served hot or cold)",
          "priceInCents": 325,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 1,
          "is_spicy": false
        },
        {
          "eng_name": "Hong Kong Style Milk Tea",
          "ch_name": "港式奶茶",
          "description": "Sweetened & served hot or cold",
          "priceInCents": 325,
          "img_url": "http://www.asiancafeexpress.com/_/rsrc/1468849187734/menu/drinks/hk_style_milk_tea.JPG?height=200&width=150",
          "category_id": 1,
          "is_spicy": false
        },
        {
          "eng_name": "Tea with Lemon",
          "ch_name": "檸檬茶",
          "description": "Sweetened & served hot or cold",
          "priceInCents": 325,
          "img_url": "http://www.asiancafeexpress.com/_/rsrc/1468849187716/menu/drinks/073111%20Homemade%20Ice%20Tea.jpg?height=200&width=160",
          "category_id": 1,
          "is_spicy": false
        },
        {
          "eng_name": "Boba with Milk Tea",
          "ch_name": "波霸奶茶",
          "description": "Sweetened & served hot or cold",
          "priceInCents": 325,
          "img_url": "https://image.shutterstock.com/z/stock-photo-homemade-milk-bubble-tea-with-tapioca-pearls-409592239.jpg",
          "category_id": 1,
          "is_spicy": false
        },
        {
          "eng_name": "Iced Red Bean",
          "ch_name": "紅豆冰",
          "description": "Sweetened & served cold",
          "priceInCents": 325,
          "img_url": "http://www.asiancafeexpress.com/_/rsrc/1468849187868/menu/drinks/ice_red_bean.JPG?height=200&width=150",
          "category_id": 1,
          "is_spicy": false
        },
        {
          "eng_name": "Taro Coconut with Tapioca",
          "ch_name": "西米露",
          "description": "Sweetened & served cold",
          "priceInCents": 325,
          "img_url": "http://www.asiancafeexpress.com/_/rsrc/1468849188686/menu/drinks/073111%20Cold%20Taro%20Coconut%20Tapioca%20Drink.jpg?height=200&width=149",
          "category_id": 1,
          "is_spicy": false
        },
        {
          "eng_name": "Hot Oolong Tea",
          "ch_name": "热茶",
          "description": "",
          "priceInCents": 100,
          "img_url": "https://image.shutterstock.com/z/stock-photo-tea-383863684.jpg",
          "category_id": 1,
          "is_spicy": false
        },
        {
          "eng_name": "Soda",
          "ch_name": "苏打",
          "description": "Selection varies – check the soda display case",
          "priceInCents": 100,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 1,
          "is_spicy": false
        },
        {
          "eng_name": "Pork Egg Roll",
          "ch_name": "豬春卷",
          "description": "Pork & mixed vegetables (2pcs)",
          "priceInCents": 225,
          "img_url": "https://image.shutterstock.com/z/stock-photo-egg-rolls-isolated-on-white-background-vietnamese-cuisine-568045321.jpg",
          "category_id": 2,
          "is_spicy": false
        },
        {
          "eng_name": "Vegetable Spring Egg Roll",
          "ch_name": "素春卷",
          "description": "Mixed vegetables (2pcs)",
          "priceInCents": 225,
          "img_url": "https://image.shutterstock.com/z/stock-photo-homemade-chinese-vegetable-eggrolls-with-soy-sauce-153000068.jpg",
          "category_id": 2,
          "is_spicy": false
        },
        {
          "eng_name": "Fried or Steamed Chicken Dumplings",
          "ch_name": "窩貼",
          "description": "Chicken & mixed vegetables (3pcs)",
          "priceInCents": 225,
          "img_url": "https://image.shutterstock.com/z/stock-photo-fried-dumplings-on-plate-and-soy-sauce-426843268.jpg",
          "category_id": 2,
          "is_spicy": false
        },
        {
          "eng_name": "Fried Onion Rings",
          "ch_name": "炸洋蔥圈",
          "description": "8pcs",
          "priceInCents": 225,
          "img_url": "https://image.shutterstock.com/z/stock-photo-fried-onion-rings-on-wooden-background-760399312.jpg",
          "category_id": 2,
          "is_spicy": false
        },
        {
          "eng_name": "Fried Shrimp",
          "ch_name": "炸蝦",
          "description": "2pcs",
          "priceInCents": 225,
          "img_url": "https://image.shutterstock.com/z/stock-photo-deep-fried-shrimp-meat-ball-on-wooden-table-99059780.jpg",
          "category_id": 2,
          "is_spicy": false
        },
        {
          "eng_name": "Fried Crab Puffs",
          "ch_name": "蟹角",
          "description": "Cream cheese & imitation crab meat",
          "priceInCents": 225,
          "img_url": "https://image.shutterstock.com/z/stock-photo-plate-of-crab-puffs-at-a-chinese-restaurant-100171004.jpg",
          "category_id": 2,
          "is_spicy": false
        },
        {
          "eng_name": "Spring Noodles with Soup",
          "ch_name": "楊春麵",
          "description": "Plain noodles with chicken broth",
          "priceInCents": 300,
          "img_url": "https://image.shutterstock.com/z/stock-photo-food-and-drink-healthy-eating-and-dieting-concept-seasonal-fresh-raw-zucchini-spaghetti-pasta-1105927220.jpg",
          "category_id": 2,
          "is_spicy": false
        },
        {
          "eng_name": "Satay Turnips & Pork Skin",
          "ch_name": "沙爹豬皮蘿蔔(辣)",
          "description": "Turnips & pork skins in Satay sauce",
          "priceInCents": 300,
          "img_url": "https://c8.alamy.com/comp/PF7W6B/pork-skin-satay-sate-kulit-babi-PF7W6B.jpg",
          "category_id": 2,
          "is_spicy": true
        },
        {
          "eng_name": "Chili Sauce Chicken Dumplings",
          "ch_name": "紅油炒手(辣)",
          "description": "Chicken & mixed vegetables (4pcs)",
          "priceInCents": 300,
          "img_url": "https://image.shutterstock.com/z/stock-photo-gyozas-potstickers-on-lettuce-salad-with-sauces-served-in-traditional-china-plate-with-chopsticks-603898751.jpg",
          "category_id": 2,
          "is_spicy": true
        },
        {
          "eng_name": "Chili Salt Chicken Wings",
          "ch_name": "椒鹽雞翼(辣)",
          "description": "Tossed in green onions, garlic, spices, & chili oil (5pcs)",
          "priceInCents": 400,
          "img_url": "https://image.shutterstock.com/z/stock-photo-grilled-chicken-wings-with-rice-and-chili-sauce-on-the-old-wooden-background-525550678.jpg",
          "category_id": 2,
          "is_spicy": true
        },
        {
          "eng_name": "Steamed Pork & Vegetable Dumplings",
          "ch_name": "蒸北方菜肉餃",
          "description": "10pcs",
          "priceInCents": 350,
          "img_url": "https://image.shutterstock.com/z/stock-photo-chinese-steamed-dumpling-and-bubs-in-bamboo-basket-424857847.jpg",
          "category_id": 2,
          "is_spicy": false
        },
        {
          "eng_name": "Five Spiced Beef or Pork Slices",
          "ch_name": "五香牛或豬肉",
          "description": "(Served cold",
          "priceInCents": 599,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 2,
          "is_spicy": false
        },
        {
          "eng_name": "Spicy Salt Fried Pork Spare Ribs",
          "ch_name": "椒鹽小排骨(辣)",
          "description": "Tossed in green onions, garlic, spices, & chili oil",
          "priceInCents": 599,
          "img_url": "https://image.shutterstock.com/z/stock-photo-fried-pork-spare-with-garlic-and-pepper-1074992015.jpg",
          "category_id": 2,
          "is_spicy": false
        },
        {
          "eng_name": "Minced Beef & Egg White Soup",
          "ch_name": "西湖牛肉羹",
          "description": "",
          "priceInCents": 400,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/mincedbeefeggwhitesoup/Minced%20Beef%20Egg%20White%20Soup%202.JPG",
          "category_id": 3,
          "is_spicy": false
        },
        {
          "eng_name": "Seafood & Tofu Soup",
          "ch_name": "海鮮豆腐羹",
          "description": "(Shrimp, squid, fish cake, & mussel",
          "priceInCents": 400,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/seafoodtofusoup/Seafood%20%26%20Tofu%20Soup.jpg",
          "category_id": 3,
          "is_spicy": false
        },
        {
          "eng_name": "Yellow Leek, Shrimp, & Tofu Soup",
          "ch_name": "韭黃蝦仁豆腐",
          "description": "",
          "priceInCents": 400,
          "img_url": "https://images.pexels.com/photos/1437590/pexels-photo-1437590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 3,
          "is_spicy": false
        },
        {
          "eng_name": "Preserved Szechuan Vegetable, Shredded Pork, & Tofu Soup",
          "ch_name": "炸菜肉絲豆腐",
          "description": "",
          "priceInCents": 400,
          "img_url": "https://images.pexels.com/photos/772518/pexels-photo-772518.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 3,
          "is_spicy": false
        },
        {
          "eng_name": "Preserved Vegetable, Shredded Pork, & Tofu Soup",
          "ch_name": "雪菜肉絲豆腐",
          "description": "",
          "priceInCents": 400,
          "img_url": "https://images.pexels.com/photos/1907227/pexels-photo-1907227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 3,
          "is_spicy": false
        },
        {
          "eng_name": "Meat & Seafood Combo Soup",
          "ch_name": "什燴湯",
          "description": "",
          "priceInCents": 400,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/meatseafoodcombosoup/Meat%20and%20Seafood%20Combo%20Soup.JPG",
          "category_id": 3,
          "is_spicy": false
        },
        {
          "eng_name": "Double Mushroom & Vegetable Soup",
          "ch_name": "雙菇菜湯",
          "description": "",
          "priceInCents": 400,
          "img_url": "https://blog.fatfreevegan.com/wp-content/uploads/2007/10/double-mushroom-miso-soup-680h.jpg",
          "category_id": 3,
          "is_spicy": false
        },
        {
          "eng_name": "Creamy Chicken Corn Soup",
          "ch_name": "栗米雞湯",
          "description": "",
          "priceInCents": 400,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/creamychickencornsoup/Creamy%20Chicken%20Corn%20Soup.jpg",
          "category_id": 3,
          "is_spicy": false
        },
        {
          "eng_name": "Creamy Tofu & Corn Soup",
          "ch_name": "栗米豆腐湯",
          "description": "",
          "priceInCents": 400,
          "img_url": "https://image.shutterstock.com/image-photo/japanese-traditional-soup-seaweed-mushrooms-450w-1056438119.jpg",
          "category_id": 3,
          "is_spicy": false
        },
        {
          "eng_name": "Sour Vegetable & Shredded Pork Soup",
          "ch_name": "酸菜肉絲豆腐",
          "description": "",
          "priceInCents": 400,
          "img_url": "https://image.shutterstock.com/z/stock-photo-spicy-shredded-bamboo-shoot-salad-in-northeastern-style-728882956.jpg",
          "category_id": 3,
          "is_spicy": false
        },
        {
          "eng_name": "Hong Kong Style Combo Congee",
          "ch_name": "艇仔粥",
          "description": "Ground beef & fish cake",
          "priceInCents": 650,
          "img_url": "http://www.tastehongkong.com/wp/2012/congee-salted-pork.jpg",
          "category_id": 4,
          "is_spicy": false
        },
        {
          "eng_name": "Hong Kong Style Ground Beef Congee",
          "ch_name": "港式牛肉粥",
          "description": "",
          "priceInCents": 650,
          "img_url": "data:image/jpeg;base64,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",
          "category_id": 4,
          "is_spicy": false
        },
        {
          "eng_name": "Combo Congee",
          "ch_name": "雜燴粥",
          "description": "Chicken, beef, shrimp, & squid",
          "priceInCents": 650,
          "img_url": "https://as1.ftcdn.net/jpg/00/60/59/76/500_F_60597688_f4F6Ee0fPiSCy2xhQUOXxKOQr1KZr5iN.jpg",
          "category_id": 4,
          "is_spicy": false
        },
        {
          "eng_name": "Seafood Combo Congee",
          "ch_name": "海鮮粥",
          "description": "Shrimp, squid, fish cake, & mussel",
          "priceInCents": 650,
          "img_url": "https://as2.ftcdn.net/jpg/02/21/23/11/500_F_221231123_nU1ichcdXP8V7D5UejYsPaf7K7CUgxpK.jpg",
          "category_id": 4,
          "is_spicy": false
        },
        {
          "eng_name": "Preserved Egg & Shredded Pork Congee",
          "ch_name": "皮蛋廋肉粥",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://as2.ftcdn.net/jpg/02/21/23/11/500_F_221231123_nU1ichcdXP8V7D5UejYsPaf7K7CUgxpK.jpg",
          "category_id": 4,
          "is_spicy": false
        },
        {
          "eng_name": "Corn & Vegetable Congee",
          "ch_name": "粟米雜菜粥",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://as2.ftcdn.net/jpg/02/21/23/11/500_F_221231123_nU1ichcdXP8V7D5UejYsPaf7K7CUgxpK.jpg",
          "category_id": 4,
          "is_spicy": false
        },
        {
          "eng_name": "Chicken or Beef or Shredded Pork Congee",
          "ch_name": "雞片/牛肉/肉絲粥",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://as2.ftcdn.net/jpg/02/21/23/11/500_F_221231123_nU1ichcdXP8V7D5UejYsPaf7K7CUgxpK.jpg",
          "category_id": 4,
          "is_spicy": false
        },
        {
          "eng_name": "Basa Fish Fillet Congee",
          "ch_name": "魚片粥",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://as2.ftcdn.net/jpg/02/21/23/11/500_F_221231123_nU1ichcdXP8V7D5UejYsPaf7K7CUgxpK.jpg",
          "category_id": 4,
          "is_spicy": false
        },
        {
          "eng_name": "Braised Tofu",
          "ch_name": "紅燒豆腐",
          "description": "with brown sauce",
          "priceInCents": 850,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/braisedtofu/Braised%20Tofu.jpg",
          "category_id": 5,
          "is_spicy": false
        },
        {
          "eng_name": "Combo & Fried Tofu",
          "ch_name": "八珍豆腐",
          "description": "Assorted meats & fried tofu with brown sauce",
          "priceInCents": 850,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/combofriedtofu/Combo%20%26%20Fried%20Tofu.jpg",
          "category_id": 5,
          "is_spicy": false
        },
        {
          "eng_name": "Crispy Tofu",
          "ch_name": "炸酥豆腐",
          "description": "Served with ACE’s special soy sauce blend",
          "priceInCents": 850,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/crispytofu/Crispy%20Tofu.JPG",
          "category_id": 5,
          "is_spicy": false
        },
        {
          "eng_name": "XO Sauce with Soft Tofu",
          "ch_name": "XO醬豆腐(辣)",
          "description": "",
          "priceInCents": 850,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/xosaucewithsofttofu/XO%20Sauce%20with%20Soft%20Tofu.jpg",
          "category_id": 5,
          "is_spicy": true
        },
        {
          "eng_name": "Tofu with Preserved Salted Fish & Chicken",
          "ch_name": "咸魚豆腐雞",
          "description": "(with light sauce",
          "priceInCents": 850,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/tofuwithpreservedsaltedfishchicken/Tofu%20with%20Preserved%20Salted%20Fish%20%26%20Chicken%20FB.jpg",
          "category_id": 5,
          "is_spicy": false
        },
        {
          "eng_name": "Tofu with Salted Shrimp & Shredded Pork",
          "ch_name": "咸蝦肉絲豆腐",
          "description": "with light sauce",
          "priceInCents": 850,
          "img_url": "https://i0.wp.com/redhousespice.com/wp-content/uploads/2017/10/Sichuan-shredded-pork-with-garlic-sauce-portrait-3.jpg?w=1460",
          "category_id": 5,
          "is_spicy": false
        },
        {
          "eng_name": "Fried Fish Fillet",
          "ch_name": "班腩飯",
          "description": "(with light sauce",
          "priceInCents": 650,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/friedfishfilletriceplate/Fried%20Fish%20Fillet%20Rice%20Plate.jpg",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Seafood Combo",
          "ch_name": "海鮮飯",
          "description": "Shrimp, squid, fish cake, & mussel with light sauce",
          "priceInCents": 650,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/seafoodcomboriceplate/Seafood%20Combo%20Rice%20Plate.jpg",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Pork Chops with Tomato Sauce",
          "ch_name": "豬扒飯",
          "description": "",
          "priceInCents": 650,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/porkchopwithtomatosaucericeplate/Pork%20Chop%20with%20Tomato%20Sauce%20Revised.jpg",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Shredded Pork with Cream Corn Sauce",
          "ch_name": "栗米肉絲飯",
          "description": "",
          "priceInCents": 650,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/shreddedporkwithcreamcornsaucericeplate/Shredded%20Pork%20with%20Cream%20Corn%20Sauce%20Rice%20Plate.jpg",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Japanese BBQ Pork & Egg",
          "ch_name": "日式叉燒煎蛋飯",
          "description": "",
          "priceInCents": 650,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/japanesebbqporkfriedeggriceplate/Japanese%20BBQ%20Pork%20%26%20Fried%20Egg%20Rice%20Plate.jpg",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Spare Ribs with Black Bean Sauce",
          "ch_name": "豉椒排骨飯",
          "description": "",
          "priceInCents": 650,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/porkspareribschowfunwithblackbeansauce/Pork%20Spare%20Ribs%20Chow%20Fun%20with%20Black%20Bean%20Sauce.jpg",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Eggplant & Spare Ribs",
          "ch_name": "茄子排骨飯",
          "description": "(with brown sauc",
          "priceInCents": 650,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/eggplantwithspareribsriceplate/Eggplant%20with%20Spare%20Ribs%20over%20Rice.JPG",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Bitter Melon & Spare Ribs",
          "ch_name": "苦瓜排骨飯",
          "description": "with brown sauce",
          "priceInCents": 650,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/bittermelonspareribs/Bitter%20Melon%20%26%20Spare%20Ribs.jpg",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Ma Po Tofu & Minced Pork",
          "ch_name": "麻婆豆腐飯(辣)",
          "description": "(with brown sauce)",
          "priceInCents": 650,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/untitledpost-1/Ma%20Po%20Tofu%20%26%20Minced%20Pork%20Rice%20Plate.jpg",
          "category_id": 6,
          "is_spicy": true
        },
        {
          "eng_name": "Eggplant & Minced Pork with Garlic Sauce",
          "ch_name": "魚香茄子飯(辣)",
          "description": "",
          "priceInCents": 650,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/eggplantchickenriceplate/Eggplant%20%26%20Chicken%20Rice%20Plate.JPG",
          "category_id": 6,
          "is_spicy": true
        },
        {
          "eng_name": "Eggplant & Chicken",
          "ch_name": "茄子雞或牛肉飯",
          "description": "with light sauce",
          "priceInCents": 650,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/eggplantchickenriceplate/Eggplant%20%26%20Chicken%20Rice%20Plate.JPG",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Eggplant & Beef",
          "ch_name": "茄子雞或牛肉飯",
          "description": "with brown sauce",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Soft Tofu & Chicken or Beef",
          "ch_name": "豆腐雞或牛肉飯",
          "description": "with light sauce or with brown sauce",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=941",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Sliced Chicken or Chicken Wings with Curry Sauce",
          "ch_name": "咖哩雞肉或雞翼飯(辣)",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=942",
          "category_id": 6,
          "is_spicy": true
        },
        {
          "eng_name": "Chinese Beef Stew or Beef with Curry Sauce",
          "ch_name": "咖哩牛腩/牛肉飯(辣)",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=943",
          "category_id": 6,
          "is_spicy": true
        },
        {
          "eng_name": "Portuguese Style Sliced Chicken or Chicken Wings",
          "ch_name": "葡國雞肉或雞翼飯",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=944",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Ham & Eggs",
          "ch_name": "火腿煎蛋飯",
          "description": "",
          "priceInCents": 650,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/hameggsriceplate/Ham%20%26%20Eggs%20Rice%20Plate.jpg",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Minced Beef",
          "ch_name": "免治牛飯",
          "description": "with brown sauce",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Beef & Vegetables",
          "ch_name": "時菜牛飯",
          "description": "with brown sauce",
          "priceInCents": 650,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/mixedvegetableswithbeefslices/Mixed%20Vegetable%20with%20Beef%20Slices.jpg",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "with brown sauce",
          "ch_name": "苦瓜牛肉飯",
          "description": "with brown sauce",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Eggs with Beef or Shrimp",
          "ch_name": "滑蛋牛或蝦飯",
          "description": "with brown sauce or with light sauce",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Chinese Beef Stew",
          "ch_name": "牛腩飯",
          "description": "",
          "priceInCents": 650,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/chinesebeefstewchowmein/Chinese%20Beef%20Stew%20Chow%20Mein%201%20Revised.jpg",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Mixed Vegetables",
          "ch_name": "雜菜飯",
          "description": "with light sauce",
          "priceInCents": 650,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/mixedvegetablericebowl/Mixed%20Vegetable%20Rice%20Bowl.jpg",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Combo",
          "ch_name": "雜燴飯",
          "description": "beef, chicken, shrimp, squid, & vegetables with light sauce",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Sour Mustard Chicken or Beef",
          "ch_name": "咸酸菜雞/牛肉飯",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Boiled Chicken",
          "ch_name": "白切雞飯",
          "description": "Skin & Bone-in served with green onion sauce",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Fresh Tomatoes with two Eggs or Beef",
          "ch_name": "鮮茄雙蛋/牛肉飯",
          "description": "with brown sauce",
          "priceInCents": 650,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/freshtomatowithtwoeggsbeefoverrice/Fresh%20Tomato%20with%20Two%20Eggs%20%28Addition%20Beef%29%20over%20Rice.JPG",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Braised Beef or Pork in Soy Sauce",
          "ch_name": "紅燒牛肉/豬肉飯",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Black Mushrooms & Chinese Bok Choy",
          "ch_name": "冬菇雜菜飯",
          "description": "(with light sauce",
          "priceInCents": 650,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/blackmushroomchinesebokchoyriceplate/Black%20Mushroom%20%26%20Chinese%20Bok%20Choy%20%28with%20light%20sauce%29%20Rice%20Plate.jpg",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Preserved Pickles with Shredded Pork",
          "ch_name": "炸菜肉絲飯",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Preserved Vegetables with Shredded Pork",
          "ch_name": "雪菜肉絲飯",
          "description": "with brown sauce",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Turnip with Beef or Chicken",
          "ch_name": "蘿蔔牛/雞肉飯",
          "description": "with brown sauce or with light sauce",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Suckling Roast Pork & Vegetables",
          "ch_name": "燒肉青菜飯",
          "description": "with light sauce",
          "priceInCents": 650,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/sucklingroastporkandvegetablesriceplate/Suckling%20Roast%20Pork%20and%20Vegetables%20over%20Rice.JPG",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Suckling Roast Pork & Fried Tofu",
          "ch_name": "燒肉豆腐飯",
          "description": "with light sauce",
          "priceInCents": 650,
          "img_url": "http://www.asiancafeexpress.com/dishoftheweek/sucklingroastporkchickenfriedtofuservedontopofeggfriedrice/Suckling%20Roasted%20Pork%20Fried%20Tofu%20Rice%20Plate%20Special.JPG",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Suckling Roast Pork & Turnip",
          "ch_name": "蘿蔔燒肉飯",
          "description": "with light sauce",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 6,
          "is_spicy": false
        },
        {
          "eng_name": "Chicken, Beef, or Pork with Minced Garlic Sauce",
          "ch_name": "魚香肉絲/雞肉/牛絲飯(辣)",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 6,
          "is_spicy": true
        },
        {
          "eng_name": "Chinese Broccoli Chicken",
          "ch_name": "芥蘭雞片",
          "description": "Stir fried with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 7,
          "is_spicy": false
        },
        {
          "eng_name": "Chicken with Black Bean Sauce",
          "ch_name": "豉椒雞片",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 7,
          "is_spicy": false
        },
        {
          "eng_name": "Chicken with Double Mushrooms",
          "ch_name": "雙菇雞片",
          "description": "Black & White stir fried with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 7,
          "is_spicy": false
        },
        {
          "eng_name": "Fried Chicken with Spicy Sauce",
          "ch_name": "水口辣雞(辣)",
          "description": "Skin & Bone-in",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 7,
          "is_spicy": true
        },
        {
          "eng_name": "Fried Chicken with Szechwan Hot Bean Sauce",
          "ch_name": "四川豆板醬雞(辣)",
          "description": "Skin & Bone-in",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 7,
          "is_spicy": true
        },
        {
          "eng_name": "Steamed Chicken served with Ginger Sauce",
          "ch_name": "白切雞腿",
          "description": "Skin & Bone-in",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 7,
          "is_spicy": false
        },
        {
          "eng_name": "Fried Chicken Quarter with Green Onion Sauce",
          "ch_name": "油淋雞腿",
          "description": "Skin & Bone-in",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 7,
          "is_spicy": false
        },
        {
          "eng_name": "Steamed Chicken Quarter with Vegetables",
          "ch_name": "菜膽上湯雞腿",
          "description": "Skin & Bone-in",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 7,
          "is_spicy": false
        },
        {
          "eng_name": "Chicken Quarter & Vegetables with Ginger & Green Onion Sauce",
          "ch_name": "菜膽蔥油雞腿",
          "description": "Skin & Bone-in",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 7,
          "is_spicy": false
        },
        {
          "eng_name": "Chinese Broccoli Beef",
          "ch_name": "芥蘭牛肉",
          "description": "Stir fried with brown sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 8,
          "is_spicy": false
        },
        {
          "eng_name": "Beef with Ginger & Green Onions",
          "ch_name": "薑蔥牛肉",
          "description": "Stir fried with brown sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 8,
          "is_spicy": false
        },
        {
          "eng_name": "Bitter Melon Beef",
          "ch_name": "苦瓜牛肉",
          "description": "Stir fried with brown sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 8,
          "is_spicy": false
        },
        {
          "eng_name": "Beef with Double Mushrooms",
          "ch_name": "雙菇牛肉",
          "description": "Black & White stir fried with brown sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 8,
          "is_spicy": false
        },
        {
          "eng_name": "Chinese Beef Stew & Vegetables",
          "ch_name": "時菜牛腩",
          "description": "with brown sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 8,
          "is_spicy": false
        },
        {
          "eng_name": "Kung Poa Beef",
          "ch_name": "宮保牛肉(辣)",
          "description": "(Stir fried with mixed vegetable in Szechwan sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 8,
          "is_spicy": true
        },
        {
          "eng_name": "XO Sauce with Beef",
          "ch_name": "XO辣醬牛肉(辣)",
          "description": "Stir fried",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 8,
          "is_spicy": true
        },
        {
          "eng_name": "Satay Beef",
          "ch_name": "沙爹牛肉(辣)",
          "description": "Stir fried",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 8,
          "is_spicy": true
        },
        {
          "eng_name": "Hong Kong Style Beef Loin",
          "ch_name": "中式牛",
          "description": "with savory sweet & tangy sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 8,
          "is_spicy": false
        },
        {
          "eng_name": "Yellow Leek, Bean Sprout & Shredded Pork",
          "ch_name": "韭黃芽菜肉絲",
          "description": "Stir fried",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 9,
          "is_spicy": false
        },
        {
          "eng_name": "Preserved Szechuan Vegetables & Shredded Pork",
          "ch_name": "炸菜肉絲",
          "description": "Stir fried",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 9,
          "is_spicy": false
        },
        {
          "eng_name": "Preserved Vegetables & Shredded Pork",
          "ch_name": "雪菜肉絲",
          "description": "Stir fried",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 9,
          "is_spicy": false
        },
        {
          "eng_name": "Spare Ribs with Black Bean Sauce",
          "ch_name": "豉椒排骨",
          "description": "Stir fried",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 9,
          "is_spicy": false
        },
        {
          "eng_name": "Peking Style Spare Ribs",
          "ch_name": "京都排骨",
          "description": "with savory sweet & tangy sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 9,
          "is_spicy": false
        },
        {
          "eng_name": "Spare Ribs with Taro",
          "ch_name": "芋頭排骨",
          "description": "with brown sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 9,
          "is_spicy": false
        },
        {
          "eng_name": "Spare Ribs & Eggplant",
          "ch_name": "茄子排骨",
          "description": "with brown sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 9,
          "is_spicy": false
        },
        {
          "eng_name": "Sweet & Sour Spare Ribs",
          "ch_name": "糖醋小排骨",
          "description": "Deep fried spare ribs covered in sweet & sour sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 9,
          "is_spicy": false
        },
        {
          "eng_name": "Minced Pork & Eggplant with Garlic Sauce",
          "ch_name": "魚香茄子(辣)",
          "description": "Stir fried",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 9,
          "is_spicy": true
        },
        {
          "eng_name": "Yellow Leek & Bean Sprout with Shrimp",
          "ch_name": "韭黃芽菜蝦",
          "description": "Stir fried",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 10,
          "is_spicy": true
        },
        {
          "eng_name": "Chinese Broccoli Shrimp",
          "ch_name": "芥蘭炒蝦",
          "description": "Stir fried with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 10,
          "is_spicy": false
        },
        {
          "eng_name": "Shrimp with Black Bean Sauce",
          "ch_name": "豉椒蝦",
          "description": "Stir fried",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 10,
          "is_spicy": false
        },
        {
          "eng_name": "Kung Pao Shrimp",
          "ch_name": "宮保蝦(辣)",
          "description": "Stir fried with mixed vegetable in Szechwan sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 10,
          "is_spicy": true
        },
        {
          "eng_name": "Salt and Pepper Fried Shrimp",
          "ch_name": "椒鹽蝦(辣)",
          "description": "Deep fried shrimp mixed in salt & pepper",
          "priceInCents": 900,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 10,
          "is_spicy": true
        },
        {
          "eng_name": "Szechuan Style Shrimp",
          "ch_name": "四川蝦仁(辣)",
          "description": "Stir fried",
          "priceInCents": 900,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 10,
          "is_spicy": true
        },
        {
          "eng_name": "Hong Kong Pan Fried Shrimp",
          "ch_name": "青炒蝦仁",
          "description": "Pan fried shrimp served in a light sauce",
          "priceInCents": 900,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 10,
          "is_spicy": false
        },
        {
          "eng_name": "Black Mushrooms with Vegetables",
          "ch_name": "冬菇扒菜",
          "description": "with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 11,
          "is_spicy": false
        },
        {
          "eng_name": "White Mushrooms with Vegetables",
          "ch_name": "蘑菇扒菜",
          "description": "with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 11,
          "is_spicy": false
        },
        {
          "eng_name": "Double Mushrooms with Vegetables",
          "ch_name": "雙菇扒菜",
          "description": "Black & White stir fried with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 11,
          "is_spicy": false
        },
        {
          "eng_name": "Yellow Leek with Bean Sprouts",
          "ch_name": "韭黃芽菜",
          "description": "Stir fried",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 11,
          "is_spicy": false
        },
        {
          "eng_name": "Mixed Vegetable Stir Fried with Minced Garlic",
          "ch_name": "蒜炒什菜",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 11,
          "is_spicy": false
        },
        {
          "eng_name": "Mixed Vegetable with Portuguese Sauce",
          "ch_name": "葡式扒什菜",
          "description": "Stir fried",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 11,
          "is_spicy": false
        },
        {
          "eng_name": "Mixed Vegetable with Curry Sauce",
          "ch_name": "咖哩什菜(辣)",
          "description": "Stir fried",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 11,
          "is_spicy": true
        },
        {
          "eng_name": "Fried Tofu & Vegetable with Rice Vermicelli Noodles",
          "ch_name": "油豆腐粉絲新鮮菜",
          "description": "with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 11,
          "is_spicy": false
        },
        {
          "eng_name": "Stir Fried Minced Garlic with Chinese Kale, Choi Sum, or Bok Choy",
          "ch_name": "蒜炒芥蘭/菜心/青光菜",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 11,
          "is_spicy": false
        },
        {
          "eng_name": "Satay Fried Tofu & Vegetable with Rice Vermicelli Noodles",
          "ch_name": "沙爹油豆腐粉絲新鮮菜(辣)",
          "description": "with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 11,
          "is_spicy": false
        },
        {
          "eng_name": "Sour Vegetable Fried Tofu & Vegetable with Rice Vermicelli Noodles",
          "ch_name": "酸菜油豆腐粉絲新鮮菜",
          "description": "with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 11,
          "is_spicy": false
        },
        {
          "eng_name": "Fish Fillet with Scrambled Eggs",
          "ch_name": "魚片炒蛋",
          "description": "",
          "priceInCents": 1200,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 12,
          "is_spicy": false
        },
        {
          "eng_name": "Yellow Leek & Bean Sprout with Scrambled Eggs",
          "ch_name": "韭黃芽菜炒蛋",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 12,
          "is_spicy": false
        },
        {
          "eng_name": "Bitter Melon with Scrambled Eggs",
          "ch_name": "苦瓜炒蛋",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 12,
          "is_spicy": false
        },
        {
          "eng_name": "Preserved Dry Sweetened Radish with Scrambled Eggs",
          "ch_name": "菜脯炒蛋",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 12,
          "is_spicy": false
        },
        {
          "eng_name": "White Mushrooms with Scrambled Eggs",
          "ch_name": "毛菇炒蛋",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 12,
          "is_spicy": false
        },
        {
          "eng_name": "Tomatoes with Scrambled Eggs",
          "ch_name": "鮮茄炒蛋",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 12,
          "is_spicy": false
        },
        {
          "eng_name": "White Onions with Scrambled Eggs",
          "ch_name": "洋蔥炒蛋",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 12,
          "is_spicy": false
        },
        {
          "eng_name": "Beef slices with Scrambled Eggs",
          "ch_name": "牛肉炒蛋",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 12,
          "is_spicy": false
        },
        {
          "eng_name": "Chicken slices with Scrambled Eggs",
          "ch_name": "雞片炒蛋",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 12,
          "is_spicy": false
        },
        {
          "eng_name": "Shredded Pork with Scrambled Eggs",
          "ch_name": "肉絲炒蛋",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 12,
          "is_spicy": false
        },
        {
          "eng_name": "Shrimp with Scrambled Eggs",
          "ch_name": "蝦仁炒蛋",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 12,
          "is_spicy": false
        },
        {
          "eng_name": "Yellow Leek & Bean Sprout with Squid",
          "ch_name": "韭黃芽菜鮮魷",
          "description": "Stir fried",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 13,
          "is_spicy": false
        },
        {
          "eng_name": "Squid with Black Bean Sauce",
          "ch_name": "豉椒鮮魷",
          "description": "Stir fried",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 13,
          "is_spicy": false
        },
        {
          "eng_name": "Kung Pao Squid",
          "ch_name": "宮保鮮魷(辣)",
          "description": "Stir fried with mixed vegetable in Szechwan sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 13,
          "is_spicy": true
        },
        {
          "eng_name": "Stir Fried Squid with Salted Shrimp Sauce",
          "ch_name": "咸蝦鮮魷",
          "description": "",
          "priceInCents": 900,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 13,
          "is_spicy": false
        },
        {
          "eng_name": "Salt and Pepper Fried Squid",
          "ch_name": "鹽椒鮮魷(辣)",
          "description": "Deep fried shrimp mixed in salt & pepper",
          "priceInCents": 900,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 13,
          "is_spicy": true
        },
        {
          "eng_name": "Ginger & Green Onions with Mussels",
          "ch_name": "薑蔥青口",
          "description": "Stir fried",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 14,
          "is_spicy": false
        },
        {
          "eng_name": "Mussels with Black Bean Sauce",
          "ch_name": "豉椒青口",
          "description": "Stir fried",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 14,
          "is_spicy": false
        },
        {
          "eng_name": "Satay Mussels",
          "ch_name": "沙爹青口(辣)",
          "description": "Stir fried",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 14,
          "is_spicy": true
        },
        {
          "eng_name": "Mussels with Bean Sauce",
          "ch_name": "豆板醬青口(辣)",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 14,
          "is_spicy": true
        },
        {
          "eng_name": "Yellow Leek & Bean Sprout with Fish Fillet",
          "ch_name": "韭黃芽菜魚片",
          "description": "Stir fried",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 15,
          "is_spicy": false
        },
        {
          "eng_name": "Chinese Broccoli with Fish Fillet",
          "ch_name": "芥蘭魚片",
          "description": "Stir fried with light sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 15,
          "is_spicy": false
        },
        {
          "eng_name": "Ginger & Green Onions with Fish Fillet",
          "ch_name": "薑蔥魚片",
          "description": "Stir fried with light sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 15,
          "is_spicy": false
        },
        {
          "eng_name": "Szechuan Sauce Fried Fish Fillet",
          "ch_name": "干燒魚片(辣)",
          "description": "Deep fried fish served with sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 15,
          "is_spicy": true
        },
        {
          "eng_name": "Fish Fillet with Black Bean Sauce",
          "ch_name": "豉椒魚片",
          "description": "Stir fried",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 15,
          "is_spicy": false
        },
        {
          "eng_name": "Hong Kong Style Fried Fish Fillet",
          "ch_name": "紅燒班魚",
          "description": "Deep fried fish served with sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 15,
          "is_spicy": false
        },
        {
          "eng_name": "Ginger, Green Onions & Tofu with Fish Fillet",
          "ch_name": "薑蔥豆腐魚片",
          "description": "Stir fried",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 15,
          "is_spicy": false
        },
        {
          "eng_name": "Tofu with Deep Fried Whole Fish with Ginger & Green Onion Sauce",
          "ch_name": "薑蔥豆腐全魚",
          "description": "",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 16,
          "is_spicy": false
        },
        {
          "eng_name": "Cantonese Style Deep Fried Whole Tilapia",
          "ch_name": "廣東紅燒全魚",
          "description": "with light sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 16,
          "is_spicy": false
        },
        {
          "eng_name": "Deep Fried Whole Tilapia with Black Bean Sauce",
          "ch_name": "豉椒全魚",
          "description": "",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 16,
          "is_spicy": false
        },
        {
          "eng_name": "Deep Fried Whole Tilapia with Sour Vegetables",
          "ch_name": "酸菜全魚",
          "description": "with light sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 16,
          "is_spicy": false
        },
        {
          "eng_name": "Deep Fried Whole Tilapia & Eggplant",
          "ch_name": "茄子全魚",
          "description": "with light sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 16,
          "is_spicy": false
        },
        {
          "eng_name": "Deep Fried Whole Tilapia & Tofu with Szechwan Hot Bean Sauce",
          "ch_name": "豆板醬豆腐全魚(辣)",
          "description": "",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 16,
          "is_spicy": true
        },
        {
          "eng_name": "Yang Chow Fried Rice",
          "ch_name": "楊州炒飯",
          "description": "Shrimp, ham, peas, carrots with egg fried rice",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 17,
          "is_spicy": false
        },
        {
          "eng_name": "Minced Beef & Lettuce Fried Rice",
          "ch_name": "生炒牛肉飯",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 17,
          "is_spicy": false
        },
        {
          "eng_name": "Preserved Salted Fish & Chicken Fried Rice",
          "ch_name": "咸魚雞炒飯",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 17,
          "is_spicy": false
        },
        {
          "eng_name": "Shredded Pork Fried Rice with Salted Shrimp Paste",
          "ch_name": "咸蝦豬肉炒飯",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 17,
          "is_spicy": false
        },
        {
          "eng_name": "Curry Chicken Fried Rice",
          "ch_name": "咖哩雞肉炒飯(辣)",
          "description": "Sliced chicken, onions, & eggs with curry powder",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 17,
          "is_spicy": true
        },
        {
          "eng_name": "Ginger, Green Onion, & Lettuce Egg Fried Rice",
          "ch_name": "姜蔥生菜蛋炒飯",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 17,
          "is_spicy": false
        },
        {
          "eng_name": "Yin & Yang Fried Rice",
          "ch_name": "太極鴛鴦炒飯",
          "description": "Shrimp in cream sauce & sliced chicken in tomato sauce served over egg fried rice",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 17,
          "is_spicy": false
        },
        {
          "eng_name": "Seafood Combo Fried Rice",
          "ch_name": "海鮮炒飯",
          "description": "Shrimp, squid, fish cake, & mussel",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 17,
          "is_spicy": false
        },
        {
          "eng_name": "XO Sauce Combo Fried Rice",
          "ch_name": "XO醤什錦炒飯(辣)",
          "description": "Shrimp, chicken, beef, squid, peas, carrots, onions, & eggs",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 17,
          "is_spicy": true
        },
        {
          "eng_name": "Japanese Style Chicken or Beef or Pork Fried Rice",
          "ch_name": "日本雞/牛/豬肉炒飯",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 17,
          "is_spicy": false
        },
        {
          "eng_name": "Minced Beef or Tomato Sauce with Beef Served over Egg Fried Rice",
          "ch_name": "煎蛋免冶牛肉炒飯",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 17,
          "is_spicy": false
        },
        {
          "eng_name": "Chinese Broccoli Beef",
          "ch_name": "芥蘭牛肉",
          "description": "with brown sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": false
        },
        {
          "eng_name": "Ginger & Green Onion Beef",
          "ch_name": "薑蔥牛肉",
          "description": "with brown sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": false
        },
        {
          "eng_name": "Chinese Beef Stew Turnip",
          "ch_name": "牛腩蘿蔔",
          "description": "with brown sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": false
        },
        {
          "eng_name": "Combo & Fried Tofu",
          "ch_name": "八珍豆腐",
          "description": "Assorted meats & fried tofu with brown sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": false
        },
        {
          "eng_name": "Preserved Salted Fished & Chicken with Tofu",
          "ch_name": "咸魚雞豆腐",
          "description": "with light sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": false
        },
        {
          "eng_name": "Shredded Pork & Tofu with Salted Shrimp Sauce",
          "ch_name": "咸蝦豬肉豆腐",
          "description": "with light sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": false
        },
        {
          "eng_name": "Ma Po Tofu",
          "ch_name": "麻婆豆腐(辣)",
          "description": "Soft tofu, minced pork, mushrooms & green onions w/garlic sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": true
        },
        {
          "eng_name": "Black Mushroom & Vegetables",
          "ch_name": "冬菇時菜",
          "description": "with light sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": false
        },
        {
          "eng_name": "Bitter Melon & Pork Spare Ribs",
          "ch_name": "苦瓜排骨",
          "description": "with light sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": false
        },
        {
          "eng_name": "Bitter Melon Beef",
          "ch_name": "苦瓜牛肉",
          "description": "with brown sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": false
        },
        {
          "eng_name": "Eggplant with Garlic Minced Meat Sauce",
          "ch_name": "魚香茄子",
          "description": "with brown sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": false
        },
        {
          "eng_name": "Eggplant & Spare Rib",
          "ch_name": "茄子排骨",
          "description": "with brown sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": false
        },
        {
          "eng_name": "Preserved Salted Fish, Chicken & Eggplant",
          "ch_name": "茄子咸魚雞",
          "description": "with light sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": false
        },
        {
          "eng_name": "Taro with Pork Spare Ribs",
          "ch_name": "芋頭排骨",
          "description": "with brown sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": false
        },
        {
          "eng_name": "Seafood Combo",
          "ch_name": "一品海鮮",
          "description": "Shrimp, squid, fish cake, & mussel with light sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": false
        },
        {
          "eng_name": "Black Mushrooms with Fillet Fish & Tofu",
          "ch_name": "冬菇班腩豆腐",
          "description": "with light sauce",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": false
        },
        {
          "eng_name": "Sour Vegetable Whole Fish",
          "ch_name": "酸菜全魚",
          "description": "",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": false
        },
        {
          "eng_name": "XO Sauce with Chicken & Tofu",
          "ch_name": "XO豆腐雞(辣)",
          "description": "",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": true
        },
        {
          "eng_name": "Whole Fish & Tofu with Szechwan Hot Bean Sauce",
          "ch_name": "豆板醬豆腐全魚(辣)",
          "description": "",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": true
        },
        {
          "eng_name": "Chicken with Spicy Sauce",
          "ch_name": "水口辣雞(辣)",
          "description": "",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": true
        },
        {
          "eng_name": "Deep Fried Chicken with Onion Sauce",
          "ch_name": "油淋雞",
          "description": "",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": false
        },
        {
          "eng_name": "Chicken with Black Bean Sauce",
          "ch_name": "豉椒雞",
          "description": "",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": false
        },
        {
          "eng_name": "Fried Tofu & Ham with Vermicelli Noodles",
          "ch_name": "油豆腐粉絲火腿",
          "description": "",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": false
        },
        {
          "eng_name": "Fried Tofu in Satay Sauce with Vermicelli Noodles",
          "ch_name": "沙爹粉絲油豆腐(辣)",
          "description": "",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 18,
          "is_spicy": true
        },
        {
          "eng_name": "Chinese Beef Stew",
          "ch_name": "牛腩撈麵/粉",
          "description": "mixed with noodles",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 19,
          "is_spicy": false
        },
        {
          "eng_name": "Ginger, Green Onion & Bean Sprout",
          "ch_name": "姜蔥芽菜撈麵/粉",
          "description": "mixed with noodles",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 19,
          "is_spicy": false
        },
        {
          "eng_name": "Ginger, Green Onion & Shredded Pork",
          "ch_name": "姜蔥肉絲撈麵/粉",
          "description": "mixed with noodles",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 19,
          "is_spicy": false
        },
        {
          "eng_name": "Ginger, Green Onion & Beef",
          "ch_name": "姜蔥牛撈麵/粉",
          "description": "mixed with noodles",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 19,
          "is_spicy": false
        },
        {
          "eng_name": "Wonton and Beef Stew",
          "ch_name": "雲吞牛腩撈麵/粉",
          "description": "mixed with noodles",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 19,
          "is_spicy": false
        },
        {
          "eng_name": "Wonton and Seafood",
          "ch_name": "雲吞海鮮撈麵/粉",
          "description": "mixed with noodles",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 19,
          "is_spicy": false
        },
        {
          "eng_name": "Wonton and Japanese BBQ Pork",
          "ch_name": "雲吞日式叉燒撈麵/粉",
          "description": "mixed with noodles",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 19,
          "is_spicy": false
        },
        {
          "eng_name": "Singapore Style Stir Fried Rice Vermicelli Noodles",
          "ch_name": "星洲米粉",
          "description": "Dry",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 20,
          "is_spicy": false
        },
        {
          "eng_name": "Thai Style Stir Fried Rice Vermicelli Noodles",
          "ch_name": "泰式米粉",
          "description": "Dry",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 20,
          "is_spicy": false
        },
        {
          "eng_name": "Fu Jian Style Stir Fried Rice Vermicelli Noodles",
          "ch_name": "福建上湯炆米粉",
          "description": "Dry",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 20,
          "is_spicy": false
        },
        {
          "eng_name": "Hmoy Style Stir Fried Rice Vermicelli",
          "ch_name": "廈門炒米粉",
          "description": "Dry",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 20,
          "is_spicy": false
        },
        {
          "eng_name": "Chiu Chow Satay Stir Fried Rice Vermicelli",
          "ch_name": "潮州沙爹炒米粉",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 20,
          "is_spicy": false
        },
        {
          "eng_name": "Black Pepper Beef Stir Fried with Spaghetti",
          "ch_name": "黑椒干炒牛意粉(辣)",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 21,
          "is_spicy": true
        },
        {
          "eng_name": "XO Sauce Chicken Stir Fried with Spaghetti",
          "ch_name": "X O醬干炒雞柳意粉(辣)",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 21,
          "is_spicy": true
        },
        {
          "eng_name": "Malaysian Style Chow Fun",
          "ch_name": "炒貴刁",
          "description": "Dry",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 22,
          "is_spicy": false
        },
        {
          "eng_name": "Beef Chow Fun",
          "ch_name": "干炒牛河",
          "description": "Dry",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 22,
          "is_spicy": false
        },
        {
          "eng_name": "Satay Sauce Combo Chow Fun",
          "ch_name": "沙爹什錦炒河粉(辣)",
          "description": "Dry",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 22,
          "is_spicy": true
        },
        {
          "eng_name": "Sliced Beef or Chinese Beef Stew Chow Fun",
          "ch_name": "牛/牛腩炒河粉",
          "description": "with brown sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 22,
          "is_spicy": false
        },
        {
          "eng_name": "Sliced Chicken or Pork Chow Fun",
          "ch_name": "雞/肉絲炒河粉",
          "description": "with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 22,
          "is_spicy": false
        },
        {
          "eng_name": "Fillet Fish Chow Fun",
          "ch_name": "班腩炒河粉",
          "description": "with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 22,
          "is_spicy": false
        },
        {
          "eng_name": "Combo Chow Fun",
          "ch_name": "什錦炒河粉",
          "description": "Sliced chicken, beef, shrimp, & squid with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 22,
          "is_spicy": false
        },
        {
          "eng_name": "Seafood Chow Fun",
          "ch_name": "海鮮炒河粉",
          "description": "Shrimp, squid, fish cake, & mussel with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 22,
          "is_spicy": false
        },
        {
          "eng_name": "Squid or Shrimp Chow Fun",
          "ch_name": "鮮魷/蝦炒河粉",
          "description": "with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 22,
          "is_spicy": false
        },
        {
          "eng_name": "Vegetable Chow Fun",
          "ch_name": "雜菜炒河粉",
          "description": "with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 22,
          "is_spicy": false
        },
        {
          "eng_name": "Black Mushroom Chow Fun",
          "ch_name": "冬菇炒河粉",
          "description": "with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 22,
          "is_spicy": false
        },
        {
          "eng_name": "Pork Spare Ribs Chow Fun with Black Bean Sauce",
          "ch_name": "豉椒排骨炒河粉(辣)",
          "description": "Pork Spare Ribs Chow Fun with Black Bean Sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 22,
          "is_spicy": true
        },
        {
          "eng_name": "Squid or Shrimp Chow Fun with Black Bean Sauce",
          "ch_name": "豉椒鮮魷/蝦炒河粉(辣)",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 22,
          "is_spicy": true
        },
        {
          "eng_name": "Beef or Chinese Beef Stew Chow Mein",
          "ch_name": "牛/牛腩炒麵",
          "description": "with brown sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 23,
          "is_spicy": false
        },
        {
          "eng_name": "Sliced Chicken or Pork Chow Mein",
          "ch_name": "雞/肉絲炒麵",
          "description": "with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 23,
          "is_spicy": false
        },
        {
          "eng_name": "Fillet Fish Chow Mein",
          "ch_name": "班腩炒麵",
          "description": "with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 23,
          "is_spicy": false
        },
        {
          "eng_name": "Combo Chow Mein",
          "ch_name": "什錦炒麵",
          "description": "Sliced chicken, beef, shrimp, & squid with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 23,
          "is_spicy": false
        },
        {
          "eng_name": "Seafood Chow Mein",
          "ch_name": "海鮮炒麵",
          "description": "Shrimp, squid, fish cake, & mussel with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 23,
          "is_spicy": false
        },
        {
          "eng_name": "Squid or Shrimp Chow Mein",
          "ch_name": "鮮魷/蝦炒麵",
          "description": "with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 23,
          "is_spicy": false
        },
        {
          "eng_name": "Vegetable Chow Mein",
          "ch_name": "雜菜炒麵",
          "description": "with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 23,
          "is_spicy": false
        },
        {
          "eng_name": "Black Mushroom Chow Mein",
          "ch_name": "冬菇炒麵",
          "description": "with light sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 23,
          "is_spicy": false
        },
        {
          "eng_name": "Pork Spare Ribs Chow Mein with Black Bean Sauc",
          "ch_name": "豉椒排骨炒麵(辣)",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 23,
          "is_spicy": true
        },
        {
          "eng_name": "Squid or Shrimp Chow Mein with Black Bean Sauce",
          "ch_name": "豉椒鮮魷/蝦炒麵(辣)",
          "description": "",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 23,
          "is_spicy": true
        },
        {
          "eng_name": "Wonton Noodle Soup",
          "ch_name": "雲吞麵/粉",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 24,
          "is_spicy": false
        },
        {
          "eng_name": "Chinese Beef Stew Noodle Soup",
          "ch_name": "牛腩麵/粉",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 24,
          "is_spicy": false
        },
        {
          "eng_name": "Combo Noodle Soup",
          "ch_name": "什錦麵/粉",
          "description": "Sliced chicken, beef, shrimp, & squid",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 24,
          "is_spicy": false
        },
        {
          "eng_name": "Seafood Noodle Soup",
          "ch_name": "海鮮麵/粉",
          "description": "Shrimp, squid, fish cake, & mussel",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 24,
          "is_spicy": false
        },
        {
          "eng_name": "Japanese B.B.Q. Pork Noodle Soup",
          "ch_name": "日本叉燒麵/粉",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 24,
          "is_spicy": false
        },
        {
          "eng_name": "Shanghai Noodle Soup",
          "ch_name": "上海湯麵",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 24,
          "is_spicy": false
        },
        {
          "eng_name": "Preserved Pickle with Shredded Pork Noodle Soup",
          "ch_name": "炸菜肉絲麵/粉",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 24,
          "is_spicy": false
        },
        {
          "eng_name": "Preserved Veggies with Shredded Pork Noodle Soup",
          "ch_name": "雪菜肉絲麵/粉",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 24,
          "is_spicy": false
        },
        {
          "eng_name": "Oyster Sauce with Vegetables",
          "ch_name": "蠔油時菜(生菜/芥蘭/菜心)",
          "description": "Lettuce, Gai Lan, & Choy Sum",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 24,
          "is_spicy": false
        },
        {
          "eng_name": "Wonton and Chinese Beef Stew Noodles Soup",
          "ch_name": "雲吞牛腩麵/粉",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 24,
          "is_spicy": false
        },
        {
          "eng_name": "Wonton and Seafood Noodles Soup",
          "ch_name": "雲吞海鮮麵/粉",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 24,
          "is_spicy": false
        },
        {
          "eng_name": "Wonton and Japanese BBQ Pork Noodles Soup",
          "ch_name": "雲吞日式叉燒麵/粉",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 24,
          "is_spicy": false
        },
        {
          "eng_name": "Fish Ball with Rice Vermicelli Noodle or Egg Noodle Soup",
          "ch_name": "魚蛋粉",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 25,
          "is_spicy": false
        },
        {
          "eng_name": "Tom Yam Kung Combo Noodle Soup",
          "ch_name": "冬陰功什錦湯粉(辣)",
          "description": "(Sliced chicken & shrimp",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 26,
          "is_spicy": true
        },
        {
          "eng_name": "Satay Beef with Rice Vermicelli Noodles or Egg Noodles",
          "ch_name": "沙爹牛粉/麵(辣)",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 27,
          "is_spicy": true
        },
        {
          "eng_name": "Red Curry Combo with Rice Vermicelli Noodles or Egg Noodles",
          "ch_name": "紅咖哩什錦粉/麵(辣)",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 27,
          "is_spicy": true
        },
        {
          "eng_name": "Braised Beef or Pork with Northern or Rice Vermicelli Noodles Soup",
          "ch_name": "紅燒牛肉/豬肉麵",
          "description": "",
          "priceInCents": 650,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 28,
          "is_spicy": false
        },
        {
          "eng_name": "Braised Whole Fish with Northern or Rice Vermicelli Noodles Soup",
          "ch_name": "紅燒全魚飯/麵",
          "description": "",
          "priceInCents": 950,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 28,
          "is_spicy": false
        },
        {
          "eng_name": "BAKED FRIED RICE OR SPAGHETTI COMBO",
          "ch_name": "西式焗飯 / 焗意粉",
          "description": "Combo served with: ACE’s Tomato Sauce or White Sauce & ACE’s Daily Soup 以下均配上特製茄汁或白汁 及是日餐湯 $10.50 Choose: Fried Rice or Spaghetti 請選 炒飯 或 意粉 Choose one item below (請選其一): Chicken Steak 雞扒 Ham 火腿 Chicken Fillet 雞柳 Fish Fillet 龍利魚片 Beef 牛肉 Pork Chop 豬扒 Vegetables 雜菜 Seafood (Shrimp, squid, fish cake, & mussel) 海鮮",
          "priceInCents": 1050,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 29,
          "is_spicy": false
        },
        {
          "eng_name": "ACE’s SPAGHETTI COMBO",
          "ch_name": "意粉",
          "description": "Combo served with: ACE’s Tomato Sauce or White Sauce & ACE’s Daily Soup 以下均配上特製茄汁或白汁 及是日餐湯 $10.50 豬扒意粉 Pork Chop with Spaghetti 雞扒意粉 Chicken Steak with Spaghetti 黑椒牛柳意粉(辣) Black Pepper Beef with Spaghetti 龍利魚塊意粉 Basa Fish Fillet with Spaghetti 海鮮意粉 Seafood with Spaghetti (Shrimp, squid, fish cake, & mussel)",
          "priceInCents": 1050,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 29,
          "is_spicy": false
        },
        {
          "eng_name": "HONG KONG STYLE GRILLED COMBO",
          "ch_name": "港式扒套餐",
          "description": "Combo served with: Steamed white/brown rice or spaghetti & ACE’s Daily Soup 以下套餐配上白飯或意粉及是日餐湯 $10.50 Choose: White Rice or Brown Rice or Spaghetti 选择：白米饭或糙米饭或意粉 Choose: one or two items below (請選一或兩款): Chicken Steak 烤雞扒 Ham Steak 火腿扒 Beef Loin 牛扒 Pork Chop 豬扒 Hungry? Order the Ultimate Grilled Combo 雜扒餐 (Chicken Steak, Beef Loin, Ham Steak, & Pork Chop) $12.00",
          "priceInCents": 1050,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 29,
          "is_spicy": false
        },
        {
          "eng_name": "CURRY SAUCE/PORTUGUESE SAUCE COMBO",
          "ch_name": "咖哩/葡式套餐",
          "description": "Combo served with: Steamed white/brown rice or spaghetti & ACE’s Daily Soup 以上均奉送是日餐湯及飯或意粉 $10.50 Choose: Curry Sauce & Portuguese Sauce (Both sauces come with potatoes and white onions) Choose: White Rice or Brown Rice or Spaghetti Choice: one item below (請選其一): Chicken Wings 雞翼 Fish Fillet 龍利魚片 Beef Stew 牛腩 Seafood 海鮮 Beef 牛柳 Shrimp 蝦 Pork Chop 豬扒 Squid 尤魚 Vegetables 雜菜",
          "priceInCents": 1050,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 29,
          "is_spicy": false
        },
        {
          "eng_name": "Asian Style Family Dinner",
          "ch_name": "大家乐家庭套餐",
          "description": "",
          "priceInCents": 2700,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 30,
          "is_spicy": false
        },
        {
          "eng_name": "Canton Set Dinner",
          "ch_name": "广東餐",
          "description": "",
          "priceInCents": 4250,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 30,
          "is_spicy": false
        },
        {
          "eng_name": "Szechwan Set Dinner",
          "ch_name": "四川餐",
          "description": "",
          "priceInCents": 4250,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 30,
          "is_spicy": false
        },
        {
          "eng_name": "Northern Set Dinner",
          "ch_name": "北方套餐",
          "description": "",
          "priceInCents": 4250,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 30,
          "is_spicy": false
        },
        {
          "eng_name": "Seafood Set Dinner",
          "ch_name": "海鲜餐",
          "description": "",
          "priceInCents": 4250,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 30,
          "is_spicy": false
        },
        {
          "eng_name": "Spicy Set Dinner",
          "ch_name": "全辣餐",
          "description": "",
          "priceInCents": 4250,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 30,
          "is_spicy": false
        },
        {
          "eng_name": "Hometown Set Dinner",
          "ch_name": "家乡餐",
          "description": "",
          "priceInCents": 4250,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 30,
          "is_spicy": false
        },
        {
          "eng_name": "Hong Kong Set Dinner",
          "ch_name": "香港餐",
          "description": "",
          "priceInCents": 4250,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 30,
          "is_spicy": false
        },
        {
          "eng_name": "Beijing Set Dinner",
          "ch_name": "北京餐",
          "description": "",
          "priceInCents": 4250,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 30,
          "is_spicy": false
        },
        {
          "eng_name": "Hot Pot Style Set Dinner",
          "ch_name": "煲煲香",
          "description": "",
          "priceInCents": 4250,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 30,
          "is_spicy": false
        },
        {
          "eng_name": "Big Nine Set Dinner",
          "ch_name": "九大簋套餐",
          "description": "",
          "priceInCents": 9000,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 30,
          "is_spicy": false
        },
        {
          "eng_name": "Hong Kong Style Coffee",
          "ch_name": "港式咖啡",
          "description": "Sweetened & served hot or cold",
          "priceInCents": 325,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 32,
          "is_spicy": false
        },
        {
          "eng_name": "Hong Kong Style Coffee with Milk Tea",
          "ch_name": "港式鴛鴦",
          "description": "Sweetened & served hot or cold)",
          "priceInCents": 325,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 32,
          "is_spicy": false
        },
        {
          "eng_name": "Hong Kong Style Milk Tea",
          "ch_name": "港式奶茶",
          "description": "Sweetened & served hot or cold",
          "priceInCents": 325,
          "img_url": "http://www.asiancafeexpress.com/_/rsrc/1468849187734/menu/drinks/hk_style_milk_tea.JPG?height=200&width=150",
          "category_id": 32,
          "is_spicy": false
        },
        {
          "eng_name": "Tea with Lemon",
          "ch_name": "檸檬茶",
          "description": "Sweetened & served hot or cold",
          "priceInCents": 325,
          "img_url": "http://www.asiancafeexpress.com/_/rsrc/1468849187716/menu/drinks/073111%20Homemade%20Ice%20Tea.jpg?height=200&width=160",
          "category_id": 32,
          "is_spicy": false
        },
        {
          "eng_name": "Boba with Milk Tea",
          "ch_name": "波霸奶茶",
          "description": "Sweetened & served hot or cold",
          "priceInCents": 325,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 32,
          "is_spicy": false
        },
        {
          "eng_name": "Iced Red Bean",
          "ch_name": "紅豆冰",
          "description": "Sweetened & served cold",
          "priceInCents": 325,
          "img_url": "http://www.asiancafeexpress.com/_/rsrc/1468849187868/menu/drinks/ice_red_bean.JPG?height=200&width=150",
          "category_id": 32,
          "is_spicy": false
        },
        {
          "eng_name": "Taro Coconut with Tapioca",
          "ch_name": "西米露",
          "description": "Sweetened & served cold",
          "priceInCents": 325,
          "img_url": "http://www.asiancafeexpress.com/_/rsrc/1468849188686/menu/drinks/073111%20Cold%20Taro%20Coconut%20Tapioca%20Drink.jpg?height=200&width=149",
          "category_id": 32,
          "is_spicy": false
        },
        {
          "eng_name": "Hot Oolong Tea",
          "ch_name": "热茶",
          "description": "",
          "priceInCents": 100,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 32,
          "is_spicy": false
        },
        {
          "eng_name": "Soda",
          "ch_name": "苏打",
          "description": "Selection varies – check the soda display case",
          "priceInCents": 100,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 32,
          "is_spicy": false
        },
        {
          "eng_name": "Pork Egg Roll",
          "ch_name": "豬春卷",
          "description": "Pork & mixed vegetables (2pcs)",
          "priceInCents": 225,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 33,
          "is_spicy": false
        },
        {
          "eng_name": "Vegetable Spring Egg Roll",
          "ch_name": "素春卷",
          "description": "Mixed vegetables (2pcs)",
          "priceInCents": 225,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 33,
          "is_spicy": false
        },
        {
          "eng_name": "Fried or Steamed Chicken Dumplings",
          "ch_name": "窩貼",
          "description": "Chicken & mixed vegetables (3pcs)",
          "priceInCents": 225,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 33,
          "is_spicy": false
        },
        {
          "eng_name": "Fried Onion Rings",
          "ch_name": "炸洋蔥圈",
          "description": "8pcs",
          "priceInCents": 225,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 33,
          "is_spicy": false
        },
        {
          "eng_name": "Fried Shrimp",
          "ch_name": "炸蝦",
          "description": "2pcs",
          "priceInCents": 225,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 33,
          "is_spicy": false
        },
        {
          "eng_name": "Fried Crab Puffs",
          "ch_name": "蟹角",
          "description": "Cream cheese & imitation crab meat",
          "priceInCents": 225,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 33,
          "is_spicy": false
        },
        {
          "eng_name": "Spring Noodles with Soup",
          "ch_name": "楊春麵",
          "description": "Plain noodles with chicken broth",
          "priceInCents": 300,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 33,
          "is_spicy": false
        },
        {
          "eng_name": "Satay Turnips & Pork Skin",
          "ch_name": "沙爹豬皮蘿蔔(辣)",
          "description": "Turnips & pork skins in Satay sauce",
          "priceInCents": 300,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 33,
          "is_spicy": true
        },
        {
          "eng_name": "Chili Sauce Chicken Dumplings",
          "ch_name": "紅油炒手(辣)",
          "description": "Chicken & mixed vegetables (4pcs)",
          "priceInCents": 300,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 33,
          "is_spicy": true
        },
        {
          "eng_name": "Chili Salt Chicken Wings",
          "ch_name": "椒鹽雞翼(辣)",
          "description": "Tossed in green onions, garlic, spices, & chili oil (5pcs)",
          "priceInCents": 400,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 33,
          "is_spicy": true
        },
        {
          "eng_name": "Steamed Pork & Vegetable Dumplings",
          "ch_name": "蒸北方菜肉餃",
          "description": "10pcs",
          "priceInCents": 350,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 33,
          "is_spicy": false
        },
        {
          "eng_name": "Five Spiced Beef or Pork Slices",
          "ch_name": "五香牛或豬肉",
          "description": "(Served cold",
          "priceInCents": 599,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 33,
          "is_spicy": false
        },
        {
          "eng_name": "Spicy Salt Fried Pork Spare Ribs",
          "ch_name": "椒鹽小排骨(辣)",
          "description": "Tossed in green onions, garlic, spices, & chili oil",
          "priceInCents": 599,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 33,
          "is_spicy": false
        },
        {
          "eng_name": "Hawaiian BBQ Chicken",
          "ch_name": "",
          "description": "Grilled boneless skinless chicken with Hawaiian sauce",
          "priceInCents": 460,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 34,
          "is_spicy": false
        },
        {
          "eng_name": "Hawaiian Slice Beef",
          "ch_name": "",
          "description": "Grilled slices of lean & tender beef with Hawaiian sauce",
          "priceInCents": 460,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 34,
          "is_spicy": false
        },
        {
          "eng_name": "Hawaiian Slice Roast Pork",
          "ch_name": "",
          "description": "Slices of roast pork with Hawaiian sauce",
          "priceInCents": 460,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 34,
          "is_spicy": false
        },
        {
          "eng_name": "Orange Chicken",
          "ch_name": "",
          "description": "Deep fried chicken with Orange sauce",
          "priceInCents": 460,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 34,
          "is_spicy": false
        },
        {
          "eng_name": "Beef Broccoli",
          "ch_name": "",
          "description": "Sliced beef & broccoli with brown sauce",
          "priceInCents": 460,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 34,
          "is_spicy": false
        },
        {
          "eng_name": "Chicken Broccoli",
          "ch_name": "",
          "description": "Sliced chicken & broccoli with brown sauce",
          "priceInCents": 460,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 34,
          "is_spicy": false
        },
        {
          "eng_name": "Sweet & Sour Chicken",
          "ch_name": "",
          "description": "Deep fried chicken & green peppers w/Sweet & Sour sauce",
          "priceInCents": 460,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 34,
          "is_spicy": false
        },
        {
          "eng_name": "Sweet & Sour Pork",
          "ch_name": "",
          "description": "Deep fried pork & green peppers w/Sweet & Sour sauce",
          "priceInCents": 460,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 34,
          "is_spicy": false
        },
        {
          "eng_name": "Spicy Chicken",
          "ch_name": "",
          "description": "Deep fried chicken with hot sauce",
          "priceInCents": 460,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 34,
          "is_spicy": true
        },
        {
          "eng_name": "Kung Pao Chicken",
          "ch_name": "",
          "description": "Sliced chicken with Szechwan sauce",
          "priceInCents": 460,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 34,
          "is_spicy": true
        },
        {
          "eng_name": "Vegetable Chicken",
          "ch_name": "",
          "description": "Sliced chicken & vegetables with light sauce",
          "priceInCents": 460,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 34,
          "is_spicy": false
        },
        {
          "eng_name": "Vegetable Shrimp",
          "ch_name": "",
          "description": "Shrimp & vegetables with light sauce",
          "priceInCents": 460,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 34,
          "is_spicy": false
        },
        {
          "eng_name": "Teriyaki Chicken",
          "ch_name": "",
          "description": "Sliced chicken with Teriyaki sauce",
          "priceInCents": 460,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 34,
          "is_spicy": false
        },
        {
          "eng_name": "Teriyaki Fish Fillet",
          "ch_name": "",
          "description": "Fried fish fillet with Teriyaki sauce (6pcs)",
          "priceInCents": 460,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 34,
          "is_spicy": false
        },
        {
          "eng_name": "Mixed Vegetable",
          "ch_name": "",
          "description": "Mixed vegetables with light sauce",
          "priceInCents": 460,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 34,
          "is_spicy": false
        },
        {
          "eng_name": "Black Pepper Chicken",
          "ch_name": "",
          "description": "Sliced chicken & onions with Black Pepper sauce",
          "priceInCents": 460,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 34,
          "is_spicy": true
        },
        {
          "eng_name": "Mongolian Chicken",
          "ch_name": "",
          "description": "Sliced chicken & scallion with brown sauce",
          "priceInCents": 460,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 34,
          "is_spicy": true
        },
        {
          "eng_name": "Vegetable Lo Mein",
          "ch_name": "",
          "description": "Mixed vegetables & egg noodles with brown sauce",
          "priceInCents": 460,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 34,
          "is_spicy": false
        },
        {
          "eng_name": "Egg Fried Rice",
          "ch_name": "",
          "description": "Eggs, green onions, & green peas with rice",
          "priceInCents": 460,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 34,
          "is_spicy": false
        },
        {
          "eng_name": "Egg Drop Soup",
          "ch_name": "蛋花汤",
          "description": "Carrots, pea, & eggs in chicken broth",
          "priceInCents": 350,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 35,
          "is_spicy": false
        },
        {
          "eng_name": "Chinese Chicken Noodle Soup",
          "ch_name": "鸡汤面",
          "description": "Sliced chicken with Shanghai noodles in chicken broth",
          "priceInCents": 350,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 35,
          "is_spicy": false
        },
        {
          "eng_name": "Hot & Sour Soup",
          "ch_name": "酸辣汤(辣)",
          "description": "Sliced chicken, mushroom, zucchini, tofu, eggs, yellow onions & green onions",
          "priceInCents": 350,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 35,
          "is_spicy": true
        },
        {
          "eng_name": "Chicken Fried Rice",
          "ch_name": "雞肉炒飯",
          "description": "Sliced chicken, eggs, green onions, carrots, peas, & rice",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 36,
          "is_spicy": false
        },
        {
          "eng_name": "Beef Fried Rice",
          "ch_name": "牛肉炒飯",
          "description": "Sliced beef, eggs, green onions, carrots, peas, & rice",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 36,
          "is_spicy": false
        },
        {
          "eng_name": "Pork Fried Rice",
          "ch_name": "鍋肉炒飯",
          "description": "Sliced pork, eggs, green onions, carrots, peas, & rice",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 36,
          "is_spicy": false
        },
        {
          "eng_name": "Shrimp Fried Rice",
          "ch_name": "蝦仁炒飯",
          "description": "Shrimp, eggs, green onions, carrots, peas, & rice",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 36,
          "is_spicy": false
        },
        {
          "eng_name": "Vegetable Fried Rice",
          "ch_name": "蔬菜炒飯",
          "description": "Eggs, green onions, carrots, peas, & rice",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 36,
          "is_spicy": false
        },
        {
          "eng_name": "Combo Fried Rice",
          "ch_name": "本楼炒飯",
          "description": "Sliced chicken, beef, shrimp, eggs, green onions, carrots, peas, & rice",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 36,
          "is_spicy": false
        },
        {
          "eng_name": "Chicken Lo Mein",
          "ch_name": "雞撈麵",
          "description": "Sliced chicken & mixed vegetables with light sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 37,
          "is_spicy": false
        },
        {
          "eng_name": "Beef Lo Mein",
          "ch_name": "牛肉撈麵",
          "description": "Sliced beef & mixed vegetables with brown sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 37,
          "is_spicy": false
        },
        {
          "eng_name": "Shrimp Lo Mein",
          "ch_name": "蝦撈麵",
          "description": "Shrimp & mixed vegetables with light sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 37,
          "is_spicy": false
        },
        {
          "eng_name": "Vegetable Lo Mein",
          "ch_name": "蔬菜撈麵",
          "description": "Mixed vegetables with light sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 37,
          "is_spicy": false
        },
        {
          "eng_name": "House Special Lo Mein",
          "ch_name": "本楼撈麵",
          "description": "Sliced chicken, beef, shrimp & mixed vegetables with light sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 37,
          "is_spicy": false
        },
        {
          "eng_name": "Orange Chicken",
          "ch_name": "橙雞",
          "description": "Deep fried chicken chunks with Orange sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 38,
          "is_spicy": false
        },
        {
          "eng_name": "Teriyaki Chicken",
          "ch_name": "日本雞",
          "description": "Sliced chicken with Teriyaki sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 38,
          "is_spicy": false
        },
        {
          "eng_name": "Sweet & Sour Chicken",
          "ch_name": "酸甜雞",
          "description": "Deep fried chicken chunks with Sweet & Sour sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 38,
          "is_spicy": false
        },
        {
          "eng_name": "Broccoli Chicken",
          "ch_name": "西蘭花雞",
          "description": "Sliced chicken, broccoli & carrots with light sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 38,
          "is_spicy": false
        },
        {
          "eng_name": "Vegetable Chicken",
          "ch_name": "蔬菜雞",
          "description": "Sliced chicken & mixed vegetables with light sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 38,
          "is_spicy": false
        },
        {
          "eng_name": "Black Pepper Chicken",
          "ch_name": "黑椒雞(辣)",
          "description": "Sliced chicken & onions with Black Pepper sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 38,
          "is_spicy": true
        },
        {
          "eng_name": "Mongolian Chicken",
          "ch_name": "蒙古雞(辣)",
          "description": "Sliced chicken, scallion, & onions with brown sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 38,
          "is_spicy": true
        },
        {
          "eng_name": "General Chicken",
          "ch_name": "左宗堂雞(辣)",
          "description": "Fried chicken chunks with Sweet & Sour Chili sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 38,
          "is_spicy": true
        },
        {
          "eng_name": "Kung Pao Chicken",
          "ch_name": "宮保雞丁(辣)",
          "description": "Sliced chicken & mixed vegetables w/Szechwan sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 38,
          "is_spicy": true
        },
        {
          "eng_name": "Spicy Chicken",
          "ch_name": "辣子雞丁(辣)",
          "description": "Fried chicken chunks with hot sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 38,
          "is_spicy": true
        },
        {
          "eng_name": "Broccoli Shrimp",
          "ch_name": "西蘭花蝦",
          "description": "Shrimp, broccoli & carrots with light sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 39,
          "is_spicy": false
        },
        {
          "eng_name": "Vegetable Shrimp",
          "ch_name": "蔬菜蝦",
          "description": "Shrimp & mixed vegetables with light sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 39,
          "is_spicy": false
        },
        {
          "eng_name": "Kung Pao Shrimp",
          "ch_name": "宫保蝦(辣)",
          "description": "Shrimp& mixed vegetables w/Szechwan sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 39,
          "is_spicy": true
        },
        {
          "eng_name": "Shrimp with Lobster Sauce",
          "ch_name": "蝦龍湖",
          "description": "Shrimp & eggs with Lobster Black Bean sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 39,
          "is_spicy": false
        },
        {
          "eng_name": "Sweet & Sour Pork",
          "ch_name": "甜酸猪肉",
          "description": "Deep fried pork with Sweet & Sour sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 40,
          "is_spicy": false
        },
        {
          "eng_name": "Twice Cooked Pork",
          "ch_name": "回鍋肉(辣)",
          "description": "Deep fried pork chunks mixed with brown spicy sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 40,
          "is_spicy": true
        },
        {
          "eng_name": "Broccoli Beef",
          "ch_name": "西兰花牛肉",
          "description": "Sliced beef, broccoli & carrots with light sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 41,
          "is_spicy": false
        },
        {
          "eng_name": "Teriyaki Beef",
          "ch_name": "日本牛肉",
          "description": "Sliced beef with Teriyaki sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 41,
          "is_spicy": false
        },
        {
          "eng_name": "Mixed Vegetable Beef",
          "ch_name": "蔬菜牛肉",
          "description": "Sliced beef & mixed vegetables with light sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 41,
          "is_spicy": false
        },
        {
          "eng_name": "Kung Pao Beef",
          "ch_name": "宫保牛肉(辣)",
          "description": "Sliced beef & mixed vegetables with Szechwan sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 41,
          "is_spicy": true
        },
        {
          "eng_name": "Mongolian Beef",
          "ch_name": "蒙古牛肉(辣)",
          "description": "Sliced beef, scallion, & onions with brown spicy sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 41,
          "is_spicy": true
        },
        {
          "eng_name": "Black Pepper Beef",
          "ch_name": "黑椒牛肉(辣)",
          "description": "Sliced beef & onions with Black Pepper sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 41,
          "is_spicy": true
        },
        {
          "eng_name": "Black Mushrooms & Fried Tofu",
          "ch_name": "冬菇蔬菜油炸豆腐",
          "description": "Mushrooms, mixed vegetables, & fried tofu with light sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 42,
          "is_spicy": false
        },
        {
          "eng_name": "White Mushrooms & Fried Tofu",
          "ch_name": "鮮香菇蔬菜炒豆腐",
          "description": "Mushrooms, mixed vegetables, & fried tofu with light sauce",
          "priceInCents": 600,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 42,
          "is_spicy": false
        },
        {
          "eng_name": "Hawaiian BBQ Chicken",
          "ch_name": "夏威夷燒烤雞",
          "description": "Grilled boneless & skinless chicken with Hawaiian sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 43,
          "is_spicy": false
        },
        {
          "eng_name": "Hawaiian BBQ Beef",
          "ch_name": "夏威夷燒烤牛肉",
          "description": "Grilled slices of lean & tender beef with Hawaiian sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 43,
          "is_spicy": false
        },
        {
          "eng_name": "Hawaiian Roast Pork",
          "ch_name": "夏威夷烤豬",
          "description": "Slices of roast pork with Hawaiian sauce",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 43,
          "is_spicy": false
        },
        {
          "eng_name": "Hawaiian Combo",
          "ch_name": "夏威夷組合",
          "description": "Pick two meats: chicken, beef, or pork",
          "priceInCents": 850,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 43,
          "is_spicy": false
        },
        {
          "eng_name": "Family Dinner",
          "ch_name": "Family Dinner",
          "description": "Includes:  Your choice of 3 items from the entrée section (Shrimp dishes: Add $2.00 for each) For example: Orange Chicken, Beef w/Broccoli, & Kung Pao Chicken  This dinner special comes with lo mein & steamed white or brown rice (For an additional $2.00 - You can substitute white or brown rice with egg fried rice",
          "priceInCents": 2700,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 44,
          "is_spicy": false
        },
        {
          "eng_name": "Special Family Dinner",
          "ch_name": "Special Family Dinner",
          "description": "Includes:  Your choice of 5 items from the entrée section (Shrimp dishes: Add $2.00 for each) For example: Orange Chicken, Beef w/Broccoli, Sweet & Sour Pork, Mongolian Chicken, & Black Pepper Beef  This dinner special comes with lo mein, egg fried rice, & steamed white or brown rice (For an additional $2.00 - You can substitute white or brown rice with egg fried rice)",
          "priceInCents": 4250,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 44,
          "is_spicy": false
        },
        {
          "eng_name": "Meat Entrée selection in a Party Tray",
          "ch_name": "Meat Entrée selection in a Party Tray",
          "description": "",
          "priceInCents": 3500,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 45,
          "is_spicy": false
        },
        {
          "eng_name": "Vegetable Entrée selection in a Party Tray",
          "ch_name": "Vegetable Entrée selection in a Party Tray",
          "description": "",
          "priceInCents": 2700,
          "img_url": "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "category_id": 45,
          "is_spicy": false
        }
      ]);
    });
};
