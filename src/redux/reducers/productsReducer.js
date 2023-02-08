import data from "../../database";

const initialState = data;

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_PRODUCTS":
      return [
        ...data.filter((product) =>
          product.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      ];
    case "FILTER_PRODUCTS":
      if (action.payload.brands.length > 0) {
        return [
          ...data.filter(
            (product) =>
              action.payload.brands.includes(product.properties.Producer) &&
              product.price >= action.payload.price.firstPrice &&
              product.price <= action.payload.price.lastPrice
          ),
        ];
      } else {
        return [
          ...data.filter(
            (product) =>
              product.price >= action.payload.price.firstPrice &&
              product.price <= action.payload.price.lastPrice
          ),
        ];
      }
    default:
      return state;
  }
};
