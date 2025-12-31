import ReactDOM from "react-dom/client"; 
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(

  {/* 
    ❓ HOSSZÚ, RÁVEZETŐ KÉRDÉS:

    Mit csinál pontosan a BrowserRouter,
    és miért NEM szabad csak úgy „kivenni”?

    Gondold végig lépésről lépésre:

    1️⃣ Amikor a felhasználó linkre kattint,
        a weboldal NEM töltődik újra — mégis oldal vált.
        → szerinted ki irányítja ezt?

    2️⃣ Mi történik, ha kivesszük a BrowserRouter-t?
        – a Link-ek hirtelen úgy kezdenek viselkedni,
          mintha normál <a> linkek lennének
        – az oldal teljesen újratölt
        – a Route-ok többé nem tudják,
          hogy melyik oldalt kellene megjeleníteni

    3️⃣ Miért mondjuk, hogy az SPA (egylapos alkalmazás)
        „szíve” valójában a router?

    Próbáld meg saját szavaiddal leírni:
       „A BrowserRouter feladata az, hogy…”
    

    ✅ MEGOLDÁS:

    A BrowserRouter figyeli az URL-t,
    és összeköti azt a Route-okkal.

    Nélküle a React:
    – nem tudná, melyik oldal tartozik melyik útvonalhoz,
    – a Link-ek teljes oldalt töltenének újra,
    – a router gyakorlatilag „megszűnne”.

    Röviden:
    **A BrowserRouter az, ami lehetővé teszi,
    hogy több oldalasnak tűnjön az alkalmazás,
    miközben valójában egy lap fut.**
  */}

  <BrowserRouter>
    <App />
  </BrowserRouter>
);
