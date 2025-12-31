// ===== CONTACT.JSX =====
//
// Ez a kapcsolat oldal. Itt „elvileg” űrlap lesz,
// de most direkt raktunk bele pár tipikus hibát.

export default function Contact() {

  {/* 
    😈 HIBA #1 — több elem EGYMÁS MELLETT, wrapper nélkül

    A return részben most így néz ki:

        <h1>Kapcsolat</h1>
        <form>...</form>

    A React NEM szereti, ha több „felső szintű” elem van egymás mellett.

    ❓ HOSSZÚ KÉRDÉS:

    – Miért dob hibát ilyenkor?
    – Mit jelent az, hogy „csak EGY gyökérelem” lehet?
    – Mivel tudod becsomagolni?
         ➜ <div>
         ➜ vagy <>  </> (fragment)

    Írd le saját szavaiddal:
       „A React azért kér egy közös dobozt, mert…”
  */}

  {/* 
    😈 HIBA #2 — rossz eseménynév: 'onchange' helyett 'onChange'

    HTML-ben még működne így:

        <input onchange="...">

    JSX-ben viszont NEM.

    ❓ KÉRDÉS:

    – Miért fontos a pontos helyesírás JSX-ben?
    – Miért hívjuk ezt „camelCase” írásmódnak?
    – Mi történik, ha így hagyjuk: onchange ?

    TIPP:
    React EVENTEK mindig így néznek ki:
       onClick, onChange, onSubmit, onMouseEnter …  
       (nagy C, nagy S, nagy E stb.)
  */}

  return (
    <>
      <h1>Kapcsolat oldal</h1>

      {/* rossz eseménynév – ez itt MOST hibás */}
      <form onsubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Írd be a neved"
          onchange={(e) => console.log(e.target.value)}
        />

        <button>Küldés</button>
      </form>
    </>

    {/* 
      ⛔ IGEN — itt most SZÁNDÉKOSAN hibás a kód,
      ezért hibaüzenetet fog dobni.

      Feladat: javítsd ki a hibákat!
    */}
  );

  {/* 
    ✅ MEGOLDÁSOK (ellenőrzéshez):

    1️⃣ „Több elem egymás mellett” — megoldva fragmenttel:

        return (
          <>
            ...
          </>
        );

    (ezt fent már helyesen megkapta — ez OK)

    2️⃣ onsubmit → helyesen: onSubmit
       onchange → helyesen: onChange

        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            onChange={(e) => console.log(e.target.value)}
          />
        </form>

    TANULSÁG:

    ✔ mindig legyen EGY közös wrapper (div vagy fragment)  
    ✔ az eseménynevek JSX-ben camelCase formában vannak  
       (onChange, onSubmit, onClick…)
  */}
}
