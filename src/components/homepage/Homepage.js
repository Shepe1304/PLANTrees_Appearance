import "./Homepage.css";
import React, { useState } from "react";
import hero from "../general-components/images/irene-davila-O1PHdGGcljQ-unsplash.jpg";

const Homepage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const HandleFileSubmit = (e) => {};

  return (
    <div className="homepage">
      <div className="homepage--hero">
        <div className="homepage--hero--dark"></div>
        <img src={hero} alt="" />
        <div className="homepage--slogan bold">
          <form action="">
            <input
              type="file"
              onChange={(e) => {
                console.log(e.target.files[0].name);
                setSelectedImage(e.target.files[0]);
              }}
            />
            {selectedImage ? (
              <>
                <img
                  alt="not found"
                  width={"250px"}
                  src={URL.createObjectURL(selectedImage)}
                />
                <button
                  onClick={() => {
                    setSelectedImage(null);
                  }}
                >
                  REMOVE
                </button>
              </>
            ) : null}
          </form>
          <div>
            FIND THE <span className="light-green">PERFECT</span> PLACE TO{" "}
            <span className="light-green">PLANT</span> YOUR{" "}
            <span className="gold">HAPPINESS</span>,
          </div>
          <div className="homepage--slogan--bigger">ONE SEED AT A TIME</div>
        </div>
      </div>

      <div className="homepage--who_we_are">
        <div className="homepage--who_we_are--org_name bold">
          <span style={{ color: "green" }}>PLANT</span>rees
        </div>
        <div className="homepage--who_we_are--description">
          ... is website that provides insights into the tree distribution near
          you, and suggest areas with potential for planting!
        </div>
        <div className="homepage--who_we_are--why bold">
          <span style={{ color: "green" }}>WHY</span>, YOU ASK?
        </div>
        <div className="homepage--who_we_are--why_answer">
          Because we would love to accompany you on the journey to make our
          planet more <span style={{ color: "green" }}>green!</span>
        </div>
      </div>

      <div className="homepage--what_to_do">
        <div className="homepage--what_to_do--heading bold">
          <span
            style={{
              backgroundColor: "lightgreen",
              padding: "5px 10px",
              borderRadius: "8px",
            }}
          >
            WHAT YOU CAN DO
          </span>
        </div>
        <div className="homepage--what_to_do--options">
          <div className="homepage--what_to_do--option">
            <div className="homepage--what_to_do--dark"></div>
            <div className="homepage--what_to_do--option_text">
              TREE LIBRARY
            </div>
            {/* Should the user really see information about trees in general, or is that irrelevant? */}
            <div className="homepage--what_to_do--option_desc">
              Where you can see information about trees, share health records of
              trees you know, and see other users' posts and inputs.
            </div>
          </div>
          <div className="homepage--what_to_do--option">
            <div className="homepage--what_to_do--dark"></div>
            <div className="homepage--what_to_do--option_text">
              MY TREE LIBRARY
            </div>
            <div className="homepage--what_to_do--option_desc">
              See your past posts and tree health inputs.
            </div>
          </div>
          <div className="homepage--what_to_do--option">
            <div className="homepage--what_to_do--dark"></div>
            <div className="homepage--what_to_do--option_text">
              MY TREE SPACE
            </div>
            <div className="homepage--what_to_do--option_desc">
              Upload a photo and see potential spots for planting, as well as
              tree and plant type suggestions.
            </div>
          </div>
          <div className="homepage--what_to_do--option">
            <div className="homepage--what_to_do--dark"></div>
            <div className="homepage--what_to_do--option_text">
              AREA SUGGESTIONS
            </div>
            <div className="homepage--what_to_do--option_desc">
              See potential areas for planting near you through a sattelite map
              view.
            </div>
          </div>
        </div>
        <div className="homepage--what_to_do--get_started">
          <button>GET STARTED</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
