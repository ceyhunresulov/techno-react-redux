import { createStore, combineReducers } from "redux";
import { basketReducer } from "../reducers/basketReducer";
import { productsReducer } from "../reducers/productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
});

const store = createStore(rootReducer);

export default store;
