import React from "react";
import "./index.scss";

const SiteItem = ({ work }) => {
  return (
    <div
      style={{ backgroundColor: `${work.background}` }}
      className="flex-item--site"
    >
      <a href={work.url} target="_blank" rel="noreferrer">
        <img src={work.logo} alt={work.companyName + " logo"}/>
      </a>
    </div>
  );
};

export default SiteItem;
