import DetailsBody from "../features/productDetails/DetailsBody"
import DetailsHeader from "../features/productDetails/DetailsHeader"

const ProductDetails: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <DetailsHeader/>
      <DetailsBody/>
    </section>
  )
}

export default ProductDetails
