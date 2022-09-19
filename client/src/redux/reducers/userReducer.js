import {
    GET_PROFIL,
    GET_PROFIL_FAIL,
    GET_PROFIL_SUCCESS,
    SIGNIN,
    SIGNIN_FAIL,
    SIGNIN_SUCCESS,
    SIGN_OUT,
    REGISTER,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
  } from "../actionTypes/actionTypesUser";
  
  const init = {
    user: null,
    error: null,
    loading: false,
    token: null,
    isAuth: false,
  };
  
  export const userReducer = (state = init, { type, payload }) => {
    switch (type) {
      case REGISTER:
      case SIGNIN:
      case GET_PROFIL:
        return {
          ...state,
          loading: true,
        };
  
      case REGISTER_FAIL:
      case SIGNIN_FAIL:
      case GET_PROFIL_FAIL:
        return {
          ...state,
          loading: false,
          error: payload,
        };
  
      // case SIGN_UP_SUCCESS:
      //   return {
      //     ...state,
      //     loading: false,
      //     user: payload.user,
      //   };
  
      case SIGNIN_SUCCESS:
      case REGISTER_SUCCESS:
        return{
              ...state, loading:false, error:null, user:payload.user, token:payload.token, isAuth:true
          }
  
      case GET_PROFIL_SUCCESS:
        return{
                ...state, loading:false, error:null, user:payload, isAuth:true, token:payload.token
          }
      case SIGN_OUT:
            return {
                state
            }
  
      default:
        return state;
    }
  };
  
  export default userReducer;