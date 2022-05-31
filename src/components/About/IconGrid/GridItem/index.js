import React from "react";
import "./index.scss"

const GridItem = ({ icon }) => {

  return (
    <div style={{'--color': `${icon.color}`}} className="flex-item--icon">
      <img src={icon.img} alt="" />
    </div>
  );
};

export default GridItem;
