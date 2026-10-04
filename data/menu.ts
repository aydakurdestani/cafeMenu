export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "coffee" | "cold" | "pastry" | "fastfood";
};

export const categories = [
  {
    id: "all",
    name: "All",
  },
  {
    id: "coffee",
    name: "Coffee",
  },
  {
    id: "cold",
    name: "Cold Drinks",
  },
  {
    id: "pastry",
    name: "Pastries",
  },
  {
    id: "fastFood",
    name: "Foods",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Espresso",
    description: "Rich and intense Italian espresso.",
    price: 3.5,
    category: "coffee",
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Espresso with steamed milk and creamy foam.",
    price: 4.5,
    category: "coffee",
  },
  {
    id: 3,
    name: "Caffe Latte",
    description: "Smooth espresso with silky steamed milk.",
    price: 4.8,
    category: "coffee",
  },
  {
    id: 4,
    name: "Iced Latte",
    description: "Cold espresso with fresh milk and ice.",
    price: 5,
    category: "cold",
  },
  {
    id: 5,
    name: "Iced Mocha",
    description: "Chocolate, espresso, milk and ice.",
    price: 5.5,
    category: "cold",
  },
  {
    id: 6,
    name: "Croissant",
    description: "Fresh and buttery French croissant.",
    price: 4,
    category: "pastry",
  },
  {
    id: 7,
    name: "Cheesecake",
    description: "Creamy cheesecake with a soft biscuit base.",
    price: 5,
    category: "pastry",
  },
];
