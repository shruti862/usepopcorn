import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";
// function Test(){
// const [movieRating,setMovieRating]=useState(0);
//   return<div>
//     <StarRating onSetRating={setMovieRating} color="blue" maxRating={5}/>
//     <p>This movie was rated {movieRating} stars</p>
//   </div>
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* <StarRating maxRating={5}
    messages={["Terrible","Bad","Okay","Good","Amazing"]}
    className="test"
    
    />
    <StarRating defaultRating={3}/>
    <Test/> */}
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={2} />

    <Test /> */}
  </React.StrictMode>
);
