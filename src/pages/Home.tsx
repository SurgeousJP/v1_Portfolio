import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4 bg-gray-100">
        <h1 className="text-2xl font-bold text-center mb-8">Our Products</h1>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
