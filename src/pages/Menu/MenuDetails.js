import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./menuDetails.css";

export default function MenuDetail() {
  const { id } = useParams();
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => setMenu(res.data.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!menu) return <p className="menu-detail-loading">Loading...</p>;

  return (
    <section className="menu-detail">
      <div className="menu-detail-wrapper">
        <Link to="/menu" className="detail-back">
          ← Back to Menu
        </Link>

        <div className="detail-card">
          <div className="detail-image">
            <img
              src={`http://localhost:5000${menu.image}`}
              alt={menu.name}
            />
          </div>

          <div className="detail-info">
            <h1>{menu.name}</h1>

            <p className="detail-price">
              Rp {menu.price.toLocaleString("id-ID")}
            </p>

            <p className="detail-desc">
              {menu.description ||
                "Crafted with our signature Rustic Marinara sauce using premium ingredients."}
            </p>

            <button className="detail-add-btn">
              Add to Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
