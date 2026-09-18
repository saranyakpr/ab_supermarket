import { categories } from "./categories";

// Mock product catalogue. Shape mirrors what a real product API would likely
// return, so swapping this module for a fetch() call later is a drop-in.
// Raw seed rows: [name, brand, unit, price, originalPrice?]
const seed = {
  "fruits-vegetables": [
    ["Fresh Royal Gala Apples", "Farm Fresh", "1 kg", 189, 220],
    ["Robusta Bananas", "Farm Fresh", "6 pcs", 49, null],
    ["Alphonso Mangoes", "Farm Fresh", "1 kg", 399, 480],
    ["Farm Fresh Tomatoes", "Farm Fresh", "1 kg", 39, 48],
    ["Baby Potatoes", "Farm Fresh", "1 kg", 45, null],
    ["Organic Spinach Bunch", "Nature's Basket", "250 g", 29, 35],
    ["Green Capsicum", "Farm Fresh", "500 g", 35, null],
    ["Seedless Green Grapes", "Farm Fresh", "500 g", 79, 95],
  ],
  "groceries-staples": [
    ["Tata Salt Iodized", "Tata", "1 kg", 28, null],
    ["Sugar Bulk Pack", "Madhur", "5 kg", 245, 270],
    ["Toor Dal (Arhar)", "Fortune", "1 kg", 165, 185],
    ["Chana Dal", "Fortune", "1 kg", 118, 130],
    ["Moong Dal Yellow", "Tata Sampann", "1 kg", 142, null],
    ["Refined Sunflower Oil", "Fortune", "1 L", 149, 170],
    ["Groundnut Oil", "Fortune", "1 L", 210, 230],
  ],
  "rice-flour-grains": [
    ["India Gate Basmati Rice", "India Gate", "5 kg", 549, 620],
    ["Whole Wheat Atta", "Aashirvaad", "5 kg", 249, 270],
    ["Sona Masoori Rice", "Local Harvest", "5 kg", 399, null],
    ["Multigrain Atta", "Aashirvaad", "5 kg", 289, 320],
    ["Poha (Flattened Rice)", "Local Harvest", "1 kg", 65, null],
    ["Semolina (Sooji)", "Local Harvest", "1 kg", 55, 62],
  ],
  "dairy-eggs": [
    ["Toned Milk", "Amul", "1 L", 58, null],
    ["Farm Fresh Eggs", "Farm Fresh", "12 pcs", 84, 96],
    ["Butter Salted", "Amul", "500 g", 265, 285],
    ["Processed Cheese Slices", "Amul", "200 g", 125, 140],
    ["Fresh Curd", "Amul", "400 g", 45, null],
    ["Paneer Fresh", "Amul", "200 g", 95, 105],
  ],
  bakery: [
    ["Whole Wheat Bread", "Britannia", "400 g", 45, 50],
    ["Butter Croissant", "Baker's Hut", "4 pcs", 129, 150],
    ["Milk Rusk", "Britannia", "300 g", 55, null],
    ["Chocolate Muffins", "Baker's Hut", "4 pcs", 149, 170],
    ["Multigrain Bread", "Harvest Gold", "400 g", 60, 65],
  ],
  beverages: [
    ["Assam Tea Leaves", "Tata Tea", "1 kg", 420, 460],
    ["Instant Coffee", "Nescafe", "200 g", 385, 420],
    ["Orange Juice", "Real", "1 L", 110, 125],
    ["Packaged Drinking Water", "Bisleri", "1 L x 12", 144, 160],
    ["Cola Soft Drink", "Coca-Cola", "1.25 L", 65, 75],
    ["Mixed Fruit Nectar", "Tropicana", "1 L", 115, null],
  ],
  "snacks-biscuits": [
    ["Classic Salted Chips", "Lay's", "150 g", 50, null],
    ["Marie Gold Biscuits", "Britannia", "250 g", 40, 45],
    ["Cream Sandwich Biscuits", "Oreo", "300 g", 90, 100],
    ["Roasted Namkeen Mix", "Haldiram's", "400 g", 120, 135],
    ["Cheese Crackers", "Sunfeast", "200 g", 60, null],
    ["Peanut Chikki", "Local Harvest", "250 g", 70, 80],
  ],
  "chocolates-sweets": [
    ["Milk Chocolate Bar", "Cadbury Dairy Milk", "150 g", 150, 165],
    ["Assorted Toffees Pack", "Alpenliebe", "500 g", 145, null],
    ["Kaju Katli", "Haldiram's", "400 g", 399, 450],
    ["Hazelnut Chocolate Spread", "Nutella", "350 g", 399, 430],
    ["Gems Candy Coated Chocolate", "Cadbury", "150 g", 80, 90],
  ],
  "personal-care": [
    ["Aloe Vera Face Wash", "Himalaya", "150 ml", 145, 160],
    ["Herbal Shampoo", "Dove", "340 ml", 249, 275],
    ["Moisturising Body Lotion", "Nivea", "400 ml", 299, 330],
    ["Toothpaste Complete Care", "Colgate", "200 g", 105, 115],
    ["Roll-On Deodorant", "Nivea", "50 ml", 165, null],
    ["Shaving Gel", "Gillette", "195 g", 210, 230],
  ],
  "household-cleaning": [
    ["Dishwash Liquid Gel", "Vim", "750 ml", 165, 185],
    ["Floor Cleaner Lavender", "Lizol", "975 ml", 199, 220],
    ["Detergent Powder", "Surf Excel", "2 kg", 285, 310],
    ["Toilet Cleaner", "Harpic", "1 L", 145, 160],
    ["Multi-Purpose Cleaning Wipes", "Scotch-Brite", "30 pcs", 99, null],
    ["Fabric Softener", "Comfort", "860 ml", 210, 230],
  ],
  "baby-care": [
    ["Baby Diapers Pants (M)", "Pampers", "56 pcs", 699, 780],
    ["Baby Powder", "Johnson's", "400 g", 210, 230],
    ["Gentle Baby Wipes", "Himalaya", "72 pcs", 199, null],
    ["Baby Lotion", "Johnson's", "200 ml", 175, 190],
    ["Infant Formula Milk Powder", "Nestle", "400 g", 520, 560],
  ],
  "frozen-foods": [
    ["Frozen Green Peas", "Safal", "500 g", 65, null],
    ["Veg Spring Rolls", "McCain", "400 g", 175, 195],
    ["Chicken Nuggets", "Venky's", "400 g", 220, 240],
    ["French Fries", "McCain", "420 g", 145, 160],
    ["Mixed Vegetables Frozen", "Safal", "500 g", 70, 80],
  ],
  "meat-seafood": [
    ["Chicken Breast Boneless", "Licious", "500 g", 249, 280],
    ["Fresh Prawns Medium", "Licious", "500 g", 399, 450],
    ["Mutton Curry Cut", "Licious", "500 g", 549, 600],
    ["Pomfret Fish Whole", "Licious", "500 g", 449, null],
    ["Chicken Curry Cut", "Licious", "1 kg", 329, 360],
  ],
  "cooking-essentials": [
    ["Cooking Ghee", "Amul", "1 L", 599, 650],
    ["White Vinegar", "Tops", "500 ml", 45, null],
    ["Baking Soda", "Weikfield", "100 g", 35, 40],
    ["Corn Starch", "Weikfield", "200 g", 55, null],
    ["Soy Sauce", "Ching's", "200 g", 85, 95],
  ],
  "spices-masalas": [
    ["Turmeric Powder", "Everest", "200 g", 65, 72],
    ["Garam Masala", "MDH", "100 g", 85, 95],
    ["Red Chilli Powder", "Everest", "200 g", 75, null],
    ["Coriander Powder", "MDH", "200 g", 60, 68],
    ["Biryani Masala", "Everest", "100 g", 95, 105],
    ["Whole Black Pepper", "Catch", "100 g", 110, null],
  ],
  "instant-ready-to-eat": [
    ["Instant Noodles Masala", "Maggi", "280 g", 60, null],
    ["Ready to Eat Dal Makhani", "Haldiram's", "300 g", 110, 125],
    ["Instant Poha Mix", "MTR", "180 g", 65, 72],
    ["Microwave Popcorn", "Act II", "3 pcs", 99, 110],
    ["Instant Upma Mix", "MTR", "200 g", 70, null],
  ],
  "pet-care": [
    ["Adult Dog Food", "Pedigree", "3 kg", 899, 970],
    ["Cat Food Ocean Fish", "Whiskas", "1.2 kg", 449, 480],
    ["Pet Shampoo", "Himalaya", "200 ml", 175, null],
    ["Dog Chew Treats", "Pedigree", "270 g", 199, 220],
  ],
};

