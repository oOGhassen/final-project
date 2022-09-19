import { ADDPRODUCT, ADDPRODUCT_FAIL, ADDPRODUCT_SUCCESS, DELETEPRODUCT, DETAILPRODUCT, GETPRODUCTS,  GET_DIGITAL_PRODUCT,  UPDATEPRODUCT } from "../actionTypes/actionTypesProduct";
import axios from "axios";

  export const createProduct = (newProduct) => async (dispatch) => {
    dispatch({ type: ADDPRODUCT });
    try {
      const res = await axios.post("/product/addproduct", newProduct);
      dispatch({
        type: ADDPRODUCT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: ADDPRODUCT_FAIL,
        payload: error.response.data,
      });
    }
  };
  export const getAllProducts = () => async(dispatch) => {
    try {
      const res = await axios.get("/product/getallproduct");
      dispatch (
        {
        type : GETPRODUCTS,
        payload : res.data
        }
      );
    } catch (error) {
      alert("error getting Products !!")
    }
  };
  export const getDigitalProd = () => async(dispatch) => {
    try {
      const res = await axios.get("/product/getDigitalProducts");
      dispatch (
        {
        type : GET_DIGITAL_PRODUCT,
        payload : res.data
        }
      );
    } catch (error) {
      alert("error Getting Products !!")
    }
  };
  export const getOneProduct = (_id) => async(dispatch) => {
    try {
      const res = await axios.get(`/product/getOneProduct/${_id}`);
      dispatch(
        {
          type : DETAILPRODUCT,
          payload : res.data
        }
      )
    } catch (error) {
      alert("error Getting the product !!");
    }
  };
  export const editProduct = (product) => async(dispatch) => {
    try {
        const res = await axios.put(`/product/updateProduct/${product._id}`, product);
        dispatch(
            {
                type : UPDATEPRODUCT,
                payload : res.data
            }
        )
    } catch (error) {
        alert("Error Updating Product !!");
    }
  };
  export const removeProduct = (_id) => async(dispatch) => {
    try {
      const res = axios.delete(`/product/deleteOneProduct/${_id}`);
      dispatch(
        {
          type : DELETEPRODUCT,
          payload : res.data
        }
      )
    } catch (error) {
      alert("error in deleting Product !!")
    }
  };