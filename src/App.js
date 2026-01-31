import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import AddProduct from "./pages/Admin/AddProduct";
import ProductList from "./pages/Admin/ProductList";
import useTokenExpiryCheck from "./components/useTokenExpiryCheck";
import { LoaderProvider } from "./components/LoaderContext";

const Home = lazy(() => import("./pages/Home/Home"));
const Menu = lazy(() => import("./pages/Menu/Menu"));
const MenuDetails = lazy(() => import("./pages/Menu/MenuDetails"));
const Deals = lazy(() => import("./pages/Deals/Deals"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));

// 🔹 Protected route
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};

// 🔹 Admin route
const AdminRoute = ({ children }) => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  if (!user || user.role !== "admin") return <Navigate to="/" replace />;
  return children;
};

// 🔹 Scroll + AOS
function ScrollToTopAndAOS() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, [location]);
  return null;
}

function App() {
  useTokenExpiryCheck(); // ✅ sekarang aman, karena berada di dalam Router

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <LoaderProvider>
      <Suspense
        fallback={
          <div style={{ textAlign: "center", padding: "50px" }}>Loading...</div>
        }
      >
        <Header />
        <ScrollToTopAndAOS />
        <main>
          <Routes>
            {/* PUBLIC */}
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:id" element={<MenuDetails />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/about-us" element={<AboutUs />} />
            {/* PROFILE */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            {/* AUTH */}
            <Route
              path="/login"
              element={
                localStorage.getItem("token") ? (
                  <Navigate to="/" replace />
                ) : (
                  <Login />
                )
              }
            />
            <Route path="/register" element={<Register />} />

            {/* ADMIN */}
            <Route
              path="/admin/add-product"
              element={
                <ProtectedRoute>
                  <AdminRoute>
                    <AddProduct />
                  </AdminRoute>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/product"
              element={
                <ProtectedRoute>
                  <AdminRoute>
                    <ProductList />
                  </AdminRoute>
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </Suspense>
    </LoaderProvider>
  );
}

export default App;
