// ===== HOME.JSX =====
//
// Ez a főoldal — amikor belépünk az oldalra, ez jelenik meg.

export default function Home() {

  {/* 
    😈 HIBA #1 — több elem egymás mellett

    A return részben KÉT elem van egymás mellett:

        <h1>...</h1>
        <p>...</p>

    A React ezt nem szereti.

    ❓ HOSSZÚ, RÁVEZETŐ KÉRDÉS:

    – Miért dob hibát, ha egymás mellett több elem van?
    – Mit jelent az, hogy „egy gyökérelem kell”?
    – Mivel tudod „körbecsomagolni” őket?
        ➜ <div>
        ➜ vagy <> </> (fragment)

    Fogalmazd meg:
      „A React azért kér egy közös elemet, mert…”
  */}

  {/* 
    😈 HIBA #2 — class helyett className

    HTML-ben így írjuk:
        <h1 class="title">

    De React-ben EZ HIBA.

    ❓ KÉRDÉS:

    – Miért nem használhatjuk a class szót JSX-ben?
    – Mit kell helyette írni?
    – Mi történik, ha így hagyjuk?

    Gondold végig:
    a „class” szó a JavaScriptben MÁST jelent,
    ezért kellett hozzá egy másik név.
  */}

  return (
    <>
      <h1 class="title">Hello World — Főoldal</h1>
      <p>Üdv a weboldalon!</p>
    </>
  );

  {/* 
    ✅ MEGOLDÁSOK:

    1️⃣ „Több elem egymás mellett” hiba:

        return (
          <>
            <h1>...</h1>
            <p>...</p>
          </>
        );

    → vagy div-vel: <div> … </div>

    2️⃣ class → className

        <h1 className="title">

    Összefoglalva:

    ✔ React-ben csak EGY „külső dobozt” adunk vissza  
    ✔ CSS osztály neve: className, nem class
  */}
}
