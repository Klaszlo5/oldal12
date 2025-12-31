// ===== ABOUT.JSX =====
//
// MIT JELENTENEK AZ ELEMEK?
// export default   → ezt a komponenst visszük ki a fájlból (máshol is használható)
// function About() → ez az oldal neve
// return           → amit itt visszaadunk, az jelenik meg a képernyőn
// <h1>             → nagy cím, mint HTML-ben
//
// Összefoglalva: ez az oldal azt írná ki, hogy „Rólunk oldal”,
// HA nem lenne benne a hiba 😈

export default function About() {

  {/*  
    ❓ HOSSZÚ KÉRDÉS (GONDOLKODÓS):

    Figyeld meg a kódot: első ránézésre minden rendben, mégsem tölt be.
    Vajon miért?

    Próbálj így végigmenni rajta:

    1️⃣ A komponens neve: About
        — biztos, hogy ugyanígy hivatkozunk rá App.jsx-ben?

    2️⃣ Ellenőrizd:
        importáljuk-e helyesen (betűpontosan)?

    3️⃣ Mi történik, ha a fájl neve About.jsx,
        de valahol about vagy ABout szerepel?

    Írd le saját szavaiddal:
       „Ez a hiba nem kódsorban van, hanem …”

    👉 TIPP:
    A React nagyon érzékeny a KIS- és NAGYBETŰKRE!
  */}

  // 😈 SZÁNDÉKOS HIBA:
  // a cím nem nagybetűvel kezdődik — ez vizsgán gyakran stílus-/minőségi hiba
  return <h1>rólunk oldal</h1>;

  {/*  
    ✅ MEGOLDÁS:

    Itt nem „összeomló kódhiba” volt,
    hanem egy tipikus logikai / minőségi hiba:

    ✔ komponens neve About → helyes
    ✔ route /about → helyes
    ❌ viszont a cím így jelenik meg: „rólunk oldal”

    Javítás:

        return <h1>Rólunk oldal</h1>;

    És fontos tanulság:
    „A kód attól még lehet hibás, hogy lefut —  
     vizsgán az olvashatóság és igényesség is számít.”
  */}
}
