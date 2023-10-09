import React from "react";
import "./AreaSuggestions.css"
import greenPlant from "../general-components/images/plant-green.svg";

const PotentialSpot = () => {
  return (
    <div className="area-suggestions--info_item">
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <img src={greenPlant} alt="" />
        <div className="area-suggestions--info_item_heading">Place 1...</div>
      </div>
      <div className="area-suggestions--info_item_description">
        A place where it rains a lot, and has hard soil.
        <div className="are-suggestions--info_treeTypes_suggestions">
          Suitable tree types may be{" "}
          <span className="area-suggestions--info_treeTypes">
            Oak, Bonsai, and Sakura
          </span>
        </div>
      </div>
    </div>
  );
};

export default PotentialSpot;
