import React, { useReducer } from "react";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppinReducers";
import ProductItem from "./ProductItem";
import styles from "../App.module.css";
import CartItem from "./CartItem";
import { TYPES } from "../actions/ShoppingActions";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;
  
  const addToCart = (id) => {
    console.log(id)
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div  >
    {cart[0] && <div className={styles.carBuy}>
         <h2>Carrito de Compras</h2>
            <h3>Productos</h3>

            <h3>Carrito</h3>
            <article className={styles.cartItems}>
              <button className={styles.btn} onClick={clearCart}>Limpiar Carrito</button>
              {cart.map((item, index) => (
                <CartItem key={index} data={item} delFromCart={delFromCart} />
              ))}
            </article>
      </div>}
      
    
      <article className={styles.gridResponsive}>
      
      {products.map((product) => {
        return (
          <div key={product.id}>
            <ProductItem addToCart={addToCart} data={product}/>
            <br />

          
          </div>
        );
      })}
      </article>
    </div>
  );
};

export default ShoppingCart;
