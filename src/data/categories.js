// Mock category data. Replace with an API call (e.g. GET /api/categories) later.
export const categories = [
  { slug: "fruits-vegetables", name: "Fruits & Vegetables", icon: "🥦", color: "#16a34a" },
  { slug: "groceries-staples", name: "Groceries & Staples", icon: "🛒", color: "#ca8a04" },
  { slug: "rice-flour-grains", name: "Rice, Flour & Grains", icon: "🌾", color: "#d97706" },
  { slug: "dairy-eggs", name: "Dairy & Eggs", icon: "🥚", color: "#f59e0b" },
  { slug: "bakery", name: "Bakery", icon: "🥐", color: "#b45309" },
  { slug: "beverages", name: "Beverages", icon: "🥤", color: "#0ea5e9" },
  { slug: "snacks-biscuits", name: "Snacks & Biscuits", icon: "🍪", color: "#ea580c" },
  { slug: "chocolates-sweets", name: "Chocolates & Sweets", icon: "🍫", color: "#92400e" },
  { slug: "personal-care", name: "Personal Care", icon: "🧴", color: "#db2777" },
  { slug: "household-cleaning", name: "Household & Cleaning", icon: "🧼", color: "#0891b2" },
  { slug: "baby-care", name: "Baby Care", icon: "🍼", color: "#f472b6" },
  { slug: "frozen-foods", name: "Frozen Foods", icon: "🧊", color: "#0284c7" },
  { slug: "meat-seafood", name: "Meat & Seafood", icon: "🍗", color: "#dc2626" },
  { slug: "cooking-essentials", name: "Cooking Essentials", icon: "🍳", color: "#eab308" },
  { slug: "spices-masalas", name: "Spices & Masalas", icon: "🌶️", color: "#e11d48" },
  { slug: "instant-ready-to-eat", name: "Instant & Ready-to-Eat", icon: "🍜", color: "#f97316" },
  { slug: "pet-care", name: "Pet Care", icon: "🐾", color: "#7c3aed" },
];

export const getCategoryBySlug = (slug) => categories.find((c) => c.slug === slug);
