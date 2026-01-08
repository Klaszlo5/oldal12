/*
********************
  FELADAT — Értesítések kapcsoló (useState gyakorlás) Készíts egy React komponenst, amely egy értesítési
  állapotot kezel és jelenít meg.
********************

  1. Hozz létre egy state változót `notifications` néven
     useState segítségével.
     - Kezdőértéke legyen: true

  2. Jeleníts meg egy <p> elemet, amely:
     - "Értesítések be vannak kapcsolva" szöveget mutat,
       ha az állapot true
     - "Értesítések ki vannak kapcsolva" szöveget mutat,
       ha az állapot false

  3. Jeleníts meg egy <button> elemet a felületen.

  4. A gombra kattintva:
     - ha az állapot true → váljon false-szá
     - ha az állapot false → váljon true-vá

  5. A gomb felirata mindig az aktuális állapottól függjön:
     - true esetén: "Kikapcsolás"
     - false esetén: "Bekapcsolás"

  6. A felhasználó egy pillantással lássa:
     - az aktuális értesítési állapotot
     - mit fog csinálni a gomb megnyomása
*/


export default function Notifications() {


   const [, setNotifications] = useState(true);


   return (
      <div>

         <p>
            {notifications
               ? "Értesítések be vannak kapcsolva" : ""}
         </p>

         <
            onClick={() =>
               setNotifications(!)
            }
         >

            {notifications
               ? "Kikapcsolás"  "Bekapcsolás"}
         </button>

      </div>
   );
}

