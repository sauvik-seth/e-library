import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Books from "./components/Books";
import Team from "./components/Team";

function App() {
  return (
    <Router>
      <Navigation />
      <main className="min-h-screen">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:categoryName" element={<Books />} />
        <Route path="/all-books" element={<Books />} />
        <Route path="/our-team" element={<Team />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
