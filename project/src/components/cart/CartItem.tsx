import React from 'react';
import { Product, CartItem as CartItemType } from '../../types';

interface CartItemProps {
  item: CartItemType;
  product: Product;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export default function CartItem({ item, product, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24 object-cover" src={product.imageUrl} alt={product.name} />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{product.name}</span>
          <button
            onClick={() => onRemove(item.productId)}
            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <button onClick={() => onUpdateQuantity(item.productId, Math.max(0, item.quantity - 1))}>
          -
        </button>
        <input
          className="mx-2 border text-center w-8"
          type="text"
          value={item.quantity}
          readOnly
        />
        <button onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}>
          +
        </button>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">₹{product.price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">
        ₹{(product.price * item.quantity).toFixed(2)}
      </span>
    </div>
  );
}