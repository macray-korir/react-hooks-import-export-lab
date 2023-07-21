import React from "react";
import { image } from "../data/user"; // Import the image variable from user.js

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <img src={image} alt="Profile" />
      <p>Welcome to my portfolio site!</p>
    </div>
  );
}

export default About;
