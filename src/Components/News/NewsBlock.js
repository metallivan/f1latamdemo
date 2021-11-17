import React from "react";

const NewsBlock = ({ id, title, text, image }) => {
  return (
    // <div>
      <figure key={id} className="news-block">
        <img className="news-img" src={image} alt={title} />
        <figcaption className="news-info">
          <h2 className="news-info__title">{title}</h2>
          <hr />
          <p className="news-info__text">{text}</p>
        </figcaption>
      </figure>
    // </div>
  );
};

export { NewsBlock };
