import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Terapkan Lazy Loading untuk semua halaman utama
const Home = lazy(() => import("./pages/Home/Home"));
const Menu = lazy(() => import("./pages/Menu/Menu"));
const Deals = lazy(() => import("./pages/Deals/Deals"));
const AboutUs = lazy(() => import("./pages/AboutUs/About-us"));

function App() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <main>
        {/* Suspense akan menampilkan Loading... saat berpindah halaman */}
        <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;