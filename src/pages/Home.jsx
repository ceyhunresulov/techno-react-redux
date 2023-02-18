import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import { getFilteredElement } from "../redux/actions/filter";
import { IoIosArrowDown } from "react-icons/io";

function Home() {
  const dispatch = useDispatch();
  const firstInput = useRef();
  const lastInput = useRef();
  const products = useSelector((state) => state.products);
  const brands = useSelector((state) => state.brands);
  const [openFilter, setOpenFilter] = useState(true);

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
    <div className="relative w-full md:flex justify-between mt-2 md:mt-32">
      <ul className={`mt-24 md:m-0 md:fixed left- top-32 bg-slate-600 w-64 rounded py-1 px-4 md:p-4 box-border overflow-hidden ${openFilter ? 'h-auto' : 'h-14'} `}>
        <div onClick={()=> setOpenFilter(!openFilter)} className="md:hidden w-full flex flex-col justify-center items-center">
          <h1 className="text-xl text-center text-white">Filter</h1>
          <IoIosArrowDown className={`text-2xl text-white ${openFilter ? 'rotate-180' : 'rotate-0'}`} />
        </div>
        <li className="border-b pb-2 box-border">
          <span className="text-md md:text-xl text-gray-300 mb-2 block">
            Price range
          </span>
          <label className="flex w-full justify-between items-center">
            <input
              ref={firstInput}
              onChange={filterFirstPrice}
              type="number"
              placeholder="$"
              className="w-2/5 focus:outline-none text-md md:text-1.5xl border-2 border-gray-300 rounded px-1 box-border"
            />
            <span className="h-[1px] border border-white w-1/6"></span>
            <input
              ref={lastInput}
              onChange={filterLastPrice}
              type="number"
              placeholder="$"
              className="w-2/5 focus:outline-none text-md md:text-1.5xl border-2 border-gray-300 rounded px-1 box-border"
            />
          </label>
        </li>
        <h1 className="text-md md:text-2xl text-gray-300 mb-2 md:mb-4">
          Brand
        </h1>
        {brands.map((brand, i) => (
          <Filter key={i} brand={brand} />
        ))}
      </ul>
      <ul className="w-full sm:flex flex-wrap justify-end mt-8 md:mt-0">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
