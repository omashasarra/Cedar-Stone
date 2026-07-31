import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import StoneTypes from "./pages/StoneTypes";
import Projects from "./pages/Projects";
import RequestQuote from "./pages/RequestQuote";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stone-types" element={<StoneTypes />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/request-quote" element={<RequestQuote />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
