export const initialState = {
  total: 0,
  products: [],
};

const shopReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
        console.log("Add to cart", payload)
      return {
        ...state,
        products: payload.products,
      };
    case "REMOVE_FROM_CART":
        console.log("remove from cart", payload)
      return {
        ...state,
        products: payload.products,
      };
    case "UPDATE_PRICE":
        console.log("update price", payload)
      return {
        ...state,
        total: payload.total,
      };
    default:
      throw new Error(`No cas for this type ${type} found in shopReducer`)
  }
};
export default shopReducer;
