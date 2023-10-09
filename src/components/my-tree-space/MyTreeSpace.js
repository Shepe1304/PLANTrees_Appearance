import React, { useState } from "react";
import "./MyTreeSpace.css";
import locationDot from "../general-components/images/locationDot.png";
import suggestionExample2 from "../general-components/images/suggestionExample2.png";
import axios from "axios"

const MyTreeSpace = () => {
  const [location, setLocation] = useState("");

  const [showImage, setShowImage] = useState(false);

  const HandlePhotoSubmitClicked = () => {
    setShowImage(!showImage);
  };

  // Replace this with your actual image data (base64-encoded)
const base64Image = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/...";

// Create a JSON object with the image data
const requestData = { image: base64Image };

// Define the API endpoint
const apiUrl = "http://localhost:5000/upload_image"; // Replace with your Flask API URL

// Define an async function to make the POST request
async function uploadImage() {
  try {
    const response = await axios.post(apiUrl, requestData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Response from server:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async function to send the POST request
// uploadImage();

  // const HandlePhotoSubmitSend = () => {
  //   //send photo to server
  //   console.log("CLICKED");
  // }

  return (
    <div className="my-tree-space">
      <div className="my-tree-space--headline">
        DON'T KNOW WHERE TO PLANT THAT SEED?
      </div>
      <div className="my-tree-space--sub_headline">
        Drop a photo of your garden and we'll help you without adieu!
      </div>
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
            onClick={HandlePhotoSubmitClicked}
          >
            <div style={{ fontSize: "50px" }}>&#43;</div>
            <label htmlFor="" style={{ fontWeight: "bold" }}>
              Drop your photo here
            </label>
          </div>
        )}
        {/* <button onClick={uploadImage}>SUBMIT</button> */}
      </div>
    </div>
  );
};

export default MyTreeSpace;
