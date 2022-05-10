import React from "react";
import { data } from "../../Data/Data";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const { header } = data;

  return (
    <div>
      <div>
        <h1>{header.title}</h1>
        <h3>{header.subtitle}</h3>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
