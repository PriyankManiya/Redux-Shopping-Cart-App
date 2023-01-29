import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import "./Cart.css";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        <li>
          {cartItems.map((item) => (
            <CartItem className="cartItem"
              id={item.id}
              price={item.price}
              name={item.name}
              quantity={item.quantity}
              total={item.totalPrice}
            />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default CartItems;
