import { Routes, Route, Link } from "react-router-dom";import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Games from "./pages/games";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import spiderlogo from "./assets/spiderbec.png";

export default function App() {
  return (
      <div className="min-h-screen flex flex-col bg-black text-white overflow-x-hidden">
      <nav className="flex items-center justify-between px-6 sm:px-12 py-4 md:py-6 bg-black text-white font-sans">
  <Link to="/" className="flex items-center shrink-0">
    <img
      src={spiderlogo}
      alt="Beck's Logo"
      className="h-20 sm:h-24 md:h-30 w-auto object-contain hover:scale-120 transition-transform duration-200"
    />
  </Link>

  <div className="flex items-center space-x-6 sm:space-x-10 text-base sm:text-lg font-medium">
    <Link to="/" className="text-purple-200 hover:text-purple-400 transition-colors">
      Home
    </Link>
    <Link to="portfolio" className="text-purple-200 hover:text-purple-400 transition-colors">
      Portfolio
    </Link>
    <Link to="games" className="text-purple-200 hover:text-purple-400 transition-colors">
      Games
    </Link>
    <Link
      to="contact"
      className="bg-purple-700 px-5 py-2 rounded-lg text-white font-semibold hover:bg-purple-600 transition-colors shadow-md hover:shadow-purple-700/40"
    >
      Contact
    </Link>
  </div>
</nav>





        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/games" element={<Games />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
  );
}
