import React, { useEffect } from "react";
import "./about.css";

import pastaImg from "../../assets/about/signature-sauce.png";
import dish1 from "../../assets/about/dish-1.png";
import dish2 from "../../assets/about/dish-2.png";
import dish3 from "../../assets/about/dish-3.png";
import dish4 from "../../assets/about/dish-4.png";
import story1 from "../../assets/about/story-1.png";
import story2 from "../../assets/about/story-2.png";
import story3 from "../../assets/about/story-3.png";

const AboutUs = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-us">
      {/* Eyebrow & Title */}
      <p className="about-eyebrow reveal delay-1">
        “Where Timeless Tradition Meets Every Slice”
      </p>
      <h2 className="about-title reveal delay-2">
        The <span>SAUCE</span> that starts it all…
      </h2>

      {/* Intro Section */}
      <section className="about-intro">
        <p className="reveal delay-3">
          From the sun-drenched coasts of Southern Italy came a Marinara sauce.
          A rustic cooked slow and low sauce born in seaside kitchens and made by
          fishermen’s wives — simple, hearty, and full of soul.
          — the ultimate comfort food.
        </p>
        <div className="about-img-wrapper reveal delay-4">
          <img src={story1} alt="Historical Kitchen" />
        </div>
      </section>

      {/* Signature Section */}
      <section className="about-signature">
        <div className="about-img-wrapper reveal delay-1">
          <img src={pastaImg} alt="Signature Sauce" />
        </div>
        <div className="signature-content reveal delay-2">
          <h3>Our <span>Signature</span> Sauce</h3>
          <p>
            We’ve kept the soul of the original and infused it with depth,
            balance, and care. Our Rustic Marinara is slow-simmered daily using
            sun-ripened tomatoes, golden garlic, fresh basil, and extra virgin
            olive oil.
          </p>
        </div>
      </section>

      {/* Quote Utama */}
      <p className="about-quote reveal delay-3">
        “A Sauce That Whispers Stories in Every Spoon”
      </p>

      {/* Dishes Section (Symmetrical Layout) */}
      <section className="about-dishes">
        <div className="dish-group side-left">
          <img src={dish1} alt="Dish 1" className="reveal delay-1" />
          <img src={dish2} alt="Dish 2" className="reveal delay-2" />
        </div>

        <div className="dish-text-wrapper reveal delay-3">
          <p className="about-text">
            With our signature Rustic Marinara Sauce as the base, we craft pizzas,
            pastas, and appetizers that blend tradition with bold creativity — from
            the classic Margherita and fiery Spicy Tuna Jalapeño, to comforting Lasagna
            Tradizionale, Spaghetti Bolognese, and Garlic Breadsticks served with our rich, flavorful dip.
          </p>
        </div>

        <div className="dish-group side-right">
          <img src={dish3} alt="Dish 3" className="reveal delay-3" />
          <img src={dish4} alt="Dish 4" className="reveal delay-4" />
        </div>
      </section>

      {/* Bottom Identity */}
      <h3 className="about-bottom-title reveal delay-1">
        More than just a <span>PASTA</span>,
      </h3>
      <p className="about-text center reveal delay-2">
        Rustic Marinara isn’t just a recipe. It’s our identity. 
        Every dish we serve is a celebration of time-honored flavor, slow cooking, and genuine connection. 
        We invite you to taste history — with a bold, modern twist.
      </p>

      {/* Story Section */}
      <section className="about-story">
        <img src={story2} alt="Atmosphere" className="reveal delay-1" />
        <img src={story3} alt="Dining" className="reveal delay-2" />
      </section>

      <p className="about-footer reveal delay-3">
        “We Don’t Just Serve Food — We Share a Story”
      </p>
    </main>
  );
};

export default AboutUs;