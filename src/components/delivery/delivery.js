import React from "react";
import Filters from "../common/filters/filters";
import "./delivery.css";
const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id:3,
    title:"Delivery Time",
    icon:<i className="fi fi-rr-biking absolute-center"></i>
  },
  {
    id:4,
    title:"Pure Veg"
  }
];

export const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList = {deliveryFilters}/>
      </div>
    </div>
  );
};
