
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {
          "eng_category": "DRINKS",
          "ch_category": "飲料",
          "section_id": 1
        },
        {
          "eng_category": "APPETIZERS",
          "ch_category": "小食",
          "section_id": 1
        },
        {
          "eng_category": "SOUP",
          "ch_category": "湯",
          "section_id": 1
        },
        {
          "eng_category": "CONGEE (Rice Soup)",
          "ch_category": "粥",
          "section_id": 1
        },
        {
          "eng_category": "TOFU",
          "ch_category": "豆腐",
          "section_id": 1
        },
        {
          "eng_category": "HONG KONG STYLE RICE PLATES",
          "ch_category": "港式碟頭飯",
          "section_id": 1
        },
        {
          "eng_category": "CHICKEN",
          "ch_category": "雞",
          "section_id": 1
        },
        {
          "eng_category": "BEEF",
          "ch_category": "牛",
          "section_id": 1
        },
        {
          "eng_category": "PORK",
          "ch_category": "豬",
          "section_id": 1
        },
        {
          "eng_category": "SHRIMP",
          "ch_category": "蝦",
          "section_id": 1
        },
        {
          "eng_category": "VEGETABLES",
          "ch_category": "素菜",
          "section_id": 1
        },
        {
          "eng_category": "SCRAMBLED EGGS",
          "ch_category": "炒蛋",
          "section_id": 1
        },
        {
          "eng_category": "SQUID",
          "ch_category": "鮮魷",
          "section_id": 1
        },
        {
          "eng_category": "MUSSEL",
          "ch_category": "青口",
          "section_id": 1
        },
        {
          "eng_category": "FISH FILLET",
          "ch_category": "魚片",
          "section_id": 1
        },
        {
          "eng_category": "WHOLE FISH (TILAPIA)",
          "ch_category": "全魚羅非魚",
          "section_id": 1
        },
        {
          "eng_category": "HONG KONG STYLE FRIED RICE",
          "ch_category": "港式炒飯",
          "section_id": 1
        },
        {
          "eng_category": "HOT POTS",
          "ch_category": "煲仔菜",
          "section_id": 1
        },
        {
          "eng_category": "HONG KONG STYLE LO-MEIN/RICE NOODLES",
          "ch_category": "港式銀絲蛋撈麵或米粉",
          "section_id": 1
        },
        {
          "eng_category": "Rice Vermicelli Noodles (Thin)",
          "ch_category": "米粉",
          "section_id": 1
        },
        {
          "eng_category": "Spaghetti Noodles",
          "ch_category": "意大利麵條",
          "section_id": 1
        },
        {
          "eng_category": "Chow Fun (Wide Rice Noodles)",
          "ch_category": "河粉",
          "section_id": 1
        },
        {
          "eng_category": "Chow Mein (Thin Egg Noodles – Pan Fried Crispy)",
          "ch_category": "蛋麵",
          "section_id": 1
        },
        {
          "eng_category": "HONG KONG STYLE NOODLE SOUPS",
          "ch_category": "港式湯, 粉, 麵",
          "section_id": 1
        },
        {
          "eng_category": "Chiu Chow",
          "ch_category": "潮州",
          "section_id": 1
        },
        {
          "eng_category": "Thai",
          "ch_category": "泰式",
          "section_id": 1
        },
        {
          "eng_category": "Singapore & Malaysian",
          "ch_category": "星馬特色",
          "section_id": 1
        },
        {
          "eng_category": "Taiwanese",
          "ch_category": "台式",
          "section_id": 1
        },
        {
          "eng_category": "CAFÉ SPECIALITIES COMBOs",
          "ch_category": "咖啡特色",
          "section_id": 1
        },
        {
          "eng_category": "Regional Set Dinners",
          "ch_category": "Regional Set Dinners",
          "section_id": 1
        },
        {
          "eng_category": "BRING YOUR OWN SEAFOOD",
          "ch_category": "来料加工餐0：海鲜想点煮",
          "section_id": 1
        },
        {
          "eng_category": "DRINKS",
          "ch_category": "飲料",
          "section_id": 2
        },
        {
          "eng_category": "APPETIZERS",
          "ch_category": "小食",
          "section_id": 2
        },
        {
          "eng_category": "ACE’s SPECIAL RICE BOWLS",
          "ch_category": "ACE’s SPECIAL RICE BOWLS",
          "section_id": 2
        },
        {
          "eng_category": "SOUP",
          "ch_category": "湯",
          "section_id": 2
        },
        {
          "eng_category": "FRIED RICE",
          "ch_category": "炒飯",
          "section_id": 2
        },
        {
          "eng_category": "LO MEIN",
          "ch_category": "撈麵",
          "section_id": 2
        },
        {
          "eng_category": "CHICKEN",
          "ch_category": "雞",
          "section_id": 2
        },
        {
          "eng_category": "SHRIMP",
          "ch_category": "蝦",
          "section_id": 2
        },
        {
          "eng_category": "PORK",
          "ch_category": "豬",
          "section_id": 2
        },
        {
          "eng_category": "BEEF",
          "ch_category": "牛",
          "section_id": 2
        },
        {
          "eng_category": "VEGETABLES",
          "ch_category": "蔬菜",
          "section_id": 2
        },
        {
          "eng_category": "HAWAIIAN STYLE",
          "ch_category": "夏威夷",
          "section_id": 2
        },
        {
          "eng_category": "ACE’s FAMILY DINNER SPECIALS",
          "ch_category": "ACE’s FAMILY DINNER SPECIALS",
          "section_id": 2
        },
        {
          "eng_category": "PARTY TRAYS",
          "ch_category": "PARTY TRAYS",
          "section_id": 2
        }
      ]);
    });
};
