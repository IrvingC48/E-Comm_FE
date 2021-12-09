import { ADD_TO_CART, REMOVE_ONE_FROM_CART, REMOVE_ALL_CART, CLEAN_CART, GET_TOTAL } from '../types';

const CartReducer = ( state, action ) => {
  const { payload, type } = action

  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: payload
      }
    case REMOVE_ONE_FROM_CART:
      return {
        ...state,
        products: payload
      }
    case REMOVE_ALL_CART:
      return {
        ...state,
        products: payload
      }
    case CLEAN_CART:
      return {
        ...state,
        products: payload
      }
    case GET_TOTAL:
      return {
        ...state,
        amountTotal: payload
      }
    default:
      return state;
  }
};

export default CartReducer;