import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/add_to_cart_slice";
import "./cart.css";
import { useSelector } from "react-redux";

export const Items = ({ _id, name, images, price, ingredients, quantity }) => {
  // const dispatch = useDispatch();
  // const cartProduct = useSelector((state) => [state.cart.cartItems]);
  function handleDelete() {}
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={images.url} alt={name} />
        </div>
        <div>
          <div className="title">{name}</div>
          <div style={{ textAlign: "center" }}>₹{price}</div>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus cur-pointer"></i>
          <div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
            {quantity}
          </div>
          <i className="fas fa-plus add cur-pointer"></i>
        </div>

        <div className="price">{(price*quantity)}</div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove cur-pointer"
            onClick={handleDelete}
          ></i>
        </div>
      </div>
      <hr />
    </>
  );
};
