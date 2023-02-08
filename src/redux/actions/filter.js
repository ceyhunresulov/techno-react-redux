export const getFilteredElement = (payload) => {
  return {
    type: "GET_FILTERED_ELEMENT",
    payload,
  };
};

export const removeFilteredElement = (payload) => {
  return {
    type: "REMOVE_FILTERED_ELEMENT",
    payload,
  };
};

export const filterProductsAction = (payload) => {
  return {
    type: "FILTER_PRODUCTS",
    payload,
  };
};

