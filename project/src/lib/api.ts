const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function loginUser(email: string, password: string) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });
  
  if (!response.ok) {
    throw new Error('Login failed');
  }
  
  return response.json();
}

export async function registerUser(data: {
  name: string;
  email: string;
  password: string;
  phone: string;
}) {
  const response = await fetch(`${API_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }

  return response.json();
}

export async function addToCart(userId: string, productId: string, quantity: number) {
  const response = await fetch(`${API_URL}/cart/addtocart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ userId, productId, quantity }),
  });

  if (!response.ok) {
    throw new Error('Failed to add to cart');
  }

  return response.json();
}