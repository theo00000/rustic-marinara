import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useTokenExpiryCheck() {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const token = localStorage.getItem("token");
      if (!token) return;

      const payload = JSON.parse(atob(token.split(".")[1]));
      if (Date.now() >= payload.exp * 1000) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login", { replace: true });
        alert("Sesi Anda telah habis. Silakan login kembali.");
      }
    }, 1000 * 60); // cek tiap menit

    return () => clearInterval(interval);
  }, [navigate]);
}
