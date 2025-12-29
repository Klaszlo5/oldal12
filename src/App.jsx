import { Routes, Route, Link } from "react-router-dom";
import Home from "../src/home";
import About from "src/About.jsx";
import Contact from "src/Contact.jsx";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Főoldal</Link> |{" "}
        <Link to="/about">Rólunk</Link> |{" "}
        <Link to="/contact">Kapcsolat</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;