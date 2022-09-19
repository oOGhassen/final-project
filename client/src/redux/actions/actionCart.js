import axios from "axios";
import { CARD_ADD_ITEM, CARD_REMOVE_ITEM, DECREMENT, INCREMENT } from "../actionTypes/actionTypesCart";


export const addToCart = (_id, qty) => async (dispatch) => {
  const { data } = await axios.get(`/product/getOneProduct/${_id}`);
  dispatch({
    type: CARD_ADD_ITEM,
    payload: {
      product: data._id,
      nameProd: data.nameProd,
      image: data.image,
      price: data.price,
      qty
    },
  });
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({
    type: CARD_REMOVE_ITEM,
    payload: id,
  });
  
};

export const incrementQty = (cartItem) => (dispatch) => {
  dispatch(
    {
      type: INCREMENT,
      payload: cartItem
    }
  )
}; 

export const decrementQty = (cartItem) => (dispatch) => {
  dispatch(
    {
      type: DECREMENT,
      payload: cartItem
    }
  )
};
