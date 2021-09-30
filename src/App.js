import React, { useState } from "react";
import "./styles.css";

const food = {
  southIndian: [
    { name: "Dosa", rating: "4.8/5" },
    { name: "idli", rating: "4.3/5" },
    { name: "puliyogare", rating: "4/5" }
  ],

  northIndian: [
    {
      name: "Parata",
      rating: "4/5"
    },
    {
      name: "palak panner",
      rating: "4.5/5"
    }
  ],
  sweet: [
    {
      name: "mysore-pak",
      rating: "4/5"
    },
    {
      name: "jaamun",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  const [selectedItem, setItem] = useState("southIndian");
  function genreClickHandler(dish) {
    setItem(dish);
  }
  return (
    <div className="App">
      <h1> Food menu </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite foods. Select a cusine to get started{" "}
      </p>

      <div>
        {Object.keys(food).map((dish) => (
          <button
            onClick={() => genreClickHandler(dish)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {dish}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {food[selectedItem].map((items) => (
            <li
              key={items.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {items.name} </div>
              <div style={{ fontSize: "smaller" }}> {items.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
