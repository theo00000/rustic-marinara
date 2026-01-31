import { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import "./profile.css";

export default function Profile() {
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  let user = null;

  try {
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch (err) {
    localStorage.removeItem("user");
    user = null;
  }

  // Optional: update page title
  useEffect(() => {
    if (user) {
      document.title = `${user.name} • Profile`;
    }
    return () => {
      document.title = "Rustic Marinara";
    };
  }, [user]);

  // Jika tidak ada user atau token -> redirect ke login
  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }

  // Logout: bersihkan storage dan pindah ke login, tanpa reload penuh
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  // Buat inisial untuk avatar jika tidak ada gambar
  const initials = user.name
    ? user.name
        .split(" ")
        .map((s) => s[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "U";

  return (
    <section className="profile-page" aria-labelledby="profile-heading">
      <div className="profile-wrapper">
        <article
          className="profile-card"
          role="region"
          aria-label="User profile"
        >
          <header className="profile-header">
            <div className="avatar" aria-hidden="true">
              <span>{initials}</span>
            </div>
            <div className="profile-title">
              <h1 id="profile-heading">{user.name || "Nama tidak tersedia"}</h1>
              <p className="profile-sub">Member</p>
            </div>
          </header>

          <dl className="profile-list">
            <div className="profile-item">
              <dt>Nama</dt>
              <dd>{user.name || "-"}</dd>
            </div>

            <div className="profile-item">
              <dt>Email</dt>
              <dd>{user.email || "-"}</dd>
            </div>

            <div className="profile-item">
              <dt>Role</dt>
              <dd>{user.role || "user"}</dd>
            </div>
          </dl>

          <div className="profile-actions">
            <button
              className="btn btn-outline"
              onClick={() => navigate("/profile/edit")}
              aria-label="Edit profile"
            >
              Edit Profile
            </button>

            <button
              className="logout-btn"
              onClick={handleLogout}
              aria-label="Logout"
            >
              Logout
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
