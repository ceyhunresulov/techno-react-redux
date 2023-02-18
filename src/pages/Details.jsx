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
    <div className="w-full mt-32">
      <div className="flex flex-col border md:flex-row md:border-none">
        <div>
          <img src={require(`../images/${product.img}`)} alt="" className="scale-90" />
        </div>
        <div className="md:ml-10 p-4 md:py-8 box-border flex flex-col justify-between">
          <h1 className="text-xl mb-4 md:text-3xl font-bold">{product.title}</h1>
          <div className="w-full flex items-center justify-between">
            <span className="text-xl md:text-2xl border px-3 py-2 box-border rounded">
              {product.price}$
            </span>
            <button
              onClick={addBusket}
              className="text-md lg:text-2xl hover:bg-cyan-900 transition-all ease-in-out duration-300 px-2 py-1 md:px-2 md:py-3 rounded box-border text-white bg-cyan-500 ml-8"
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
            className="mb-4 text-xl lg:w-1/4 w-full border-b flex justify-between"
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