const descTemplates = {
  "fruits-vegetables": "Hand-picked and delivered fresh from trusted farms, packed with natural flavour and nutrition.",
  "groceries-staples": "A daily-essential staple sourced for consistent quality, trusted by households everywhere.",
  "rice-flour-grains": "Premium grade grains milled for the perfect texture and aroma in every meal.",
  "dairy-eggs": "Farm-fresh dairy, chilled and delivered quickly to preserve freshness and taste.",
  bakery: "Freshly baked using quality ingredients, delivered soft and ready to enjoy.",
  beverages: "Refreshing and ready to serve, perfect for any time of the day.",
  "snacks-biscuits": "A crunchy, delicious snack perfect for tea-time or on-the-go munching.",
  "chocolates-sweets": "Indulgent and rich, crafted to satisfy your sweet cravings.",
  "personal-care": "Gentle, dermatologically friendly formula for everyday care.",
  "household-cleaning": "Powerful cleaning action that's tough on grime, safe for your home.",
  "baby-care": "Specially formulated for delicate baby skin, gentle and safe.",
  "frozen-foods": "Flash-frozen to lock in freshness, ready to cook in minutes.",
  "meat-seafood": "Fresh, hygienically packed and quality checked for the best taste.",
  "cooking-essentials": "A kitchen essential that elevates the taste of every dish.",
  "spices-masalas": "Aromatic and flavourful, ground fresh to bring authentic taste to your cooking.",
  "instant-ready-to-eat": "Quick, convenient and delicious — ready in minutes for busy days.",
  "pet-care": "Nutritious and vet-recommended care for your beloved pet.",
};

