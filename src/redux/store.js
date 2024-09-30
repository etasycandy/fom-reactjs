import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingProduct = state.cart.find(
        (item) => item.product.id === action.payload.product.id,
      );

      console.log(state.cart);

      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.product.id === action.payload.product.id
              ? {
                  ...item,
                  quantity: item.quantity + action.payload.quantity,
                }
              : item,
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload }],
        };
      }
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
    case "UPDATE_QUANTITY": {
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.product.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };
    }
    default:
      return state;
  }
};

const store = createStore(cartReducer, applyMiddleware(thunk));

export default store;
