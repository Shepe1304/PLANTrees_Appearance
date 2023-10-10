import React, { useState } from "react";
import "./MyTreeSpace.css";
import locationDot from "../general-components/images/locationDot.png";
import suggestionExample2 from "../general-components/images/suggestionExample2.png";
import axios from "axios";

const MyTreeSpace = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // const [fileName, setFileName] = useState("");

  // const [location, setLocation] = useState("");

  const [submitted, setSumbitted] = useState(false);

  const [filepath, setFilepath] = useState("");

  const [showImage, setShowImage] = useState(false);

  const HandlePhotoSubmitClicked = () => {
    setShowImage(!showImage);
  };

  // Replace this with your actual image data (base64-encoded)
  // const base64Image = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/...";

  // Create a JSON object with the image data
  // const requestData = { image: base64Image };

  // Define the API endpoint
  // const apiUrl = "http://localhost:5000/upload_image"; // Replace with your Flask API URL

  // Define an async function to make the POST request
  // async function uploadImage() {
  //   try {
  //     const response = await axios.post(apiUrl, requestData, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     console.log("Response from server:", response.data);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }

  // Call the async function to send the POST request
  // uploadImage();

  // const HandlePhotoSubmitSend = () => {
  //   //send photo to server
  //   console.log("CLICKED");
  // }

  const HandlePhotoSubmit = () => {
    console.log(selectedImage.name);
    setFilepath(`${selectedImage.name.split(".")[0]}_cv.png`);
    setSumbitted(true);
  };

  return (
    <div className="my-tree-space">
      <div className="my-tree-space--headline">
        DON'T KNOW WHERE TO PLANT THAT SEED?
      </div>
      <div className="my-tree-space--sub_headline">
        Drop a photo of your garden and we'll help you without adieu!
      </div>
      {selectedImage ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img
            alt="not found"
            style={{
              maxHeight: "500px",
              margin: "30px 0",
              borderRadius: "10px",
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.4)",
            }}
            // src={URL.createObjectURL(selectedImage)}
            src={require(`./img/${filepath}`)}
          />
          <div
            className="my-tree-space--buttons"
            style={{ display: "flex", gap: "16px", margin: "0 auto" }}
          >
            <button
              onClick={() => {
                setSelectedImage(null);
              }}
              style={{
                backgroundColor: "rgb(221, 112, 112)",
                color: "black",
                fontSize: "20px",
              }}
            >
              REMOVE
            </button>
            {submitted ? null : (
              <button
                onClick={HandlePhotoSubmit}
                style={{
                  backgroundColor: "lightgreen",
                  color: "black",
                  fontSize: "20px",
                }}
              >
                SUBMIT
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="my-tree-space--preview_box">
          {showImage ? (
            <div
              className="my-tree-space--snapshot"
              onClick={HandlePhotoSubmitClicked}
            >
              <img src={suggestionExample2} alt="" />
            </div>
          ) : (
            <div
              className="my-tree-space--upload_box"
              // onClick={HandlePhotoSubmitClicked}
            >
              {/* <div style={{ fontSize: "50px" }}>&#43;</div>
            <label htmlFor="" style={{ fontWeight: "bold" }}>
              Drop your photo here
            </label> */}
              <input
                type="file"
                onChange={(e) => {
                  // console.log(e.target.files[0].name);
                  setSelectedImage(e.target.files[0]);
                  setFilepath(e.target.files[0].name);
                  setSumbitted(false)
                }}
                style={{ marginLeft: "50px" }}
              />
            </div>
          )}
          {/* <button onClick={uploadImage}>SUBMIT</button> */}
        </div>
      )}
    </div>
  );
};

export default MyTreeSpace;
