import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Főoldal</Link>{" "}

        {/* 😈 MÁSODIK HIBA: itt direkt nem Link van! */}
        <a href="/about">Rólunk</a>{" "}

        <Link to="/contatc">Kapcsolat</Link>

        {/* 
          😈 HIBA #1 — Elírt URL: "/contatc"

          🔎 KÉRDÉS — gondolkodós:

          A felhasználó rákattint a „Kapcsolat” menüre.
          Logikusan azt várná, hogy megnyíljon a kapcsolat oldal…

          De most NEM történik meg.

          – nézd meg a Link "to" értékét
          – nézd meg a hozzá tartozó Route path értékét
          – egyezik a kettő, BETŰRŐL BETŰRE?

          Írd le:
          „Azért nem működik a Kapcsolat menü, mert …”


          ✅ MEGOLDÁS:

              Link:   /contatc   ❌
              Route:  /contact   ✔️

          Javítás:

              <Link to="/contact">Kapcsolat</Link>
        */}

        {/* 
          😈 HIBA #2 — Helytelen link típus

          Itt most szándékosan NEM Link-et használtunk, hanem <a>-t:
              
              <a href="/about">Rólunk</a>

          🔎 KÉRDÉS:

          – Mi történik, amikor erre kattintunk?
          – Miért tölti újra a teljes oldalt?
          – Miért NEM jó ez egy React alkalmazásban?

          Gondold végig:

          A <Link> NEM frissíti újra az oldalt,
          csak a tartalom cserélődik.
          De az <a> mindig újratölti a teljes weboldalt,
          mintha egy teljesen új lapra mennénk át.


          ✅ MEGOLDÁS:

          A helyes megoldás:

              <Link to="/about">Rólunk</Link>

          Szabály:
          **react-router-dom esetén mindig Link-et használunk,
          nem sima <a>-t.**
        */}
      </nav>

      <Routes>
        {/* Főoldal */}
        <Route path="/" element={<Home />} />

        {/* Rólunk oldal */}
        <Route path="/about" element={<About />} />

        {/* Kapcsolat oldal */}
        <Route path="/contact" element={<Contact />} />

        {/* 
          ❓ KÉRDÉS:

          Honnan tudja a React,
          hogy melyik oldalt kell betölteni?

          👉 URL → BrowserRouter → Routes → a megfelelő Route

          Ha az URL "/about",
          akkor pontosan azt a Route-ot tölti be,
          amelyiknek path="/about".


          ✅ MEGOLDÁS:

          A React mindig azt az oldalt jeleníti meg,
          amelyik Route path-je megegyezik az URL-lel.
        */}
      </Routes>
    </>
  );
}

export default App;
