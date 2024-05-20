import React from "react";
import { useEffect, useState } from "react";
import Delete from "../items/Delete";
import axios from "axios";
function Itemcoffee() {

  return (
    <>
      {dataCoffee ? (
        <div className="loading">
          {dataCoffee.map((coffees) => (
            <div className="card shadow-sm" key={coffees._id}>
              <h3 className="card-title"> {coffees.name}</h3>
              <p>Description: {coffees.description}</p>
              <p> Serving: {coffees.temp}</p>
              <p>Price: Php {coffees.price}.00</p>
              <p>{coffees.createdAt}.00</p>
              <Delete />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Itemcoffee;
