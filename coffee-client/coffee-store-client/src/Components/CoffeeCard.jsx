import React from "react";

const CoffeeCard = ({ coffee }) => {
  const { name, price, quantity, photo } = coffee;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <div> 
          <h2 className="text-4xl">{name}</h2>
          <p className="text-xl">Price: {price}</p>
          <p className="text-xl">Quantity: {quantity}</p>
          </div>
         
          <div className="card-actions justify-end">
            <div className="join join-vertical">
              <button className="btn join-item">Button</button>
              <button className="btn join-item">Button</button>
              <button className="btn join-item">Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
