import React, { useEffect } from "react";
import "./about.css";

import signatureImg from "../../assets/about/signature-sauce.png";
import dish1 from "../../assets/about/dish-1.png";
import dish2 from "../../assets/about/dish-2.png";
import dish3 from "../../assets/about/dish-3.png";
import dish4 from "../../assets/about/dish-4.png";
import story1 from "../../assets/about/story-1.png";
import story2 from "../../assets/about/story-2.png";
import story3 from "../../assets/about/story-3.png";

const AboutUs = () => {
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
    <main className="about-us">
      <p className="about-eyebrow reveal delay-1">
        “Where Timeless Tradition Meets Every Slice”
      </p>

      <h2 className="about-title reveal delay-2">
        The <span>SAUCE</span> that starts it all…
      </h2>

      <section className="about-intro">
        <p className="reveal delay-3">
          From the sun-drenched coasts of Southern Italy came a Marinara sauce.
          Slow-cooked, rustic, and passed down through generations of seaside
          kitchens — hearty, soulful, and the ultimate comfort food.
        </p>

        <img
          src={signatureImg}
          alt="Rustic Marinara Sauce"
          className="reveal delay-4"
        />
      </section>

      <section className="about-signature">
        <img
          src={signatureImg}
          alt="Signature Sauce"
          className="reveal delay-1"
        />

        <div className="reveal delay-2">
          <h3>
            Our <span>Signature</span> Sauce
          </h3>
          <p>
            Slow-simmered daily using sun-ripened tomatoes, golden garlic,
            fresh basil, and extra virgin olive oil. Smooth, savory, and just a
            little wild — like good food should be.
          </p>
        </div>
      </section>

      <p className="about-quote reveal delay-3">
        “A Sauce That Whispers Stories in Every Spoon”
      </p>

      <section className="about-dishes">
        <img src={dish1} alt="Pasta" className="reveal delay-1" />
        <img src={dish2} alt="Pizza" className="reveal delay-2" />
        <img src={dish3} alt="Lasagna" className="reveal delay-3" />
        <img src={dish4} alt="Lasagna" className="reveal delay-4" />
      </section>

      <p className="about-text reveal delay-1">
        With our signature Rustic Marinara Sauce as the base, we craft pizzas,
        pastas, and appetizers that blend tradition with bold creativity — from
        classic Margherita to comforting Lasagna Tradizionale.
      </p>

      <h3 className="about-bottom-title reveal delay-2">
        More than just a <span>PASTA</span>,
      </h3>

      <p className="about-text center reveal delay-3">
        Rustic Marinara isn’t just a recipe — it’s our identity. Every dish
        celebrates slow cooking, honest flavor, and genuine connection.
      </p>

      <section className="about-story">
        <img src={story1} alt="Story 1" className="reveal delay-1" />
        <img src={story2} alt="Story 2" className="reveal delay-2" />
        <img src={story3} alt="Story 3" className="reveal delay-3" />
      </section>

      <p className="about-footer reveal delay-4">
        “We Don’t Just Serve Food — We Share a Story”
      </p>
    </main>
  );
};

export default AboutUs;
