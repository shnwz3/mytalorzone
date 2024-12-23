import { CartItem } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

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

export async function getCart(userId: string) {
  const response = await fetch(`${API_URL}/cart/get-cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ userId }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch cart');
  }

  return response.json();
}

export async function updateQuantity(userId: string, productId: string, quantity: number) {
  const response = await fetch(`${API_URL}/cart/update-quantity`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ userId, productId, productQty: quantity }),
  });

  if (!response.ok) {
    throw new Error('Failed to update quantity');
  }

  return response.json();
}

export async function removeFromCart(userId: string, productId: string) {
  const response = await fetch(`${API_URL}/cart/delete-items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ userId, productId }),
  });

  if (!response.ok) {
    throw new Error('Failed to remove item from cart');
  }

  return response.json();
}