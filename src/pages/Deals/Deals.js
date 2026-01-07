import React from "react";
import "./deals.css";

import specialOffer1 from "../../assets/slider/special-offer-1.png";
import specialOffer2 from "../../assets/slider/special-offer-2.png";
import specialOffer3 from "../../assets/slider/special-offer-3.png";

const promos = [
  {
    id: 1,
    image: specialOffer1,
    title: "June’s Special Offer",
    code: "JUNE25",
    details: [
      "2 Appetizers for only 69K",
      "Choose Wings, Garlic Bread or Mozzarella Bites",
      "25% OFF Cheese Heaven Pizza",
    ],
  },
  {
    id: 2,
    image: specialOffer2,
    title: "Pizza & Pasta Combo Deals",
    code: "COMBO",
    details: [
      "1 Pizza + 1 Pasta from 150K",
      "Perfect combo for sharing",
      "Best seller menu included",
    ],
  },
  {
    id: 3,
    image: specialOffer3,
    title: "Family Meals Special Offer",
    code: "FAMILY",
    details: [
      "3 Pizzas + 4 Drinks for 275K",
      "Mix & match your favorites",
      "Ideal for family dinner",
    ],
  },
];

const Deals = () => {
  return (
    <main className="deals-container">
      {promos.map((promo, index) => (
        <section
          key={promo.id}
          className={`special-offers special-offers-${index + 1}`}
        >
          <div className="offer-image">
            <img src={promo.image} alt={promo.title} />
          </div>

          <div className="offer-content">
            <h2>{promo.title}</h2>

            <span className="promo-code">
              Use code: <strong>{promo.code}</strong>
            </span>

            <ul>
              {promo.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Deals;
