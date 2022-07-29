import React from "react";


const Card = (city) => {
 
  const { title, desc, image } = city;
  return (
    <div className="cards">
      <div className="title">
        <h1>{title}</h1>
      </div>

      <img src={image} alt="" />
      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
