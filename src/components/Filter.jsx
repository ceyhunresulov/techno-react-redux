import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProductsAction,
  getFilteredElement,
  removeFilteredElement,
} from "../redux/actions/filter";

function Filter({ brand }) {
  const filterELements = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filterProducts = (e) => {
    if (e.target.checked) {
      dispatch(getFilteredElement({ brand: e.target.value }));
    } else {
      dispatch(removeFilteredElement({ brand: e.target.value }));
    }
  };

  useEffect(() => {
    dispatch(filterProductsAction(filterELements));
  }, [filterELements]);

  return (
    <li className="text-sm md:text-lg text-white mb-1 md:mb-3 flex items-center">
      <input
        type="checkbox"
        id={brand}
        name={brand}
        value={brand}
        className="text-xl w-4 h-4 cursor-pointer"
        onClick={filterProducts}
      />
      <label htmlFor={brand} className="ml-3 cursor-pointer">
        {brand}
      </label>
    </li>
  );
}

export default Filter;
