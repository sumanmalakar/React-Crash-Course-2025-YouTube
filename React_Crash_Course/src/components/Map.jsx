import React from "react";

const Map = () => {
    
  const items = ["Apple", "Bnana", "Cherry", "Mongo","superman"];

  return (
    <div>
      <h1>We are learning map right now...</h1>

      {items.map((data,index) => (
        <div key={index}>
          <li>{data}</li>
        </div>
      ))}
    </div>
  );
};

export default Map;
