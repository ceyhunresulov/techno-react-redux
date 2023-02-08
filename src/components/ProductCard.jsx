import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addBasketAction } from "../redux/actions/basket";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const addBasket = () => {
    dispatch(addBasketAction(product.id));
  };
  return (
    <li className="w-1/4 flex flex-col justify-between border-2 mb-8 ml-8 rounded-md p-2 pt-0 box-border hover:border-cyan-600 transition-all ease-in-out duration-300">
      <Link to={`/${product.id}`}>
        <div className="w-full cursor-pointer overflow-hidden">
          <img
            src={require(`../images/${product.img}`)}
            alt=""
            className="w-full h-full scale-95"
          />
        </div>
        <h1 className="text-1.5xl font-bold text-center">{product.title}</h1>
      </Link>
      <div className="w-full">
        <div className="mt-8 flex justify-between items-center border-t-2 py-2 box-border border-dashed">
          <span className="text-xl ">{product.price}$</span>
          <button
            className="bg-cyan-600 hover:bg-cyan-900 px-2 py-1 box-border rounded text-white
          "
            onClick={addBasket}
          >
            Add Basket
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
