import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

const HomePage = () => {
  return (
    <div className="">
      HomePage
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="p-2 text-2xl">Featured Products</h2>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
