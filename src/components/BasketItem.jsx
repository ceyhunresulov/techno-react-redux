import React from "react";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  decrementCountAction,
  incrementCountAction,
  removeBasketAction,
} from "../redux/actions/basket";

function BasketItem({ product }) {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementCountAction(product.id));
  };

  const decrement = () => {
    if (product.count <= 1) {
      dispatch(removeBasketAction(product.id));
    } else {
      dispatch(decrementCountAction(product.id));
    }
  };

  const removeBasket = () => {
    dispatch(removeBasketAction(product.id));
  };
  return (
    <li className="border-2 h-64 w-3/4 p-4 box-border flex mb-4 relative">
      <div className="h-full w-[200px] overflow-hidden">
        <img
          src={require(`../images/${product.img}`)}
          alt=""
          className="h-full w-full"
        />
      </div>
      <div className="h-full flex flex-col justify-center ml-8">
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <span className="text-xl mb-2">{product.price}$</span>
        <div className="flex items-center mb-2">
          <AiFillMinusCircle
            onClick={decrement}
            className="text-3xl text-cyan-500 cursor-pointer"
          />
          <span className="mx-4 text-xl">{product.count}</span>
          <AiFillPlusCircle
            onClick={increment}
            className="text-3xl text-cyan-500 cursor-pointer"
          />
        </div>
        <span className="text-2xl text-cyan-900 mt-2">
          Total: {Math.round((product.count * product.price)*100)/100}$
        </span>
      </div>
      <button
        onClick={removeBasket}
        className="absolute right-2 bottom-2  text-4x px-2 py-1 bg-red-700 text-white rounded"
      >
        Delete
      </button>
    </li>
  );
}

export default BasketItem;
