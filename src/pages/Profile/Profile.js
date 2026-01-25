import { Navigate } from "react-router-dom";
import "./profile.css";

export default function Profile() {
  const storedUser = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const user = storedUser ? JSON.parse(storedUser) : null;

  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <section className="profile-page">
      <div className="profile-card">
        <h1>My Profile</h1>

        <div className="profile-item">
          <span>Nama</span>
          <p>{user.name || "-"}</p>
        </div>

        <div className="profile-item">
          <span>Email</span>
          <p>{user.email || "-"}</p>
        </div>

        <div className="profile-item">
          <span>Role</span>
          <p>{user.role || "user"}</p>
        </div>
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </section>
  );
}
