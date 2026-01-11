import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import menuBanner from "../../assets/banner/menu-banner.png";
import "./menu.css";

const categories = [
  "Must Try",
  "Pizza",
  "Pasta",
  "Appetizer",
  "Drinks",
];

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Must Try");

  // 🔹 fetch products
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredProducts = products.filter(
    (item) => item.category === activeCategory
  );

  return (
    <main className="menu-container">
      {/* 🍕 ILLUSTRATION BANNER */}
      <section className="menu-banner">
        <img
          src={menuBanner}
          alt="Rustic Marinara Illustration Banner"
        />
      </section>
      {/* HEADER */}
      <header className="menu-header">
        <h1 className="menu-title">Buon Appetito 🍕</h1>

        <nav className="menu-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>
      </header>

      {/* SECTION */}
      <section className="menu-section">
        <div className="menu-section-top">
          <h2>{activeCategory}</h2>

          <p className="menu-desc">
            Our most loved dishes, handcrafted with our signature Rustic
            Marinara Sauce and premium ingredients.
          </p>
        </div>

        {/* GRID */}
        <div className="menu-grid">
          {filteredProducts.map((item) => (
            <div className="menu-card" key={item._id}>
              <img
                src={`http://localhost:5000${item.image}`}
                alt={item.name}
                className="menu-img"
              />

              <div className="menu-info">
                <h3>{item.name}</h3>
                <span className="menu-price">
                  Rp {item.price.toLocaleString("id-ID")}
                </span>
              </div>

              <button className="add-btn">+</button>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredProducts.length === 0 && (
          <p className="menu-empty">Menu not available.</p>
        )}
      </section>

      {/* FOOTER LINK */}
      <div className="menu-footer">
        <NavLink to="/" className="back-home">
          ← Back to Home
        </NavLink>
      </div>
    </main>
  );
}
