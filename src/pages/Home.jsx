import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

function Home() {
  const products = useSelector((state) => state.products);
  return (
    <ul className="w-full flex flex-wrap justify-center mt-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default Home;
