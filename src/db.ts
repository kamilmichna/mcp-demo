type Product = {
  name: string;
  category: string;
  price: number;
};

export enum ProductCategory {
  Electronics = "Electronics",
  Fitness = "Fitness",
  Kitchen = "Kitchen",
  Stationery = "Stationery",
}

export function getMockProducts(): Product[] {
  return [
    {
      name: "Wireless Mouse",
      category: ProductCategory.Electronics,
      price: 29.99,
    },
    {
      name: "Yoga Mat",
      category: ProductCategory.Fitness,
      price: 19.99,
    },
    {
      name: "Coffee Mug",
      category: ProductCategory.Kitchen,
      price: 9.99,
    },
    {
      name: "Bluetooth Speaker",
      category: ProductCategory.Electronics,
      price: 49.99,
    },
    {
      name: "Notebook",
      category: ProductCategory.Stationery,
      price: 4.99,
    },
  ];
}
