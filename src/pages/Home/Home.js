import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import QRCode from "react-qr-code";
import { NavLink } from "react-router-dom";

import { Pagination, Autoplay } from "swiper/modules";

import specialOffer1 from "../../assets/slider/special-offer-1.png";
import specialOffer2 from "../../assets/slider/special-offer-2.png";
import specialOffer3 from "../../assets/slider/special-offer-3.png";
import Jalapeno from "../../assets/menu/jalapeno.png";
import Pepperoni from "../../assets/menu/pepperoni.png";
import Cheese from "../../assets/menu/cheese.png";
import Veggie from "../../assets/menu/veggie.png";
import mockUp from "../../assets/mockup/mockup.png";

import "./home.css";

const promos = [
  { id: 1, image: specialOffer1, alt: "June Special Offer" },
  { id: 2, image: specialOffer2, alt: "Combo Deals Pizza & Pasta" },
  { id: 3, image: specialOffer3, alt: "Family Meals Special Offer" },
];

const menuItems = [
  { id: 1, name: "Margherita Classic Jalapeno", image: Jalapeno },
  { id: 2, name: "Pepperoni Delight", image: Pepperoni },
  { id: 3, name: "Cheese Heaven", image: Cheese },
  { id: 4, name: "Veggie Delight", image: Veggie },
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

const Home = () => {

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
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="home-container">

      {/* PROMO SLIDER */}
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
            <SwiperSlide key={promo.id} className="promo-slide">
              <img src={promo.image} alt={promo.alt} className="slider-img" />
              <div className="slide-caption">
                <h2>{promo.alt}</h2>
                <p>Enjoy this week’s special offer!</p>
              </div>
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
            <br />
            Made with our signature rustic marinara sauce and premium ingredients.
          </p>

          <div className="header-menu">
            <h2>Get to know everyone’s favourites</h2>
            <NavLink to="/menu" className="menu-link">See all menu</NavLink>
          </div>

          <section className="carousel">
            {menuItems.map((item) => (
              <div className="card-item" key={item.id}>
                <img src={item.image} alt={item.name} className="pizza-image" />
                <p className="pizza-name">{item.name}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial-section">
        <div className="testimonial-top">
                <h2 className="testimonial-eyebrow">Enjoy more foods cheaper!</h2>
                <a href="deals" className="testimonial-link">See all deals</a>
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
              <div className="testimonial-card reveal delay-1" key={t.id}>
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
            <h2>Download <br /><span>Our Resto Mobile App</span></h2>
            <p>Get more exclusive discounts & voucher to apply with Our Resto Mobile app</p>
          </div>

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
};

export default Home;
