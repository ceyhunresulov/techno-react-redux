import { BsBasketFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchAction } from "../redux/actions/search";

function Header() {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);

  const searchProducts = (e) => {
    dispatch(searchAction(e.target.value));
  };

  return (
    <header className="bg-slate-600 h-20 flex justify-between items-center rounded-b px-16 z-10 box-border fixed left-0 top-0 w-full">
      <Link to="/" className="text-4xl font-bold font-mono text-white">
        Techno
      </Link>
      <nav className="flex items-center">
        <input
          onChange={searchProducts}
          type="text"
          placeholder="Search"
          className="text-xl p-2 box-border rounded"
        />
        <Link to="/basket" className="relative ml-4">
          <BsBasketFill className="text-4xl cursor-pointer text-red-400" />

          <span className="absolute top-0 right-0 bg-green-600 rounded-full px-1 text-white">
            {basket?.reduce((curr, prd) => {
              return (curr += prd.count);
            }, 0)}
          </span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
