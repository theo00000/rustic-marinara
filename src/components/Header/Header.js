import { NavLink } from "react-router-dom";
import logoTerang from '../../assets/image/logo.webp'
import { useState } from "react";
import { useEffect } from "react";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("lock", menuOpen);

    return () => {
      document.body.classList.remove("lock");
    };
  }, [menuOpen]);

  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <>
      <header className="header-container">
        <div className="logo-wrap">
          <img src={logoTerang} alt="Rustic Marinara Logo" />
        </div>

        <nav className="nav-desktop">
          <NavLink to="/" className={navClass}>HOME</NavLink>
          <NavLink to="/menu" className={navClass}>MENU</NavLink>
          <NavLink to="/deals" className={navClass}>DEALS</NavLink>
          <NavLink to="../pages/About-us.js" className={navClass}>ABOUT US</NavLink>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
          ☰
        </button>
      </header>

      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <nav className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </button>

        <NavLink to="/" className={navClass} onClick={() => setMenuOpen(false)}>HOME</NavLink>
        <NavLink to="/menu" className={navClass} onClick={() => setMenuOpen(false)}>MENU</NavLink>
        <NavLink to="/deals" className={navClass} onClick={() => setMenuOpen(false)}>DEALS</NavLink>
        <NavLink to="/about-us" className={navClass} onClick={() => setMenuOpen(false)}>ABOUT US</NavLink>
      </nav>
    </>
  );
}
