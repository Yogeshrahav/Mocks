import React from "react";
import "../App.css";

const Header = ({ data }) => {
   return (
    <header className="container">
      <h2>{data.dynamicWebContent.heading}</h2>
      <div className="logo-container">
        {data.dynamicWebContent.contents.map((item, index) => (
          <img key={index} src={item.image.url} alt={item.image.altText} className="logo" />
        ))}
      </div>
    </header>
  );
};

export default Header;
