import React from "react";
import "../App.css";
import parse from "html-react-parser";

const Body = ({ data }) => {
  return (
    <section className="outer">
      <h2>{data.dynamicWebContent.heading}</h2>
      <div className="outer-container">
        {data.dynamicWebContent.contents.map((item, index) => (
          <div key={index} className="inner-container">
            <h1> ❛❛ </h1>
            <p>{parse(item.description)}</p>
            {item.contents && (
              <div className="author">
                <img src={item.contents.image.url} alt={item.contents.heading} />
                <div>
                  <strong>{item.contents.heading}</strong>
                  <p>{parse(item.contents.description ) }</p>
                </div>
              </div>
            )}
            <link className="link">href={item.contentUrl} {parse(item.contentUrlText)}</link> 
          </div>
        ))}
      </div>
    </section>
  );
};

export default Body;
