import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = lazy(() => import("./pages/Home/Home"));
const Menu = lazy(() => import("./pages/Menu/Menu"));
const Deals = lazy(() => import("./pages/Deals/Deals"));
const AboutUs = lazy(() => import("./pages/AboutUs/About-us"));

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
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>}>
      <Header />
      <ScrollToTopAndAOS /> 
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
      </main>
      <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
