import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../components/Footer/Footer"

import { Pagination, Autoplay } from "swiper/modules";

import specialOffer1 from "../../assets/slider/special-offer-1.png";
import specialOffer2 from "../../assets/slider/special-offer-2.png";
import specialOffer3 from "../../assets/slider/special-offer-3.png";
import Jalapeno from "../../assets/menu/jalapeno.png";

import "./home.css";

const Home = () => {
  const promos = [
    { id: 1, image: specialOffer1, alt: "June Special Offer" },
    { id: 2, image: specialOffer2, alt: "Combo Deals Pizza & Pasta" },
    { id: 3, image: specialOffer3, alt: "Family Meals Special Offer" },
  ];

  return (
    <div className="home-container">

      {/* PROMO SLIDER */}
      <div className="grab-swiper">
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
              <img
                src={promo.image}
                alt={promo.alt}
                className="slider-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* HERO */}
      <div className="home-hero">
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
            <div className="header-text">
              <h2>Get to know everyone faves</h2>
            </div>
            <a href="menu">See all menu</a>
          </div>

          {/* FOOD CAROUSEL */}
          <div className="carousel">
            {[1, 2, 3, 4].map((_, i) => (
              <div className="card-item" key={i}>
                <img
                  src={Jalapeno}
                  alt="Margherita Classic Jalapeno"
                  className="pizza-image"
                />
                <p className="pizza-name">
                  Margherita Classic <br /> Jalapeno
                </p>
              </div>
            ))}
          </div>
          {/* TESTIMONIAL SECTION */}
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
                <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>
                    “The crust is perfectly crisp, and the Rustic Marinara Sauce adds that
                    rich, tangy depth. I find myself ordering it every weekend.”
                </p>
                <span>— Andy M.</span>
                </div>

                <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>
                    “We love the combo meals. Great value and perfect for dinner date.
                    Rustic marinara is amore.”
                </p>
                <span>— Barbie & Ken</span>
                </div>

                <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>
                    “The Mango Sunset Fizz surprised me. Super refreshing and perfect
                    with spicy tuna pizza.”
                </p>
                <span>— Charlie C.</span>
                </div>

                <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>
                    “Tasted just like the pizza I had in Rome. Absolute comfort food.”
                </p>
                <span>— Doramon</span>
                </div>

                <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>
                    “If you love cheese, go for their Cheese Heaven. It just hit different.”
                </p>
                <span>— Edward</span>
                </div>
            </div>
        </section>
        </div>
      </div>

    </div>
  );
};

export default Home;
