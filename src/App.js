import React, { useState } from "react";
import "./styles.css";

const food = {
  southIndian: [
    {
      name: "Dosa",
      rating: "4.8/5",
      description:
        "A dosa is a thin pancake or crepe originating from South India, made from a fermented batter predominantly consisting of lentils and rice.Its main ingredients are rice and black gram, ground together in a fine, smooth batter with a dash of salt, then fermented."
    },
    {
      name: "idli",
      rating: "4.3/5",
      description:
        "Idli or idly ( pronunciation (help·info)) (/ɪdliː/) are a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India and in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils (de-husked) and rice."
    },
    {
      name: "puliyogare",
      rating: "4/5",
      description:
        "Puliyogare is a tangy flavored South Indian rice preparation, which is generally served as a snack. This popular dish is widely appreciated for the thick spicy tamarind sauce blended with a cup of rice and peanuts. Traditionally, this dish was made by utilizing some boiled or even steamed rice combined with freshly made tamarind juice."
    },
    {
      name: "Bisi bele baath",
      rating: "4.9/5",
      description:
        "Bisi bele bath is a flavorsome, spicy and slightly tangy meal made with lentils, rice, mixed vegetables and a super aromatic spice powder"
    },
    {
      name: "Ragi balls",
      rating: "4/5",
      description:
        "Ragi mudde are gluten-free traditional balls made with finger millet flour. Finger millet is known as ragi in South India."
    }
  ],

  northIndian: [
    {
      name: "Chole bhature",
      rating: "4.8/5",
      description:
        "Chole bhature is a food dish popular in the Northern areas of the Indian subcontinent. It is a combination of chana masala (spicy white chickpeas) and bhatura/puri, a fried bread made from maida.Chole bhature is often eaten as a breakfast dish, sometimes accompanied with lassi."
    },
    {
      name: "palak panner",
      rating: "4.5/5",
      description:
        "Palak paneer is a classic curry dish from North Indian cuisine made with fresh spinach, onions, spices, paneer and herbs."
    },
    {
      name: "Rajma chawal",
      rating: "4/5",
      description:
        "Rajma recipe also known as rajma masala is a North Indian dish made with kidney beans, onions, tomatoes, spices and herbs."
    },
    {
      name: "Samosa",
      rating: "4.5/5",
      description:
        "The samosa is made with all purpose flour locally known as maida pastry stuffed with some filling, generally a mixture of mashed boiled"
    },
    {}
  ],
  Chinese: [
    {
      name: "Gobi manchurian",
      rating: "4.9/5",
      description:
        "Gobi Manchurian is made with batter coated, fried, crispy cauliflower florets tossed in this spicy, sweet and hot sause"
    },
    {
      name: "Noodles",
      rating: "4/5",
      description:
        "Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings."
    },
    {
      name: "Fried rice",
      rating: "4.2/5",
      description:
        "Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs and vegetables"
    },
    {
      name: "Hot and sour soup",
      rating: "3.8/5",
      description:
        "Hot and Sour soup is a spicy and hot soup made with mixed fresh vegetables, mushrooms, spices and soy sauce."
    },
    {
      name: "Spring roll",
      rating: "3/5",
      description:
        "Spring rolls are filled with minced vegetables, seafood, poultry, or meat, folded into a food wrapper made from dough or rice paper that is rolled after being folded and is then baked, deep fried, or steamed."
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
              <div style={{ fontSize: "smaller" }}> {items.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
