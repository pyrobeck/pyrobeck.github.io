import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Games from "./pages/games";
import Contact from "./pages/contact";
import ThreeDWork from "./pages/3dwork";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-x-hidden">
      <Navbar />

      <div className="flex-1 pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/games" element={<Games />} />
          <Route path="/3dwork" element={<ThreeDWork />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}