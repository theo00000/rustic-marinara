import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logoTerang from "../../assets/image/logo.webp";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Tutup menu setiap pindah halaman
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Lock body scroll saat menu terbuka
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
          <NavLink to="/about-us" className={navClass}>ABOUT US</NavLink>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </header>

      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <nav className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <NavLink to="/" className={navClass}>HOME</NavLink>
        <NavLink to="/menu" className={navClass}>MENU</NavLink>
        <NavLink to="/deals" className={navClass}>DEALS</NavLink>
        <NavLink to="/about-us" className={navClass}>ABOUT US</NavLink>
      </nav>
    </>
  );
}
