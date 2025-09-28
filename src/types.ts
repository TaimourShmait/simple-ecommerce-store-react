export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "silence" | "noise";
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
