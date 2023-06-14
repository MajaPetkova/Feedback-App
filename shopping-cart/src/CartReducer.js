import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "./actions";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItem: state.cartItems.filter((x)=> x._id !== action.payload )
      };
    }
    default:
      return state;
  }
};
