import React from 'react';
import { CartItem, Product } from '../../types';

interface CartSummaryProps {
  items: CartItem[];
  products: Product[];
  subtotal: number;
  onCheckout: () => void;
}

export default function CartSummary({ items, products, subtotal, onCheckout }: CartSummaryProps) {
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="bg-gray-50 rounded-lg p-6 mt-6 lg:mt-0">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Subtotal</p>
          <p className="text-sm font-medium text-gray-900">₹{subtotal.toFixed(2)}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Shipping</p>
          <p className="text-sm font-medium text-gray-900">Free</p>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between">
            <p className="text-base font-medium text-gray-900">Total</p>
            <p className="text-base font-medium text-gray-900">₹{total.toFixed(2)}</p>
          </div>
        </div>
      </div>
      
      <button
        onClick={onCheckout}
        className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}