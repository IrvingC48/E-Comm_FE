import React, { useReducer } from 'react'
import CartReducer from './CartReducer';
import CartContext from './CartContext'

const CartState = (props) => {
  const initialState = {
    products: [],
    amountTotal: 0
  };

  const [state, dispatch] = useReducer(CartReducer, initialState)

  const addToCart = (product) => {
    state.products.push(product);
    dispatch({
      type: 'ADD_TO_CART',
      payload: state.products
    });
  };

  const removeOneFromCart = (index) => {
    for (let i = 0; i < state.products.length; i++) {
      if (i === index){
        state.products.splice(i, 1);
        break;
      };
    };

    dispatch({
      type: 'REMOVE_ONE_FROM_CART',
      payload: state.products
    })
  };

  // const removeAllCart = () => {

  // };

  const getTotal = (total) => {
    dispatch({
      type: 'GET_TOTAL',
      payload: total
    });
  };

  return (
    <CartContext.Provider value={{
      products: state.products,
      amountTotal: state.amountTotal,
      addToCart,
      removeOneFromCart,
      // removeAllCart,
      getTotal
    }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState
