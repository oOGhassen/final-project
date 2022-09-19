import { ADDPRODUCT, ADDPRODUCT_FAIL, ADDPRODUCT_SUCCESS, DELETEPRODUCT, DETAILPRODUCT, GETPRODUCTS,  GET_DIGITAL_PRODUCT,  UPDATEPRODUCT } from "../actionTypes/actionTypesProduct";

const init = {
    products:null,
    error:null,
    loading:false
}

export const productReducer = ( state = init , {type, payload} ) => {
    switch (type) {
        case ADDPRODUCT: 
            return {
                ...state,loading:true
            }
        case ADDPRODUCT_SUCCESS:
            return {
                ...state, products:[...state.products, payload],loading:false
            }
        case ADDPRODUCT_FAIL:
            return {
                ...state, error:payload,loading:false
            }
        case GETPRODUCTS:
        case GET_DIGITAL_PRODUCT:
            return {
                ...state, products:payload
            }
        case UPDATEPRODUCT:
            return {
                ...state, products:state.products.map( el => el._id === payload._id ?payload :el)
            }
        case DELETEPRODUCT:
            return {
                ...state, products:state.products.filter(el => el._id !== payload)
            }
        case DETAILPRODUCT:
            return {
                ...state, products:payload
            }
    
        default:
            return state
    }
}

export default productReducer;