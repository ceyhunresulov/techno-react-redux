import { createStore, combineReducers } from "redux";
import { basketReducer } from "../reducers/basketReducer";
import { brandsReducer } from "../reducers/brandsReducer";
import { filterReducer } from "../reducers/filterReducer";
import { productsReducer } from "../reducers/productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
  filter: filterReducer,
  brands: brandsReducer,
});

const store = createStore(rootReducer);

export default store;
