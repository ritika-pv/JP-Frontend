import React from "react";
import "./delivery_items.css";
const DeliveryItems = ({ item }) => {
  return (
    <div>
      <div className="delivery-item-cover">
        <img
          src={item.images.url}
          className="delivery-item-image"
          alt={item.images.public_id}
        />
      </div>
      <div className="delivery-item-title">{item.category_name}</div>
    </div>
  );
};

export default DeliveryItems;
  