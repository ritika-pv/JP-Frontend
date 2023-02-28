import React, { useContext } from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../reducers/add_to_cart_slice";
export const Items = ({ slug, _id, name, images, price, ingredients }) => {
  const dispatch = useDispatch();
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
          <input type="text" placeholder="2" />
          <i className="fas fa-plus add cur-pointer"></i>
        </div>

        <div className="price">{price}</div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove cur-pointer"
            onClick={() => dispatch(removeFromCart(_id))}
          ></i>
        </div>
      </div>

      <hr />
    </>
  );
};
