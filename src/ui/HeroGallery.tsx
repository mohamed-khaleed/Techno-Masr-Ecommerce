import offer from '../assets/images/gradient-background-cyber-monday-sales_52683-142802 1.svg'
import banner1 from '../assets/images/banner-e-commerce1 1.svg'
import banner2 from '../assets/images/pngtree-ecommerce-banner-planning-segmentation-selection-image_1316202 1.svg'
function HeroGallery() {
  return (
    <section className="flex gap-4 items-center justify-center p-7">
       <img src={offer} alt="offer" />
       <div className='flex flex-col gap-5'>
         <img src={banner1}alt="banner1" />
         <img src={banner2} alt="banner2" />
       </div>
    </section>
  )
}

export default HeroGallery
