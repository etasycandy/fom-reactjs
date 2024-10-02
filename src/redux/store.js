import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  totalPrice: 0,
};

const calculateTotalPrice = (cart) => {
  return cart.reduce(
    (total, item) => total + item.product.sale * item.quantity,
    0,
  );
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingProduct = state.cart.find(
        (item) => item.product.id === action.payload.product.id,
      );

      let updatedCart;

      if (existingProduct) {
        updatedCart = state.cart.map((item) =>
          item.product.id === action.payload.product.id
            ? {
                ...item,
                quantity: item.quantity + action.payload.quantity,
              }
            : item,
        );
      } else {
        updatedCart = [...state.cart, { ...action.payload }];
      }

      return {
        ...state,
        cart: updatedCart,
        totalPrice: calculateTotalPrice(updatedCart),
      };
    }

    case "REMOVE_FROM_CART": {
      const updatedCart = state.cart.filter(
        (item) => item.product.id !== action.payload,
      );
      return {
        ...state,
        cart: updatedCart,
        totalPrice: calculateTotalPrice(updatedCart),
      };
    }

    case "UPDATE_QUANTITY": {
      const updatedCart = state.cart
        .map((item) =>
          item.product.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item,
        )
        .filter((item) => item.quantity > 0);

      return {
        ...state,
        cart: updatedCart,
        totalPrice: calculateTotalPrice(updatedCart),
      };
    }

    default:
      return state;
  }
};

const store = createStore(cartReducer, applyMiddleware(thunk));

export default store;
