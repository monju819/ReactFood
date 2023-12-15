import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const Meals = () => {
  const { products, total, amount } = useSelector((state) => state.cart);

  return (
    <div id="meals">
      {products.map((item) => (
        <Product
          key={new Date().getTime + Math.random()}
          name={item.name}
          price={item.price}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Meals;
