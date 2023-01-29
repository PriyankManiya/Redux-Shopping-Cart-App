import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { authActions } from "../store/auth-slice";

const Cart = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCart = () => {
    dispatch(cartActions.toggleCart());
  };
const logOut = () => {
    dispatch(authActions.logout());
}

  return (
    <div className="cartIcon">
      <button onClick={toggleCart}>Cart: {quantity} Items</button>
      <button style={{'marginLeft' : '15px'}}  onClick={logOut}>Log-Out !</button>
    </div>
  );
};

export default Cart;
