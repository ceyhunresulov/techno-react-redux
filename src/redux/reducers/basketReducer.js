import data from "../../database";

const initialState = JSON.parse(localStorage.getItem("basket")) || [];

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BASKET": {
      const checkBasket = state.find((item) => item.id === action.payload);
      if (checkBasket) {
        checkBasket.count += 1;
        localStorage.setItem("basket", JSON.stringify(state));
        return [...state];
      } else {
        const currentProduct = data.find(
          (product) => product.id === action.payload
        );
        const addProduct = {
          id: currentProduct.id,
          title: currentProduct.title,
          img: currentProduct.img,
          price: currentProduct.price,
          properties: currentProduct.properties,
          count: 1,
        };
        const basket = [addProduct, ...state];
        localStorage.setItem("basket", JSON.stringify(basket));
        return basket;
      }
    }
    case "INCREMENT_COUNT": {
      state.find((product) => product.id === action.payload).count += 1;
      const basket = [...state];
      localStorage.setItem("basket", JSON.stringify(basket));
      return basket;
    }
    case "DECREMENT_COUNT": {
      state.find((product) => product.id === action.payload).count -= 1;
      const basket = [...state];
      localStorage.setItem("basket", JSON.stringify(basket));
      return basket;
    }
    case "REMOVE_BASKET": {
      const basket = [
        ...state.filter((product) => product.id !== action.payload),
      ];
      localStorage.setItem("basket", JSON.stringify(basket));

      return basket;
    }
    case "CONFIRM":
      localStorage.setItem("basket", JSON.stringify([]));
      return [];
    default:
      return state;
  }
};
