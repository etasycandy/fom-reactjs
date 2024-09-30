export const addToCart = (product) => (dispatch, getState) => {
  dispatch({ type: "ADD_TO_CART", payload: product });
  const { cart } = getState();
  // console.log(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  const { cart } = getState();
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const handlePlus = (productId) => (dispatch) => {
  dispatch({
    type: "UPDATE_QUANTITY",
    payload: { id: productId, quantity: 1 },
  });
};

export const handleMinus = (productId) => (dispatch) => {
  dispatch({
    type: "UPDATE_QUANTITY",
    payload: { id: productId, quantity: -1 },
  });
};
