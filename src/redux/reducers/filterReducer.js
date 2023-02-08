const initialState = {
  brands: [],
  price: {
    firstPrice: 0,
    lastPrice: 100000,
  },
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FILTERED_ELEMENT":
      if (action.payload.brand) state.brands.push(action.payload.brand);
      return {
        ...state,
        brands: [...state.brands],
        price: {
          firstPrice: action.payload.firstPrice || 0,
          lastPrice: action.payload.lastPrice || 100000,
        },
      };
    case "REMOVE_FILTERED_ELEMENT":
      return {
        ...state,
        brands: [
          ...state.brands.filter((item) => item !== action.payload.brand),
        ],
        price: {
          firstPrice: action.payload.firstPrice || 0,
          lastPrice: action.payload.lastPrice || 100000,
        },
      };
    default:
      return state;
  }
};
