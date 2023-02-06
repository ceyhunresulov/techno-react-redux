export const addBasketAction = (payload) => {
  return {
    type: "ADD_BASKET",
    payload,
  };
};

export const incrementCountAction = (payload) => {
  return {
    type: "INCREMENT_COUNT",
    payload,
  };
};

export const decrementCountAction = (payload) => {
  return {
    type: "DECREMENT_COUNT",
    payload,
  };
};

export const removeBasketAction = (payload) => {
  return {
    type: "REMOVE_BASKET",
    payload,
  };
};

export const confirmOrdersAction = () => {
  return {
    type: "CONFIRM",
  };
};
