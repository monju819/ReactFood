import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { useSelector } from "react-redux";

import Modal from "@mui/material/Modal";
import CartItem from "./CartItem";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const amount = useSelector((state) => state.cart.amount);
  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logo} alt="" />
          <h1>ReactFood</h1>
        </div>

        <nav>
          <button onClick={handleOpen}>Cart ({amount})</button>
        </nav>
      </header>
      <div>
        <Modal className="modal" open={open} onClose={handleClose}>
          <div className="cart">
            <h2>Your Shopping Cart</h2>
            <ul>
              <CartItem
                item={{ title: "Test Item", quantity: 3, total: 18, price: 6 }}
              />
            </ul>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Header;
