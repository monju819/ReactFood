import React from "react";
import { useSelector } from "react-redux";

const CartItem = (props) => {
  // const { total, price } = props.item;
  const cartItem = useSelector((state) => state.cart.items);
  return cartItem.map((item) => (
    <li className="item">
      <header>
        <h3>{item.name}</h3>
        <div className="price">
          {/* ${total.toFixed(2)}{" "} */}
          {/* <span className="itemprice">(${price.toFixed(2)}/item)</span> */}$
          {item.price}
        </div>
      </header>
      <div className="details">
        <img src={item.image} alt="" />
        <div className="actions">
          <button>Remove</button>
        </div>
      </div>
    </li>
  ));
};

export default CartItem;
