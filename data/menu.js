/* Datos del menú (ES/EN). "r":1 = aparece en «Te recomendamos». Precios en COP. */
const MENU = {
 "cats": [
  {
   "id": "entradas",
   "icon": "🥖",
   "es": {
    "t": "Entradas",
    "s": "Antipasti"
   },
   "en": {
    "t": "Starters",
    "s": "Antipasti"
   },
   "items": [
    {
     "p": 25000,
     "es": {
      "n": "Bruschetas Pomodoro",
      "d": "Pan tostado con tomate fresco y queso parmesano"
     },
     "en": {
      "n": "Pomodoro Bruschetta",
      "d": "Toasted bread with fresh tomato and Parmesan cheese"
     }
    },
    {
     "p": 38000,
     "es": {
      "n": "Canastas de Plátano Verde con Camarones",
      "d": "Rellenas de camarones, fundidas en queso mozzarella"
     },
     "en": {
      "n": "Green Plantain Baskets with Shrimp",
      "d": "Filled with shrimp and melted mozzarella"
     },
     "r": 1
    },
    {
     "p": 32000,
     "es": {
      "n": "Canastas de Plátano Verde con Chorizo",
      "d": "Rellenas de chorizo con ahogado, fundidas en queso mozzarella"
     },
     "en": {
      "n": "Green Plantain Baskets with Chorizo",
      "d": "Filled with chorizo in tomato-onion sauce and melted mozzarella"
     }
    }
   ]
  },
  {
   "id": "pastas",
   "icon": "🍝",
   "es": {
    "t": "Pastas",
    "s": "Paste"
   },
   "en": {
    "t": "Pasta",
    "s": "Paste"
   },
   "items": [
    {
     "p": 43000,
     "es": {
      "n": "Pastas especial de la casa",
      "d": "Salsa blanca de la casa, pollo, tocineta, champiñones, queso parmesano"
     },
     "en": {
      "n": "House Special Pasta",
      "d": "House white sauce, chicken, bacon, mushrooms and Parmesan"
     }
    },
    {
     "p": 47000,
     "es": {
      "n": "Pastas de Langostinos",
      "d": "Salsa blanca del chef, langostinos, queso parmesano"
     },
     "en": {
      "n": "King Prawn Pasta",
      "d": "Chef's white sauce, king prawns and Parmesan"
     },
     "r": 1
    },
    {
     "p": 39000,
     "es": {
      "n": "Pastas Pesto",
      "d": "Salsa pesto, pollo, tocineta y queso parmesano"
     },
     "en": {
      "n": "Pesto Pasta",
      "d": "Pesto sauce, chicken, bacon and Parmesan"
     }
    },
    {
     "p": 37000,
     "es": {
      "n": "La Carbonara",
      "d": "Tocineta, ajo y bechamel de la casa"
     },
     "en": {
      "n": "Carbonara",
      "d": "Bacon, garlic and house béchamel"
     }
    },
    {
     "p": 35000,
     "es": {
      "n": "Vegetariana",
      "d": "Pimentón, cebolla, tomate y bechamel de la casa"
     },
     "en": {
      "n": "Vegetarian",
      "d": "Bell pepper, onion, tomato and house béchamel"
     }
    },
    {
     "p": 35000,
     "es": {
      "n": "Primavera",
      "d": "Tomate, queso, aceite de oliva, albahaca y vinagreta de limón"
     },
     "en": {
      "n": "Primavera",
      "d": "Tomato, cheese, olive oil, basil and lemon vinaigrette"
     }
    },
    {
     "p": 37000,
     "es": {
      "n": "Pollo",
      "d": "Salsa napolitana, mozzarella y pollo"
     },
     "en": {
      "n": "Chicken",
      "d": "Napolitana sauce, mozzarella and chicken"
     }
    },
    {
     "p": 38000,
     "es": {
      "n": "Boloñesa",
      "d": "Carne molida, salsa napolitana de la casa y parmesano"
     },
     "en": {
      "n": "Bolognese",
      "d": "Ground beef, house napolitana sauce and Parmesan"
     }
    }
   ]
  },
  {
   "id": "lasanas",
   "icon": "🥘",
   "es": {
    "t": "Lasañas",
    "s": "Lasagne"
   },
   "en": {
    "t": "Lasagna",
    "s": "Lasagne"
   },
   "items": [
    {
     "p": 38000,
     "es": {
      "n": "Lasaña",
      "d": "Mixta"
     },
     "en": {
      "n": "Lasagna",
      "d": "Mixed"
     }
    },
    {
     "p": 35000,
     "es": {
      "n": "Lasaña",
      "d": "Pollo"
     },
     "en": {
      "n": "Lasagna",
      "d": "Chicken"
     }
    },
    {
     "p": 35000,
     "es": {
      "n": "Lasaña",
      "d": "Boloñesa"
     },
     "en": {
      "n": "Lasagna",
      "d": "Bolognese"
     }
    }
   ]
  },
  {
   "id": "pizzas",
   "icon": "🍕",
   "es": {
    "t": "Pizzas",
    "s": "Pizze"
   },
   "en": {
    "t": "Pizzas",
    "s": "Pizze"
   },
   "items": [
    {
     "p": 38000,
     "es": {
      "n": "4 Quesos",
      "d": "Deliciosa Pizza con Mozzarella, pecorino, queso azul y parmesano"
     },
     "en": {
      "n": "4 Cheese",
      "d": "Delicious pizza with mozzarella, pecorino, blue cheese and Parmesan"
     },
     "r": 1
    },
    {
     "p": 39000,
     "es": {
      "n": "De la Casa",
      "d": "Pimentón, cebolla blanca, champiñones, maíz, pollo, jamón y tocineta"
     },
     "en": {
      "n": "House Special",
      "d": "Bell pepper, white onion, mushrooms, corn, chicken, ham and bacon"
     }
    },
    {
     "p": 38000,
     "es": {
      "n": "Pollo Champiñones",
      "d": "Salsa napolitana, mozzarella y pollo"
     },
     "en": {
      "n": "Chicken & Mushroom",
      "d": "Napolitana sauce, mozzarella and chicken"
     }
    },
    {
     "p": 38000,
     "es": {
      "n": "Mexicana",
      "d": "Salsa napolitana, mozzarella, nachos, carne molida, maíz, chorizo, aguacate y picante"
     },
     "en": {
      "n": "Mexican",
      "d": "Napolitana sauce, mozzarella, nachos, ground beef, corn, chorizo, avocado and hot sauce"
     }
    },
    {
     "p": 38000,
     "es": {
      "n": "Cebolla Caramelizada con Tocineta",
      "d": "Salsa napolitana, mozzarella y cebolla caramelizada"
     },
     "en": {
      "n": "Caramelized Onion & Bacon",
      "d": "Napolitana sauce, mozzarella and caramelized onion"
     }
    },
    {
     "p": 38000,
     "es": {
      "n": "Carbonara",
      "d": "Salsa carbonara, mozzarella y tocineta"
     },
     "en": {
      "n": "Carbonara",
      "d": "Carbonara sauce, mozzarella and bacon"
     }
    },
    {
     "p": 33000,
     "es": {
      "n": "Jamón y Queso",
      "d": "Salsa napolitana, mozzarella y jamón"
     },
     "en": {
      "n": "Ham & Cheese",
      "d": "Napolitana sauce, mozzarella and ham"
     }
    },
    {
     "p": 33000,
     "es": {
      "n": "Pepperoni",
      "d": "Salsa napolitana, mozzarella y pepperoni"
     },
     "en": {
      "n": "Pepperoni",
      "d": "Napolitana sauce, mozzarella and pepperoni"
     }
    },
    {
     "p": 33000,
     "es": {
      "n": "Salami",
      "d": "Salsa napolitana, mozzarella y salami"
     },
     "en": {
      "n": "Salami",
      "d": "Napolitana sauce, mozzarella and salami"
     }
    },
    {
     "p": 33000,
     "es": {
      "n": "Hawaiana",
      "d": "Jamón, queso, salsa napolitana de la casa y piña"
     },
     "en": {
      "n": "Hawaiian",
      "d": "Ham, cheese, house napolitana sauce and pineapple"
     }
    },
    {
     "p": 33000,
     "es": {
      "n": "La Sarita",
      "d": "Arequipe con queso"
     },
     "en": {
      "n": "La Sarita",
      "d": "Arequipe (milk caramel) with cheese"
     }
    }
   ]
  },
  {
   "id": "caribena",
   "icon": "🦐",
   "es": {
    "t": "Comida caribeña",
    "s": "Sabores del Caribe"
   },
   "en": {
    "t": "Caribbean food",
    "s": "Flavors of the Caribbean"
   },
   "items": [
    {
     "p": 60000,
     "es": {
      "n": "Arroz de mariscos",
      "d": "Preparado con camarón, pescado, anillo de calamar, almejas, pulpo, palmito, caracol y vegetales"
     },
     "en": {
      "n": "Seafood Rice",
      "d": "Made with shrimp, fish, calamari rings, clams, octopus, hearts of palm, conch and vegetables"
     }
    },
    {
     "p": 55000,
     "es": {
      "n": "Arroz con camarón",
      "d": "Delicioso arroz preparado con camarones frescos y vegetales"
     },
     "en": {
      "n": "Shrimp Rice",
      "d": "Delicious rice made with fresh shrimp and vegetables"
     }
    },
    {
     "p": 50000,
     "es": {
      "n": "Sierra frita (600 gr)",
      "d": "Acompañada con arroz de coco, patacones y ensalada fresca"
     },
     "en": {
      "n": "Fried Kingfish (600 g)",
      "d": "Served with coconut rice, fried green plantain (patacones) and fresh salad"
     }
    },
    {
     "p": 55000,
     "es": {
      "n": "Camarones al ajillo",
      "d": "Camarones salteados en salsa de ajo, acompañados de arroz de coco, ensalada, a elección de papas fritas o patacones"
     },
     "en": {
      "n": "Garlic Shrimp",
      "d": "Shrimp sautéed in garlic sauce, served with coconut rice, salad, and your choice of french fries or patacones"
     }
    },
    {
     "p": 60000,
     "es": {
      "n": "Cazuela de mariscos",
      "d": "Tradicional Cazuela de mariscos preparada con una cremosa base de coco, camarón, pescado, anillo de calamar, almejas, pulpo, palmito, caracol y vegetales. Acompañados de arroz, patacones o papas fritas a elección."
     },
     "en": {
      "n": "Seafood Casserole",
      "d": "Traditional casserole with a creamy coconut base, shrimp, fish, calamari rings, clams, octopus, hearts of palm, conch and vegetables. Served with rice, patacones or french fries of your choice."
     },
     "r": 1
    }
   ]
  },
  {
   "id": "asados",
   "icon": "🍖",
   "es": {
    "t": "Asados",
    "s": "Alla griglia"
   },
   "en": {
    "t": "Grill",
    "s": "Alla griglia"
   },
   "items": [
    {
     "p": 40000,
     "es": {
      "n": "Asado de Chuleta",
      "d": "Jugosa chuleta asada, acompañada de papa, ensalada, papas fritas o patacones a elección"
     },
     "en": {
      "n": "Grilled Pork Chop",
      "d": "Juicy grilled pork chop, served with potato, salad, and your choice of french fries or patacones"
     }
    },
    {
     "p": 32000,
     "es": {
      "n": "Pechuga de pollo a la plancha",
      "d": "Pechuga de pollo acompañada de papa, ensalada y a elección papas fritas o patacones"
     },
     "en": {
      "n": "Grilled Chicken Breast",
      "d": "Chicken breast served with potato, salad and your choice of french fries or patacones"
     }
    }
   ]
  },
  {
   "id": "postres",
   "icon": "🍰",
   "es": {
    "t": "Postres",
    "s": "Dolci"
   },
   "en": {
    "t": "Desserts",
    "s": "Dolci"
   },
   "items": [
    {
     "p": 15000,
     "es": {
      "n": "Tiramisú",
      "d": "Postre tradicional italiano con café y crema"
     },
     "en": {
      "n": "Tiramisu",
      "d": "Traditional Italian dessert with coffee and cream"
     },
     "r": 1
    }
   ]
  },
  {
   "id": "bebidas",
   "icon": "🥤",
   "es": {
    "t": "Bebidas",
    "s": "Bevande"
   },
   "en": {
    "t": "Drinks",
    "s": "Bevande"
   },
   "items": [
    {
     "p": 7000,
     "es": {
      "n": "Agua Mineral",
      "d": ""
     },
     "en": {
      "n": "Mineral Water",
      "d": ""
     }
    },
    {
     "p": 7000,
     "es": {
      "n": "Coca-Cola",
      "d": ""
     },
     "en": {
      "n": "Coca-Cola",
      "d": ""
     }
    },
    {
     "p": 15000,
     "es": {
      "n": "Soda Saborizada de Frutos Rojos",
      "d": ""
     },
     "en": {
      "n": "Red Berries Flavored Soda",
      "d": ""
     }
    },
    {
     "p": 15000,
     "es": {
      "n": "Soda Saborizada de Frutos Amarillos",
      "d": ""
     },
     "en": {
      "n": "Yellow Fruits Flavored Soda",
      "d": ""
     }
    },
    {
     "p": 11000,
     "es": {
      "n": "Jugo de Mora",
      "d": ""
     },
     "en": {
      "n": "Blackberry Juice",
      "d": ""
     }
    },
    {
     "p": 11000,
     "es": {
      "n": "Jugo de Maracuyá",
      "d": ""
     },
     "en": {
      "n": "Passion Fruit Juice",
      "d": ""
     }
    },
    {
     "p": 12000,
     "es": {
      "n": "Limonada de Coco",
      "d": ""
     },
     "en": {
      "n": "Coconut Lemonade",
      "d": ""
     }
    },
    {
     "p": 12000,
     "es": {
      "n": "Limonada Cerezada",
      "d": ""
     },
     "en": {
      "n": "Cherry Lemonade",
      "d": ""
     }
    },
    {
     "p": 10000,
     "es": {
      "n": "Limonada Natural",
      "d": ""
     },
     "en": {
      "n": "Natural Lemonade",
      "d": ""
     }
    },
    {
     "p": 12000,
     "es": {
      "n": "Cervezas",
      "d": ""
     },
     "en": {
      "n": "Beers",
      "d": ""
     }
    },
    {
     "p": 12000,
     "es": {
      "n": "Stella Artois",
      "d": ""
     },
     "en": {
      "n": "Stella Artois",
      "d": ""
     }
    },
    {
     "p": 12000,
     "es": {
      "n": "Corona",
      "d": ""
     },
     "en": {
      "n": "Corona",
      "d": ""
     }
    }
   ]
  },
  {
   "id": "cocteles",
   "icon": "🍹",
   "es": {
    "t": "Cócteles",
    "s": "Cocktail"
   },
   "en": {
    "t": "Cocktails",
    "s": "Cocktail"
   },
   "items": [
    {
     "p": 25000,
     "es": {
      "n": "Margaritas",
      "d": "Tequila, limón y triple sec"
     },
     "en": {
      "n": "Margaritas",
      "d": "Tequila, lime and triple sec"
     }
    },
    {
     "p": 28000,
     "es": {
      "n": "Piña Colada",
      "d": "Piña natural, Coco y ron"
     },
     "en": {
      "n": "Piña Colada",
      "d": "Fresh pineapple, coconut and rum"
     }
    }
   ]
  }
 ]
};
