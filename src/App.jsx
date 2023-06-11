import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/homes/Home";
import Navbar from "./components/Navbar";
import Themes from "./components/Themes";
import About from "./pages/about/about";
import Portfolio from "./pages/portfolio/portfolio";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
