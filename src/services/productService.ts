// const BASE_URL = process.env.REACT_APP_BASE_URL;
export const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const products = await response.json();
  return products;
};

export const fetchEightProducts = async () => { 
  const response = await fetch('https://fakestoreapi.com/products?limit=8');
  if (!response.ok) {
    throw new Error('Failed to fetch limited set of products'); 
  }
  const products = await response.json();
  return products;
};


export const fetchProductCategories = async () => {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  if (!response.ok) {
    throw new Error('Failed to fetch product categories');
  }
  const categories = await response.json();
  return categories;
};

export const fetchProductById = async (id: number) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  const product = await response.json();
  return product;
};

export const fetchProductsByCategory = async (category: string) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  if (!response.ok) {
    throw new Error('Failed to fetch products by category');
  }
  const products = await response.json();
  return products;
}


