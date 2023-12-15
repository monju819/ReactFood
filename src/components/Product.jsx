import React from "react";

const Product = ({ name, price, image, description }) => {
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
          <button>Add To Cart</button>
        </p>
      </article>
    </div>
  );
};

export default Product;
