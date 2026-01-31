import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logoTerang from "../../assets/image/logo.webp";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/menu", label: "MENU" },
    { to: "/deals", label: "DEALS" },
    { to: "/about-us", label: "ABOUT US" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setMenuOpen(false);
    navigate("/login");
  };

  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  // Cek auth
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (token && storedUser) setUser(JSON.parse(storedUser));
    else setUser(null);
  }, [location]);

  // Tutup sidebar saat pindah halaman
  useEffect(() => setMenuOpen(false), [location]);

  // Lock scroll saat sidebar open
  useEffect(() => {
    document.body.classList.toggle("lock", menuOpen);
    return () => document.body.classList.remove("lock");
  }, [menuOpen]);

  // Staggered animation + resize listener
  useEffect(() => {
    const links = document.querySelectorAll(".sidebar .nav-link");
    links.forEach((link, index) => {
      link.style.setProperty("--delay", `${index * 0.05}s`);
    });

    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="header-container">
        {/* Logo */}
        <div className="logo-wrap">
          <img src={logoTerang} alt="Rustic Marinara Logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Side / Auth */}
        <div className="header-right">
          {user ? (
            <>
              <span className="nav-user">Hi, {user.name}</span>

              <NavLink to="/profile" className={navClass}>
                PROFILE
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login" className={navClass}>
                LOGIN
              </NavLink>

              <NavLink to="/register" className={navClass}>
                REGISTER
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-sidebar"
        >
          ☰
        </button>
      </header>

      {/* Overlay */}
      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <nav
        id="mobile-sidebar"
        className={`sidebar ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          className="close-btn"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <div className="sidebar-content">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={navClass}>
              {link.label}
            </NavLink>
          ))}

          {user ? (
            <>
              <span className="nav-user-mobile">Hi, {user.name}</span>

              <NavLink to="/profile" className={navClass}>
                PROFILE
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login" className={navClass}>
                LOGIN
              </NavLink>

              <NavLink to="/register" className={navClass}>
                REGISTER
              </NavLink>
            </>
          )}
        </div>

        {user && (
          <button className="logout-btn" onClick={handleLogout}>
            LOGOUT
          </button>
        )}
      </nav>
    </>
  );
}
