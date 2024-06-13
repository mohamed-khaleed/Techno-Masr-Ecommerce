// src/pages/Products.tsx

import { useEffect } from "react";
import { useProductStore } from "../../stores/productStore";
import HeroProductItem from "../../ui/HeroProductItem";
import { useSearchParams } from "react-router-dom";

function ProductsBody() {
   const { fetchProducts, fetchProductsByCategories, isLoading, error, products } = useProductStore();
   const [searchParams] = useSearchParams();
   const category = searchParams.get("category");

    useEffect(() => {
      if (category) {
        fetchProductsByCategories(category);
      } else {
        fetchProducts();
      }
    }, [category]);

  return (
    <main className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!isLoading && products.map((product) => (
          <HeroProductItem key={product.id} product={product} />
        ))}
    </main>
  );
}

export default ProductsBody;
