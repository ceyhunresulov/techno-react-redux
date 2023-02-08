import data from "../../database";

const initialState = [
  ...new Set(data.map((product) => product.properties.Producer)),
];

export const brandsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
