import { create } from "zustand";
import {
  fetchProducts,
  fetchProductCategories,
  fetchEightProducts,
  fetchProductById,
  fetchProductsByCategory,
} from "../services/productService";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductDetails {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

interface ProductsState {
  products: Product[];
  eightProducts: Product[];
  productCategories: string[];
  singleProduct: ProductDetails | null; 
  isLoading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  fetchProductCategories: () => Promise<void>;
  fetchEightProducts: () => Promise<void>;
  fetchProductsByCategories: (category: string) => Promise<void>; 
  fetchProductById: (id: number) => Promise<void>; 
  
}

export const useProductStore = create<ProductsState>((set) => ({
  products: [],
  productCategories: [],
  eightProducts: [],
  singleProduct: null,
  isLoading: false,
  error: null,
  fetchProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      const products = await fetchProducts();
      set({ products, isLoading: false });
    } catch (error) {
      console.error("Error fetching products:", error);
      set({ isLoading: false, error: "Failed to fetch products" });
    }
  },
  fetchProductCategories: async () => {
    set({ isLoading: true, error: null });
    try {
      const categories = await fetchProductCategories();
      set({ productCategories: categories, isLoading: false });
    } catch (error) {
      console.error("Error fetching product categories:", error);
      set({ isLoading: false, error: "Failed to fetch product categories" });
    }
  },
  fetchEightProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      const eightProducts = await fetchEightProducts();
      set({ eightProducts, isLoading: false });
    } catch (error) {
      console.error("Error fetching eight products:", error);
      set({ isLoading: false, error: "Failed to fetch eight products" });
    }
  },
  fetchProductById: async (id: number) => {
    set({ isLoading: true, error: null });
    try {
      const product = await fetchProductById(id);
      set({ singleProduct: product, isLoading: false });
    } catch (error) {
      console.error("Error fetching product:", error);
      set({ isLoading: false, error: "Failed to fetch product" });
    }
  },
  fetchProductsByCategories: async (category: string) => {
    set({ isLoading: true, error: null });
    try {
      const products = await fetchProductsByCategory(category);
      set({ products, isLoading: false });
    } catch (error) {
      console.error("Error fetching products by category:", error);
      set({ isLoading: false, error: "Failed to fetch products by category" });
    }
  },
}));
