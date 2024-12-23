export interface User {
  userId: string;
  name: string;
  email: string;
  phone: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Order {
  orderId: string;
  userId: string;
  date: string;
  time: string;
  address: string;
  price: number;
  trackingId: string;
  products: CartItem[];
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}