// Ordered [keyword, emoji] pairs — first case-insensitive substring match on
// the product name wins, falling back to the category icon.
const productIconRules = [
  ["apple", "🍎"], ["banana", "🍌"], ["mango", "🥭"], ["tomato", "🍅"],
  ["potato", "🥔"], ["spinach", "🥬"], ["capsicum", "🌶️"], ["grape", "🍇"],
  ["salt", "🧂"], ["sugar", "🍬"], ["dal", "🥘"], ["oil", "🛢️"],
  ["rice", "🍚"], ["atta", "🌾"], ["flour", "🌾"], ["poha", "🌾"], ["sooji", "🌾"], ["semolina", "🌾"],
  ["milk", "🥛"], ["egg", "🥚"], ["butter", "🧈"], ["cheese", "🧀"], ["curd", "🥣"], ["paneer", "🧀"],
  ["bread", "🍞"], ["croissant", "🥐"], ["rusk", "🍞"], ["muffin", "🧁"],
  ["tea", "🍵"], ["coffee", "☕"], ["juice", "🧃"], ["water", "💧"], ["cola", "🥤"], ["nectar", "🧃"],
  ["chip", "🍟"], ["biscuit", "🍪"], ["cream sandwich", "🍪"], ["cracker", "🍪"], ["namkeen", "🥨"], ["chikki", "🥜"],
  ["chocolate", "🍫"], ["toffee", "🍬"], ["kaju katli", "🍬"], ["nutella", "🍫"], ["gems", "🍬"],
  ["face wash", "🧴"], ["shampoo", "🧴"], ["lotion", "🧴"], ["toothpaste", "🪥"], ["deodorant", "🧴"], ["shaving", "🪒"],
  ["dishwash", "🧽"], ["floor cleaner", "🧴"], ["detergent", "🧺"], ["toilet cleaner", "🚽"], ["wipes", "🧻"], ["softener", "🧺"],
  ["diaper", "👶"], ["powder", "🧴"], ["formula", "🍼"],
  ["peas", "🟢"], ["spring roll", "🥟"], ["nugget", "🍗"], ["fries", "🍟"], ["vegetable", "🥦"],
  ["chicken", "🍗"], ["prawn", "🦐"], ["mutton", "🍖"], ["pomfret", "🐟"], ["fish", "🐟"],
  ["ghee", "🧈"], ["vinegar", "🍶"], ["baking soda", "🥄"], ["corn starch", "🌽"], ["soy sauce", "🍶"],
  ["turmeric", "🌟"], ["garam masala", "🌶️"], ["chilli", "🌶️"], ["coriander", "🌿"], ["biryani", "🍛"], ["pepper", "🌶️"],
  ["noodle", "🍜"], ["makhani", "🍛"], ["popcorn", "🍿"], ["upma", "🍛"],
  ["dog food", "🐕"], ["cat food", "🐈"], ["chew", "🦴"],
];

