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
            {item.contents[0] && (
              <div className="author">
                <img src={item.contents[0].image.url} alt={item.contents[0].heading} />
                <div>
                  <strong>{item.contents[0].heading}</strong>
                  <p>{parse(item.contents[0].description)}</p> 
                </div>
              </div>
            )}
            <a href={item.contentUrl} className="link" dangerouslySetInnerHTML={{ __html: item.contentUrlText }}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Body;
