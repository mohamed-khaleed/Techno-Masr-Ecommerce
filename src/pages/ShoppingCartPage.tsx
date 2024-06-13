import Navbar from "../features/navbar/Navbar";
import CartHeader from "../features/shopping Cart/CartHeader";
import CartTable from "../features/shopping Cart/CartTable";
import CartTotalCol from "../features/shopping Cart/CartTotalCol";
import Footer from "../ui/Footer";

const ShoppingCartPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="container mx-auto ml-14 px-4 py-10">
        <CartHeader />
        <main className="flex gap-10">
          <CartTable />
          <CartTotalCol />
        </main>
      </section>
      <Footer/>
    </>
  );
};

export default ShoppingCartPage;