const getProductIcon = (name, fallback) => {
  const lower = name.toLowerCase();
  const match = productIconRules.find(([kw]) => lower.includes(kw));
  return match ? match[1] : fallback;
};

const shelfLifeByCategory = {
  "fruits-vegetables": "3-7 days",
  "dairy-eggs": "3-5 days",
  bakery: "2-4 days",
  "meat-seafood": "2-3 days (refrigerated)",
  "frozen-foods": "6 months (frozen)",
};

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

let autoId = 1;
export const products = [];

categories.forEach((cat, catIndex) => {
  const items = seed[cat.slug] || [];
  items.forEach((row, i) => {
    const [name, brand, unit, price, originalPrice] = row;
    const id = autoId++;
    const idx = catIndex * 7 + i;
    const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

    const stockRoll = idx % 11;
    const stock = stockRoll === 0 ? "out" : stockRoll <= 2 ? "low" : "in";
    const stockQty = stock === "out" ? 0 : stock === "low" ? (idx % 4) + 1 : 15 + (idx % 30);

    const rating = Math.round((3.6 + ((idx * 37) % 14) / 10) * 10) / 10;
    const ratingCount = 12 + ((idx * 53) % 480);

    products.push({
      id,
      slug: `${slugify(name)}-${id}`,
      name,
      brand,
      unit,
      category: cat.slug,
      categoryName: cat.name,
      icon: getProductIcon(name, cat.icon),
      color: cat.color,
      price,
      originalPrice: originalPrice || null,
      discount,
      rating: Math.min(rating, 5),
      ratingCount,
      stock,
      stockQty,
      description: `${name} — ${descTemplates[cat.slug]}`,
      specifications: {
        Brand: brand,
        "Net Quantity": unit,
        "Shelf Life": shelfLifeByCategory[cat.slug] || "9-12 months",
        "Country of Origin": "India",
      },
      isFeatured: idx % 5 === 0,
      isPopular: idx % 4 === 1,
      isNewArrival: idx % 6 === 2,
      isSpecialOffer: !!originalPrice && discount >= 10,
      isRecommended: idx % 3 === 0,
    });
  });
});

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (categorySlug) => products.filter((p) => p.category === categorySlug);
export const getRelatedProducts = (product, limit = 8) =>
  products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);

export const brands = [...new Set(products.map((p) => p.brand))].sort();
export const maxPrice = Math.max(...products.map((p) => p.price));
