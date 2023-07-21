// src/components/NavBar.js
import React from "react";

const links = ["home", "about", "projects"]; // Array of strings for each link

function NavBar() {
  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
