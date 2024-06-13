export const addProductToCart = async (userId: number, products: { productId: number, quantity: number }[]) => {
  const response = await fetch('https://fakestoreapi.com/carts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      date: new Date().toISOString().split('T')[0], // gets today's date
      products,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to add product to cart');
  }

  return response.json();
};
