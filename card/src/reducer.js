import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state,
         cart: new Map() };




  }
  throw new Error(`No matching action type: ${action.type}`);
};
