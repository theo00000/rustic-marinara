import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import QRCode from "react-qr-code";
import { NavLink } from "react-router-dom";

import { Pagination, Autoplay } from "swiper/modules";

import specialOffer1 from "../../assets/slider/special-offer-1.png";
import specialOffer2 from "../../assets/slider/special-offer-2.png";
import specialOffer3 from "../../assets/slider/special-offer-3.png";

import mockUp from "../../assets/mockup/mockup.png";
import "./home.css";

const promos = [
  { id: 1, image: specialOffer1, alt: "June Special Offer" },
  { id: 2, image: specialOffer2, alt: "Combo Deals Pizza & Pasta" },
  { id: 3, image: specialOffer3, alt: "Family Meals Special Offer" },
];

const testimonials = [
  {
    id: 1,
    name: "Andy M.",
    text: "The crust is perfectly crisp, and the Rustic Marinara Sauce adds that rich, tangy depth. I find myself ordering it every weekend.",
  },
  {
    id: 2,
    name: "Barbie & Ken",
    text: "We love the combo meals. Great value and perfect for dinner date. Rustic marinara is amore.",
  },
  {
    id: 3,
    name: "Charlie C.",
    text: "The Mango Sunset Fizz surprised me. Super refreshing and perfect with spicy tuna pizza.",
  },
  {
    id: 4,
    name: "Doramon",
    text: "Tasted just like the pizza I had in Rome. Absolute comfort food.",
  },
  {
    id: 5,
    name: "Edward",
    text: "If you love cheese, go for their Cheese Heaven. It just hit different.",
  },
  {
    id: 6,
    name: "Robert",
    text: "The service is fast and well-organized. From the website design to the ordering flow, everything feels thoughtfully built. Simple, yet professional.",
  },
];

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
  }, []);

  // 🔹 fetch API
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  // 🔹 reveal animation
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="home-container">
      {/* PROMO */}
      <section className="grab-swiper" aria-label="Promotional Offers">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView="auto"
          centeredSlides
          spaceBetween={14}
          loop
          grabCursor
          speed={900}
          resistanceRatio={0.65}
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          className="promo-swiper"
        >
          {promos.map((promo) => (
            <SwiperSlide key={promo.id}>
              <img src={promo.image} alt={promo.alt} className="slider-img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* HERO */}
      <section className="home-hero">
        <div className="hero-content">
          <h1>
            Welcome to <span className="brand-name">Rustic Marinara</span>
          </h1>
          <p className="hero-subtitle">
            Taste the heart of Italy—fresh from our oven to your table.
            <br /> Made with our signature Rustic Marinara Sauce and premium
            ingredients.
          </p>

          <div className="header-menu">
            <h2>Get to know everyone’s favourites</h2>
            <NavLink to="/menu">See all menu</NavLink>
          </div>

          {/* 🔥 API CAROUSEL */}
          <section className="carousel">
            {products.slice(0, 4).map((product) => {
              return (
                <div className="card-item" key={product._id}>
                  <img
                    src={`http://localhost:5000${product.image}`}
                    alt={product.name}
                    className="pizza-image"
                  />
                  <p className="pizza-name">{product.name}</p>
                </div>
              );
            })}
          </section>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial-section">
        <div className="testimonial-top">
          <h2 className="testimonial-eyebrow">Enjoy more foods cheaper!</h2>
          <NavLink to="/deals" className="testimonial-link">
            See all deals
          </NavLink>
        </div>

        <div className="testimonial-promo">
          <img src={specialOffer1} alt="Family Meal Special Offer" />
          <img src={specialOffer2} alt="June Special Offer" />
        </div>

        <h1 className="testimonial-title">
          What Our <span>Customers</span> Are Saying
        </h1>

        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card reveal" key={t.id}>
              <div className="stars">★★★★★</div>
              <p>{t.text}</p>
              <span>— {t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* DOWNLOAD APP */}
      <section className="download-app-section reveal delay-1">
        <div className="download-app-container">
          <div className="app-mockup reveal delay-2">
            <div className="mockup-placeholder">
              <img
                src={mockUp}
                alt="Mockup APP Rustic Marinara"
                className="mockup-img"
              />
            </div>
          </div>
          <div className="app-content reveal delay-3">
            <h2>
              Download <br />
              <span>Our Resto Mobile App</span>
            </h2>
            <p>
              Get more exclusive discounts & voucher to apply with Our Resto
              Mobile app
            </p>
          </div>{" "}
          <button className="qr-button reveal delay-4">
            <div className="qr-container-inner">
              <QRCode value="https://rusticmarinara.com/app" size={50} />
            </div>
            <span className="qr-text-hint">SCAN ME</span>
          </button>
        </div>
      </section>
    </main>
  );
}
