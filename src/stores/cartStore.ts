// src/stores/cartStore.ts
import { create } from 'zustand';
import { addProductToCart } from '../services/cartService';

interface CartState {
  cart: any;
  addProductToCart: (userId: number, products: { productId: number, quantity: number }[]) => Promise<void>;
}

export const useCartStore = create<CartState>((set) => ({
  cart: null,
  addProductToCart: async (userId, products) => {
    const cart = await addProductToCart(userId, products);
    set({ cart });
  },
}));
