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
    default:
      return state;
  }
};
