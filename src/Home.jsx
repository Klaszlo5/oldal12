/*
  FELADAT — Home oldal

  1) Valtoztasd meg a cimet ugy, hogy a felhasznalo nevet is tartalmazza.
     Pelda szoveg:
     Hello, kedves felhasznalo

     IDE KELL A KOD
     MEGOLDAS lent jelolve

  2) A bekezdes alatt jelenjen meg meg egy sor:
     "Ez az alkalmazas kezdooldala."

     IDE KELL A KOD
     MEGOLDAS szinten lent

  3) A cím kapjon egy className-t: "main-title"
     (a tovabbi stilusozas miatt)

     IDE KELL A KOD
     MEGOLDAS lent
*/

export default function Home() {
  return (
    <>
      {/* MEGOLDAS: cim modositas + className */}
      
    <h1 className="main-title">Hello, kedves felhasznalo</h1>

      <p>Udv a weboldalon!</p>

      {/* MEGOLDAS: uj sor a bekezdes ala */}
          
    <p>Ez az alkalmazas kezdooldala.</p>
    </>
  );
}
