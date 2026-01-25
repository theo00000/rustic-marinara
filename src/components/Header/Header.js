import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logoTerang from "../../assets/image/logo.webp";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // cek auth
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, [location]);

  // tutup sidebar saat pindah halaman
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // lock scroll saat sidebar open
  useEffect(() => {
    document.body.classList.toggle("lock", menuOpen);
    return () => document.body.classList.remove("lock");
  }, [menuOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <>
      <header className="header-container">
        {/* LEFT */}
        <div className="logo-wrap">
          <img src={logoTerang} alt="Rustic Marinara Logo" />
        </div>

        {/* CENTER */}
        <nav className="nav-desktop">
          <NavLink to="/" className={navClass}>
            HOME
          </NavLink>
          <NavLink to="/menu" className={navClass}>
            MENU
          </NavLink>
          <NavLink to="/deals" className={navClass}>
            DEALS
          </NavLink>
          <NavLink to="/about-us" className={navClass}>
            ABOUT US
          </NavLink>
        </nav>

        {/* RIGHT */}
        <div className="header-right">
          {user ? (
            <>
              <span className="nav-user">Hi, {user.name}</span>
              <NavLink to="/profile" className={navClass}>
                PROFILE
              </NavLink>
              <button className="logout-btn" onClick={handleLogout}>
                LOGOUT
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={navClass}>
                LOGIN
              </NavLink>
              <NavLink to="/register" className="nav-link register">
                REGISTER
              </NavLink>
            </>
          )}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </header>

      {/* OVERLAY */}
      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE SIDEBAR */}
      <nav className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </button>

        <NavLink to="/" className={navClass}>
          HOME
        </NavLink>
        <NavLink to="/menu" className={navClass}>
          MENU
        </NavLink>
        <NavLink to="/deals" className={navClass}>
          DEALS
        </NavLink>
        <NavLink to="/about-us" className={navClass}>
          ABOUT US
        </NavLink>

        {user ? (
          <>
            <span className="nav-user mobile">Hi, {user.name}</span>
            <NavLink to="/profile" className={navClass}>
              PROFILE
            </NavLink>
            <button className="logout-btn" onClick={handleLogout}>
              LOGOUT
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={navClass}>
              LOGIN
            </NavLink>
            <NavLink to="/register" className="nav-link register">
              REGISTER
            </NavLink>
          </>
        )}
      </nav>
    </>
  );
}
