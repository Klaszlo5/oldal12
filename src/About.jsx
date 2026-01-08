/*
  FELADAT — egyszerusitett About

  1. Tedd az egészet egy div-be: className="about-page"
     IDE KELLETT A KOD
     (alatta lathato a megoldas)

  2. A cim alatt legyen egy rovid bekezdes,
     ami elmondja, mi ez az oldal.
     IDE KELLETT A KOD

  3. Keszits egy 3 pontos listat:
     - kiknek szol
     - mit talalsz itt
     - miert hasznos
     IDE KELLETT A KOD

  4. Tegyel be egy kepet URL-lel.
     IDE KELLETT A KOD

  5. EXTRA:
     Fogadj egy "name" prop-ot es ird ki:
     Udvozlunk, {name}!
     IDE KELLETT A KOD
*/

export default function About({ name = "latogato" }) {
  return (
    // 1.
    <div className="about-page">

      <h1>Rolunk oldal</h1>

      {/*2.*/}
      <p>Ez az oldal a projekt rovid bemutatoja.</p>

      {/*3.*/}
      <ul>
         <li></li>
         <li>Lista</li>
         <li>Lista</li>
      </ul>
      

      {/*4.*/}
      <img src="pic_trulli.jpg" alt="Italian Trulli">
      </img>
      {/*5.*/}
      <p>Udvozlunk, {name}!</p>
    </div>
  );
}
