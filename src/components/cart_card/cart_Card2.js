import React, { useState, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useDispatch, useSelector } from "react-redux";
import { Items } from "./Items";
import "./cart.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";

export const Cart_Card2 = () => {
  const navigate = useNavigate();

  const cartProduct = useSelector((state) => state.cart.cartItems);
  console.log(cartProduct, "cart producttss");
  return (
    <>
      <section className="main-cart-section">
        <div className="header-cart">
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="Logo"
            className="header-logo-cart cur-pointer"
          />
        </div>

        <div className="sub-header">
          <div>
            <div className="cart-description collection-title">Food Cart</div>
            <div className="total-items">
              You have{" "}
              <span className="total-items-count">{cartProduct.length}</span>{" "}
              items in Food Cart
            </div>
          </div>
          <div>
            <div className="card-total collection-title">
              Cart Total : <span>2200 rs</span>
            </div>
            <div className="inclusive">(inclusive of all taxes)</div>
          </div>
        </div>
        <Divider />
        <div>
          <div className="cart-items">
            <div className="cart-items-container">
              <Scrollbars>
                {cartProduct.map((curItem) => {
                  return (
                    <Items
                      key={curItem.cartItems.slug}
                      {...curItem.cartItems}
                    />
                  );
                })}
              </Scrollbars>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart_Card2;
