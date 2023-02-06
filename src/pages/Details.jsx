import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addBasketAction } from "../redux/actions/basket";

function Details() {
  const dispatch = useDispatch();
  let { id } = useParams();

  const product = useSelector((state) => state.products).filter(
    (product) => product.id === +id
  )[0];

  const addBusket = () => {
    dispatch(addBasketAction(product.id));
  };

  return (
    <div className="w-full mt-8">
      <div className="flex">
        <div>
          <img src={require(`../images/${product.img}`)} alt="" />
        </div>
        <div className="ml-10 py-8 box-border flex flex-col justify-between">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <div className="w-full flex items-center">
            <span className="text-2xl border px-2 py-3 box-border rounded">
              {product.price}$
            </span>
            <button
              onClick={addBusket}
              className="text-2xl hover:bg-cyan-900 transition-all ease-in-out duration-300 px-2 py-3 rounded box-border text-white bg-cyan-500 ml-8"
            >
              Add Busket
            </button>
          </div>
        </div>
      </div>
      <ul className="border-t-2 mt-8 pt-4 box-border">
        {Object.keys(product.properties).map((key, i) => (
          <li
            key={i}
            className="mb-4 text-xl w-1/4 border-b flex justify-between"
          >
            <span className="font-bold">{key}:</span>
            <span className="w-1/2 text-left">{product.properties[key]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Details;
