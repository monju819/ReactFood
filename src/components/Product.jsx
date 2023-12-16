import React from "react";
import { useDispatch } from "react-redux";
import { addTocart } from "../slices/cartSlice";
const Product = ({ name, price, image, description }) => {
  const dispatch = useDispatch();

  return (
    <div className="meal-item">
      <article>
        <img src={image} alt="" />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{price}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <button onClick={() => dispatch(addTocart({ image, name, price }))}>
            Add To Cart
          </button>
        </p>
      </article>
    </div>
  );
};

export default Product;
