import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import { getFilteredElement } from "../redux/actions/filter";

function Home() {
  const dispatch = useDispatch();
  const firstInput = useRef();
  const lastInput = useRef();
  const products = useSelector((state) => state.products);
  const brands = useSelector((state) => state.brands);

  const filterFirstPrice = () => {
    dispatch(
      getFilteredElement({
        firstPrice: firstInput.current.value,
        lastPrice: lastInput.current.value,
      })
    );
  };

  const filterLastPrice = () => {
    dispatch(
      getFilteredElement({
        firstPrice: firstInput.current.value,
        lastPrice: lastInput.current.value,
      })
    );
  };

  return (
    <>
      <ul className="w-full flex flex-wrap justify-end mt-32">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
      <ul className="fixed left-4 top-32 bg-slate-600 w-64 rounded p-4 box-border">
        <li className="border-b pb-2 box-border">
          <span className="text-xl text-gray-300 mb-2 block">Price range</span>
          <label className="flex w-full justify-between items-center">
            <input
              ref={firstInput}
              onChange={filterFirstPrice}
              type="number"
              className="w-2/5 focus:outline-none text-1.5xl border-2 border-gray-300 rounded px-1 box-border"
            />
            <span className="h-[1px] border border-white w-1/6"></span>
            <input
              ref={lastInput}
              onChange={filterLastPrice}
              type="number"
              className="w-2/5 focus:outline-none text-1.5xl border-2 border-gray-300 rounded px-1 box-border"
            />
          </label>
        </li>
        <h1 className="text-2xl text-gray-300 mb-4">Brand</h1>
        {brands.map((brand, i) => (
          <Filter key={i} brand={brand} />
        ))}
      </ul>
    </>
  );
}

export default Home;
