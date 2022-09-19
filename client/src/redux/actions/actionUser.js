import { GET_PROFIL,GET_PROFIL_FAIL,GET_PROFIL_SUCCESS,SIGNIN,SIGNIN_FAIL,SIGNIN_SUCCESS,SIGN_OUT,REGISTER,REGISTER_FAIL,REGISTER_SUCCESS,} from "../actionTypes/actionTypesUser";
import axios from "axios";
  export const userRegister = (newUser) => async (dispatch) => {
    dispatch({ type: REGISTER });
    try {
      const res = await axios.post("/user/register", newUser);
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data,
      });
    }
  };
  export const userSignIn = (user) => async (dispatch) => {
    dispatch({ type: SIGNIN });
    try {
      const res = await axios.post("/user/signin", user);
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: SIGNIN_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: SIGNIN_FAIL,
        payload: error.response.data,
      });
    }
  };
  export const getProfil = () => async(dispatch) => {
    dispatch({ type:GET_PROFIL })
    const token=localStorage.getItem("token");
    const config={
      headers:{
        Authorization:token
      }
    };
    try {
      const res = await axios.get("/user/profile", config)
      dispatch({
        type:GET_PROFIL_SUCCESS,
        payload:res.data
      });
    } catch (error) {
      dispatch({
        type:GET_PROFIL_FAIL,
        payload: error.response.data,
      });
    }
  };

  export const userSignOut = () => {

  localStorage.clear()

document.location.href='/';

return {
  type: SIGN_OUT
}

}