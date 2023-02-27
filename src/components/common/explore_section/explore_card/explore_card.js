import React, { useState } from "react";
import "./explore_card.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../reducers/add_to_cart_slice";

const ExploreCard = ({ dishes }) => {
  const dispatch = useDispatch();
  const [style, setStyle] = useState({ visibility: "hidden" });
  const name = dishes?.name ?? "";
  const coverImg = dishes?.images?.url;
  const deliveryTime = `${dishes?.delivey_time} mins` ?? "";
  const rating = dishes?.ratings ?? "";
  const approxPrice = `₹${dishes?.price} for one` ?? "";
  const discount = `${dishes?.discount}% OFF` ?? [];
  const handleAddtoCart = () => {
    dispatch(addToCart({ cartItems: dishes }));
  };
  return (
    <div
      className="explore-card cur-pointer"
      onMouseEnter={(e) => {
        setStyle({ visibility: "visible" });
      }}
      onMouseLeave={(e) => {
        setStyle({ visibility: "hidden" });
      }}
    >
      <div className="explore-card-cover">
        <img src={coverImg} alt={name} className="explore-card-image" />
        <div className="delivery-time">{deliveryTime}</div>
        {discount && <div className="discount absolute-center">{discount}</div>}
      </div>
      <div className="res-row">
        <div className="res-name">{name}</div>
        {rating && (
          <div className="res-rating absolute-center">
            {rating}
            <i className="fi fi-rr-star absolute-center" />
          </div>
        )}
      </div>
      <div className="res-row">
        {approxPrice && <div className="res-price">{approxPrice}</div>}
        <Stack direction="row" spacing={2}>
          <Button
            onClick={handleAddtoCart}
            style={style}
            className="add-to-cart"
            variant="contained"
            endIcon={<AddIcon />}
          >
            ADD
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default ExploreCard;
