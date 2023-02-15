import React from "react";
import "./filters.css";

const Filters = ({filterList}) => {
  return <div>
    {filterList && filterList.map((filter)=>{
        return <div>{filter.title}</div>
    })}
  </div>;
};

export default Filters;
