/*
  FELADAT — Router bővítés

  1️. Hozz létre egy új fájlt:  Services.jsx
      – tartalma: írj ki egy címet
        "Szolgáltatások"

  2️. Importáld az App.jsx-be:
      import Services from "./Services";

  3️. Add hozzá a menühöz:
      Link → /services   (szöveg: Szolgáltatások)

  4️. Hozd létre az útvonalat:
      <Route path="/services" element={<Services />} />

*/

import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

// ÚJ oldal


function App() {
  return (
    <>
      <nav>
        <Link to="/">Főoldal</Link>{" "}
        <Link to="/about">Rólunk</Link>{" "}
        <Link to="/contact">Kapcsolat</Link>{" "}
        {/* új menüpont */}
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* új útvonal */}
       
    </>
  );
}

export default App;
