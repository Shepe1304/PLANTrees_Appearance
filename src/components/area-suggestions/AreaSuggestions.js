import React, { useState } from "react";
import "./AreaSuggestions.css";
import locationDot from "../general-components/images/locationDot.png";
import suggestionExample from "../general-components/images/suggestionExample.png";
import PotentialSpot from "./PotentialSpot";

const AreaSuggestions = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="area-suggestions">
      <div className="area-suggestions--left">
        <div className="area-suggestions--location">
          <img src={locationDot} alt="you are at" />
          <input
            onClick={(e) => setLocation(e.target.value)}
            placeholder="Your location..."
            defaultValue={"Khu đô thị Celadon City"}
          />
        </div>
        <div className="area-suggestions--info">
          <div className="area-suggestions--info_heading">POTENTIAL SPOTS</div>
          <div className="area-suggestions--info_text">
            <PotentialSpot />
            <PotentialSpot />
            <PotentialSpot />
          </div>
        </div>
      </div>
      <div className="area-suggestions--map">
        <img className="area-suggestions--snapshot" src={suggestionExample} />
      </div>
    </div>
  );
};

export default AreaSuggestions;
