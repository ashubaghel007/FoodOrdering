export type Product = {
  id: number;
  image: string | null;
  name: string;
  price: number;
};

export type PizzaSize = "S" | "M" | "L" | "XL";

export type CartItem = {
  id: string;
  product: Product;
  product_id: number;
  size: PizzaSize;
  quantity: number;
};

export const OrderStatusList: OrderStatus[] = [
  "New",
  "Cooking",
  "Delivering",
  "Delivered",
];

export type OrderStatus = "New" | "Cooking" | "Delivering" | "Delivered";

export interface Order {
  id: number;
  created_at: string;
  total: number;
  user_id: string;
  status: OrderStatus;

  order_items?: OrderItem[];
}

export interface OrderItem {
  id: number;
  product_id: number;
  products: Product;
  order_id: number;
  size: PizzaSize;
  quantity: number;
}

export type Profile = {
  id: string;
  group: string;
};

export interface User {
  name: string;
  email: string;
  avatar: string;
  verified: boolean;
}

export interface MenuOption {
  id: number;
  title: string;
  icon: string;
  screen: string;
}

export interface UserData {
  user: User;
  menuOptions: MenuOption[];
}

export interface OrderListItemProps {
  order: Order;
  disabled?: boolean;
}

export interface OrderItemProps {
  orderItem: OrderItem;
}
