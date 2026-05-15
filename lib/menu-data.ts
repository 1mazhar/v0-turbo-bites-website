export const WHATSAPP_NUMBER = "923101777790"

export type MenuItem = {
  id: number
  name: string
  description?: string
  price: number
  emoji: string
}

export type SizedMenuItem = {
  id: number
  name: string
  description?: string
  prices: { [key: string]: number }
  emoji: string
}

export type MenuCategory = {
  id: string
  name: string
  type: "simple" | "sized" | "deal"
  items: MenuItem[] | SizedMenuItem[]
  extraType?: "pizza" | "wrap" | "loaded-fries" | "none"
  sizeLabels?: { [key: string]: string }
}

// Pizza extras pricing by size
export const PIZZA_CHICKEN_TOPPING = { S: 99, M: 150, L: 210, XL: 210 }
export const PIZZA_CHEESE_TOPPING = { S: 130, M: 150, L: 210, XL: 210 }

// Wrap extras
export const WRAP_CHEESE_SLICE = 129

// Loaded Fries extras
export const LOADED_FRIES_EXTRAS = [
  { name: "Cheese", price: 60 },
  { name: "Jalapeno", price: 60 },
  { name: "Pickled Cucumber", price: 60 },
  { name: "Sweet Corn", price: 60 },
  { name: "Black Olive", price: 60 },
]

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "fried-deals",
    name: "Fried Deals",
    type: "deal",
    extraType: "none",
    items: [
      { id: 1, name: "Deal 1", description: "1 Zinger, 1 Fries, 1 Nr Drink", price: 619, emoji: "🍔" },
      { id: 2, name: "Deal 2", description: "4 Zinger, 2 Fries, 4 Nr Drink", price: 2199, emoji: "🍔" },
      { id: 3, name: "Deal 3", description: "1 Petty Burger, 1 Fries, 1 Nr Drink", price: 399, emoji: "🍔" },
      { id: 4, name: "Deal 4", description: "4 Petty Burgers, 2 Fries, 4 Nr Drink", price: 1569, emoji: "🍔" },
      { id: 5, name: "Deal 5", description: "2 Zinger, 12 Wings, 3 Nr Drink", price: 1649, emoji: "🍗" },
      { id: 6, name: "Deal 6", description: "4 Petty Burgers, 20 Nuggets, 1.5 Ltr Drink", price: 2379, emoji: "🍔" },
    ] as MenuItem[],
  },
  {
    id: "paratha-shawarma",
    name: "Paratha & Shawarma",
    type: "simple",
    extraType: "none",
    items: [
      { id: 7, name: "Achari Paratha", price: 399, emoji: "🫓" },
      { id: 8, name: "Turbo Sp. Malai Boti Roll", price: 529, emoji: "🌯" },
      { id: 9, name: "Zinger Paratha", price: 469, emoji: "🫓" },
      { id: 10, name: "Chk Shawarma", price: 289, emoji: "🌯" },
      { id: 11, name: "Boti Shawarma", price: 349, emoji: "🌯" },
      { id: 12, name: "Zinger Shawarma", price: 469, emoji: "🌯" },
    ] as MenuItem[],
  },
  {
    id: "loaded-fries",
    name: "Loaded Fries",
    type: "sized",
    extraType: "loaded-fries",
    sizeLabels: { Small: "Small", Large: "Large" },
    items: [
      { id: 13, name: "Sp. Chicken/x2 Fries", prices: { Small: 349, Large: 439 }, emoji: "🍟" },
      { id: 14, name: "Sp. Chicken/x2 Cheese Fries", prices: { Small: 399, Large: 529 }, emoji: "🍟" },
      { id: 15, name: "Mayo Garlic Fries", prices: { Small: 249, Large: 329 }, emoji: "🍟" },
      { id: 16, name: "Plain Fries", prices: { Small: 179, Large: 249 }, emoji: "🍟" },
      { id: 17, name: "Masala Fries", prices: { Small: 179, Large: 249 }, emoji: "🍟" },
      { id: 18, name: "Turbo Bite Special Fries", prices: { Small: 549, Large: 799 }, emoji: "🍟" },
      { id: 19, name: "Zinger Fries", prices: { Single: 589 }, emoji: "🍟" },
    ] as SizedMenuItem[],
  },
  {
    id: "injected-broast",
    name: "Injected Broast",
    type: "simple",
    extraType: "none",
    items: [
      { id: 20, name: "Half 4 Pieces", description: "With 1 dip sauce, special sauce with fries", price: 1349, emoji: "🍗" },
      { id: 21, name: "Full 8 Pieces", description: "With 2 dip sauce, 2 special sauce with fries", price: 2299, emoji: "🍗" },
    ] as MenuItem[],
  },
  {
    id: "wraps",
    name: "Wraps",
    type: "simple",
    extraType: "wrap",
    items: [
      { id: 22, name: "Tortilla Wraps", price: 599, emoji: "🌯" },
    ] as MenuItem[],
  },
  {
    id: "saucy-burger",
    name: "Saucy Burger",
    type: "simple",
    extraType: "none",
    items: [
      { id: 23, name: "Zinger Burger", price: 469, emoji: "🍔" },
      { id: 24, name: "Big Ben Burger", price: 699, emoji: "🍔" },
      { id: 25, name: "Zinger Cheese Burger", price: 529, emoji: "🍔" },
      { id: 26, name: "Petty Burger", price: 289, emoji: "🍔" },
      { id: 27, name: "Petty Cheese Burger", price: 349, emoji: "🍔" },
      { id: 28, name: "Chapli Kabab Burger", price: 349, emoji: "🍔" },
      { id: 29, name: "Chapli Cheese Burger", price: 399, emoji: "🍔" },
      { id: 30, name: "Double Maza Burger", price: 469, emoji: "🍔" },
      { id: 31, name: "Super Zinger Burger", price: 549, emoji: "🍔" },
    ] as MenuItem[],
  },
  {
    id: "wings-nuggets",
    name: "Wings & Nuggets",
    type: "simple",
    extraType: "none",
    items: [
      { id: 32, name: "Hot Wings (5 pcs)", price: 349, emoji: "🍗" },
      { id: 33, name: "Hot Wings (10 pcs)", price: 649, emoji: "🍗" },
      { id: 34, name: "Nuggets (5 pcs)", price: 349, emoji: "🍗" },
      { id: 35, name: "Nuggets (10 pcs)", price: 649, emoji: "🍗" },
    ] as MenuItem[],
  },
  {
    id: "square-treat-pizza",
    name: "Square Treat Pizza",
    type: "sized",
    extraType: "pizza",
    sizeLabels: { M: "Medium", L: "Large" },
    items: [
      { id: 36, name: "Square Treat Pizza", prices: { M: 1499, L: 2199 }, emoji: "🍕" },
    ] as SizedMenuItem[],
  },
  {
    id: "crown-crust-pizza",
    name: "Crown Crust Pizza",
    type: "sized",
    extraType: "pizza",
    sizeLabels: { M: "Medium", L: "Large", XL: "X-Large" },
    items: [
      { id: 37, name: "Crown Crust Pizza", prices: { M: 1449, L: 2049, XL: 2549 }, emoji: "🍕" },
    ] as SizedMenuItem[],
  },
  {
    id: "stuff-crust",
    name: "Stuff Crust",
    type: "sized",
    extraType: "pizza",
    sizeLabels: { M: "Medium", L: "Large", XL: "X-Large" },
    items: [
      { id: 38, name: "Chicken Cheese Pizza", prices: { M: 1799, L: 2349, XL: 3049 }, emoji: "🍕" },
      { id: 39, name: "Stuffed Pizza", prices: { M: 1799, L: 2349, XL: 3049 }, emoji: "🍕" },
      { id: 40, name: "Kabab Stuffed Pizza", prices: { M: 1799, L: 2349, XL: 3049 }, emoji: "🍕" },
    ] as SizedMenuItem[],
  },
  {
    id: "oven-baked-pasta",
    name: "Oven Baked Pasta",
    type: "sized",
    extraType: "none",
    sizeLabels: { Half: "Half", Full: "Full" },
    items: [
      { id: 41, name: "Kababish Creamy & BBQ Pasta", description: "Oven baked elbow macaroni pasta", prices: { Half: 579, Full: 810 }, emoji: "🍝" },
      { id: 42, name: "Turbo Bites Special Crunchy Pasta", description: "Elbow macaroni pasta", prices: { Half: 649, Full: 949 }, emoji: "🍝" },
    ] as SizedMenuItem[],
  },
  {
    id: "oven-baked-sandwich",
    name: "Oven Baked Sandwich",
    type: "simple",
    extraType: "none",
    items: [
      { id: 43, name: "Kameera Sandwich", price: 869, emoji: "🥪" },
      { id: 44, name: "Turbo Bites Special Crunchy Sandwich", price: 989, emoji: "🥪" },
    ] as MenuItem[],
  },
  {
    id: "turbo-bite-special-pizza",
    name: "Turbo Bite Special Pizza",
    type: "sized",
    extraType: "pizza",
    sizeLabels: { M: "Medium", L: "Large", XL: "X-Large" },
    items: [
      { id: 45, name: "Turbo Bite Special Malai Boti Pizza", description: "White Sauce, Malai Boti Chicken, Onions, Special Cheese, Olives", prices: { M: 1500, L: 2000, XL: 2669 }, emoji: "🍕" },
      { id: 46, name: "Turbo Bite Special Steak Pizza", description: "Cheese, Chicken, Crunches, Veggi & Sauces", prices: { M: 1500, L: 2000, XL: 2669 }, emoji: "🍕" },
    ] as SizedMenuItem[],
  },
  {
    id: "platter",
    name: "Platter",
    type: "simple",
    extraType: "none",
    items: [
      { id: 47, name: "Chicken Platter", description: "With 3 bread & 3 special sauce", price: 529, emoji: "🍗" },
    ] as MenuItem[],
  },
  {
    id: "traditional-flavours-pizza",
    name: "Traditional Flavours Pizza",
    type: "sized",
    extraType: "pizza",
    sizeLabels: { S: "Small", M: "Medium", L: "Large", XL: "X-Large" },
    items: [
      { id: 48, name: "Chicken Tikka", description: "Red Sauce, Tikka Chicken, Onion, Cheese, Tomato Cubes", prices: { S: 699, M: 1299, L: 1749, XL: 2099 }, emoji: "🍕" },
      { id: 49, name: "Chicken Fajita", description: "Red Sauce, Fajita Chicken, Onions, Capsicums, Cheese, Green Chilli", prices: { S: 699, M: 1299, L: 1749, XL: 2099 }, emoji: "🍕" },
      { id: 50, name: "Chicken Supreme", description: "Red Sauce, Tikka Fajita, Onions, Capsicums, Cheese, Mushrooms, Olives", prices: { S: 699, M: 1299, L: 1749, XL: 2099 }, emoji: "🍕" },
      { id: 51, name: "Cheesy Cheese Lover", description: "Red Sauce & Combo Of Cheese Blend", prices: { S: 699, M: 1299, L: 1749, XL: 2099 }, emoji: "🧀" },
    ] as SizedMenuItem[],
  },
  {
    id: "signature-flavours-pizza",
    name: "Signature Flavours Pizza",
    type: "sized",
    extraType: "pizza",
    sizeLabels: { S: "Small", M: "Medium", L: "Large", XL: "X-Large" },
    items: [
      { id: 52, name: "Secret White Sauce Pizza", description: "3 Flavour Chicken, Onions, Capsicums, Cheese, Mushroom, Olives, Kabab Chunks, Sweet Corn", prices: { S: 869, M: 1449, L: 1849, XL: 2449 }, emoji: "🍕" },
      { id: 53, name: "Super Supreme Pizza", description: "Garlic Sauce, Fajita Chicken, Capsicums, Cheese, Mushroom, Olives, Green Chilli, Chunks, Kabab Rings", prices: { S: 869, M: 1449, L: 1849, XL: 2449 }, emoji: "🍕" },
      { id: 54, name: "Bihari Kabab Pizza", description: "Secret White Sauce, Onion, Cheese, Kabab Sticks, Tikka Chicken", prices: { S: 869, M: 1449, L: 1849, XL: 2449 }, emoji: "🍕" },
      { id: 55, name: "Jalapeno Pizza", description: "Jalapeno Sauce, 2 Flavour Chicken, Onion, Cheese, Capsicums, Jalapeno", prices: { S: 869, M: 1449, L: 1849, XL: 2449 }, emoji: "🍕" },
      { id: 56, name: "Calzone Special", description: "Folded Bread Filled With Sauces, Chicken, Cheese, Iceberg, Tomatos & Cucumber", prices: { M: 1689, L: 2149 }, emoji: "🍕" },
    ] as SizedMenuItem[],
  },
  {
    id: "appetizer-oven-baked-wings",
    name: "Appetizer - Oven Baked Wings",
    type: "sized",
    extraType: "none",
    sizeLabels: { "8 Pcs": "8 Pcs", "12 Pcs": "12 Pcs" },
    items: [
      { id: 57, name: "Turbo Bite Special Secret Marinated Wings", description: "Served With Dip Sauce", prices: { "8 Pcs": 489, "12 Pcs": 719 }, emoji: "🍗" },
      { id: 58, name: "Turbo Bite Special Secret Marinated BBQ Wings", description: "Served With Dip Sauce", prices: { "8 Pcs": 489, "12 Pcs": 719 }, emoji: "🍗" },
    ] as SizedMenuItem[],
  },
  {
    id: "oven-bake-spin-roll",
    name: "Oven Bake Spin Roll",
    type: "sized",
    extraType: "none",
    sizeLabels: { "4 Pcs": "4 Pcs", "8 Pcs": "8 Pcs" },
    items: [
      { id: 59, name: "Mayo Garlic Roll", description: "Corn, Chicken, Jalapeno, Onion & Sauce Mixture, Served With Dip", prices: { "4 Pcs": 559, "8 Pcs": 849 }, emoji: "🌀" },
      { id: 60, name: "Turbo Bite Special Roll", description: "Corn, Chicken, Jalapeno, Onion & Sauce, Kabab Chunks, Served With Dip", prices: { "4 Pcs": 699, "8 Pcs": 989 }, emoji: "🌀" },
      { id: 61, name: "Oven Baked Special Platter", description: "6 Oven Baked Wings, 4 Roll Fries, Drink & Dip Sauce", prices: { Single: 1099 }, emoji: "🍽️" },
    ] as SizedMenuItem[],
  },
  {
    id: "deals-with-you",
    name: "Deals With You",
    type: "deal",
    extraType: "none",
    items: [
      { id: 62, name: "Smart Deal", description: "2 Small Pizzas, 1 Small Pasta, 1 Drink 500ml", price: 1699, emoji: "🎉" },
      { id: 63, name: "Super Deal", description: "2 Medium Pizzas, 1 Drink 1.5Ltr", price: 2299, emoji: "🎉" },
      { id: 64, name: "Double up Deal", description: "2 Large Pizzas, 1 Drink 1.5Ltr", price: 3249, emoji: "🎉" },
      { id: 65, name: "Chaska Deal", description: "1 Large Pasta, 6 Pcs Wings, 1 Drink 500ml", price: 1299, emoji: "🎉" },
      { id: 66, name: "Mega Deal", description: "3 Large Pizzas, 2 Drinks 1.5Ltr", price: 4299, emoji: "🎉" },
      { id: 67, name: "Birthday Deal", description: "3 Large Pizzas, 2 Small Pastas, 12 Oven Baked Wings, 3 Drinks 1.5Ltr", price: 6399, emoji: "🎂" },
    ] as MenuItem[],
  },
  {
    id: "drinks",
    name: "Drinks",
    type: "sized",
    extraType: "none",
    sizeLabels: { Regular: "Regular", "500ml": "500ml", "1Ltr": "1 Ltr", "1.5Ltr": "1.5 Ltr" },
    items: [
      { id: 68, name: "Soft Drink", prices: { Regular: 99, "500ml": 140, "1Ltr": 190, "1.5Ltr": 250 }, emoji: "🥤" },
    ] as SizedMenuItem[],
  },
  {
    id: "mineral-water",
    name: "Mineral Water",
    type: "sized",
    extraType: "none",
    sizeLabels: { Small: "Small", Large: "Large" },
    items: [
      { id: 69, name: "Mineral Water", prices: { Small: 70, Large: 140 }, emoji: "💧" },
    ] as SizedMenuItem[],
  },
  {
    id: "sauces",
    name: "Sauces",
    type: "simple",
    extraType: "none",
    items: [
      { id: 70, name: "Dip Sauce", price: 80, emoji: "🥫" },
      { id: 71, name: "Signature Sauce", price: 80, emoji: "🥫" },
      { id: 72, name: "Super Sauce", price: 80, emoji: "🥫" },
      { id: 73, name: "Chipotle Sauce", price: 80, emoji: "🥫" },
    ] as MenuItem[],
  },
]
