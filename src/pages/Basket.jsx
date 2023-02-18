import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketItem from "../components/BasketItem";
import { confirmOrdersAction } from "../redux/actions/basket";

function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  const [confirm, setConfirm] = useState(false);

  const confirmOreders = () => {
    dispatch(confirmOrdersAction());
    setConfirm(true);
    setTimeout(() => {
      setConfirm(false);
      window.location = "/";
    }, 4000);
  };
  return (
    <>
      <ul className="mt-32">
        {confirm && (
          <li className="w-full text-center text-3xl text-green-500 border border-green-500 p-4 box-border">
            Successful
          </li>
        )}
        {basket.map((product) => (
          <BasketItem key={product.id} product={product} />
        ))}
      </ul>
      {(basket.length > 0 && (
        <div className="lg:fixed my-8 bottom-32 lg:right-8 xl:right-32 border-2 md:flex flex-col w-[250px] h-[100px] justify-between items-center">
          <span className="text-2xl m-2">
            Total:
            {
              basket?.reduce((curr, prd) => {
                return (curr += prd.count * prd.price);
              }, 0) 
            }
            $
          </span>
          <button
            onClick={confirmOreders}
            className="bg-cyan-500 p-4 md:p-8 box-border w-full text-2xl text-white"
          >
            confirm orders
          </button>
        </div>
      )) ||
        null}
    </>
  );
}

export default Basket;
