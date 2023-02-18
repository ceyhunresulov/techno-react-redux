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
    <header className="bg-slate-600 rounded-b z-10 flex justify-center fixed left-0 top-0 w-full">
      <div className="w-11/12 sm:w-4/6 md:w-10/12 xl:w-11/12 h-16 md:h-20 flex justify-between items-center">
        <Link to="/" className="text-2xl md:text-4xl font-bold font-mono text-white">
          Techno
        </Link>
        <nav className="flex items-center">
          <input
            onChange={searchProducts}
            type="text"
            placeholder="Search"
            className="text-md md:text-xl p-1 box-border rounded focus:outline-none"
          />
          <Link to="/basket" className="relative ml-4">
            <BsBasketFill className="text-3xl md:text-4xl cursor-pointer text-red-400" />
        
            <span className="text-sm md:text-xl absolute top-0 right-0 bg-green-600 rounded-full px-1 text-white">
              {basket?.reduce((curr, prd) => {
                return (curr += prd.count);
              }, 0)}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
