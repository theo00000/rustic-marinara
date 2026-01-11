import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

import AddProduct from "./pages/Admin/AddProduct";
import ProductList from "./pages/Admin/ProductList";

const Home = lazy(() => import("./pages/Home/Home"));
const Menu = lazy(() => import("./pages/Menu/Menu"));
const MenuDetails = lazy(() => import("./pages/Menu/MenuDetails"));
const Deals = lazy(() => import("./pages/Deals/Deals"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));

function ScrollToTopAndAOS() {
  const location = useLocation();

  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{ textAlign: "center", padding: "50px" }}>Loading...</div>}>
        <Header />
        <ScrollToTopAndAOS />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:id" element={<MenuDetails />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/about-us" element={<AboutUs />} />

            {/* ADMIN */}
            <Route path="/admin/add-product" element={<AddProduct />} />
            <Route path="/admin/product" element={<ProductList />} />
          </Routes>
        </main>

        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
