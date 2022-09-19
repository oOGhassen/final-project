import {
    CARD_ADD_ITEM,
    CARD_REMOVE_ITEM,
    DECREMENT,
    INCREMENT,
  } from "../actionTypes/actionTypesCart";
  
  const init = {
    cartItems: [],
  };
  
  export const cartReducer = (state = init, { type, payload }) => {
    switch (type) {
      case CARD_ADD_ITEM:
        const item = payload;
        const existItem = state.cartItems.find(
          (el) => el.product === item.product
        );
  
        if (existItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((el) =>
              el.product === existItem.product ? item : el
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item],
          };
        }
      case CARD_REMOVE_ITEM:
        return {
          ...state,
          cartItems: state.cartItems.filter((el) => el.product !== payload),
        };
  
      case INCREMENT:
        return {
          ...state,
          cartItems: state.cartItems.filter((el) =>
            el.product === payload.product
              ? { ...el, qty: (payload.qty += 1) }
              : el
          ),
        };
  
      case DECREMENT:
        return {
          ...state,
          cartItems: state.cartItems.filter((el) =>
            el.product === payload.product
              ? { ...el, qty: (payload.qty -= 1) }
              : el
          ),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  