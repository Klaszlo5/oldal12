/*
  FELADAT — egyszeru verzio

  1) Keszits egy nev mezo input elemet
     Kerdes: Miert kell placeholder?
     Valasz: Azert, hogy a felhasznalo tudja, mit kell beirnia.

  2) Amikor a felhasznalo gepel a nev mezobe,
     irasd ki a konzolba a beirt szoveget.
     Kerdes: Hogyan erem el az input aktualis erteket?
     Valasz: e.target.value

  3) Amikor a felhasznalo ranyom a Kuldes gombra,
     az oldal NE frissuljon ujra.
     Kerdes: Mit kell tenni, hogy az oldal ne toltodjon ujra?
     Valasz: e.preventDefault()

  4) Kuldeskor jelenjen meg a konzolban:
     "Elkuldozve"
*/

export default function Contact() {
  return (
    <>
      <h1>Kapcsolat oldal</h1>

      <form
        // IDE KELL A KOD (submit lekezelese)
        
      onSubmit={(e) => {
                e.preventDefault();
                console.log("Elkuldozve");
              }}
      >
        <input
          type="text"
          placeholder="Ird be a neved"
          // IDE KELL A KOD (nev kiirasa konzolba)
          onChange={(e) => console.log("Nev:", e.target.value)}
        />

        <button>Kuldes</button>
      </form>
    </>
  );
}
