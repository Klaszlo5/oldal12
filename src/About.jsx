import {???} from "react";

export default function Notifications() {

   const [notifications, setNotifications] = useState(true);

   // ============================
   // TODO 1. FELADAT
   // Hozz létre egy state-et,
   // ami számolja a kattintásokat
   // ============================
   const [, setClickCount] = useState(0);

   // ============================
   // TODO 2. FELADAT
   // Tárold el szövegként,
   // mi volt az utolsó állapot
   // ("Be" / "Ki")
   // ============================
   const [last, setLastState] = useState("Be");

   return (
      <div>

         <p>
            {notifications
               ? "Értesítések be vannak kapcsolva"
                "Értesítések ki vannak kapcsolva"}
         </p>

         {/* ============================
             TODO 3. FELADAT
             Jelenítsd meg a kattintások számát
         ============================ */}
         <p>Kattintások száma: {}</p>

         {/* ============================
             TODO 4. FELADAT
             Jelenítsd meg az utolsó állapotot
         ============================ */}
         <p>Utolsó állapot: {}</p>

         <button
            onClick={() => {
               setNotifications(!notifications);

               // ============================
               // TODO 5. FELADAT
               // Növeld a kattintásszámlálót
               // ============================
               setClickCount(clickCount 1);

               // ============================
               // TODO 6. FELADAT
               // Állítsd be az utolsó állapotot
               // ============================
               setLastState(notifications  "Ki" : "Be");
            }}
         >
            {notifications
               ? "Kikapcsolás"
                "Bekapcsolás"}
         <button>

         {/* ============================
             TODO 7. FELADAT
             Jeleníts meg figyelmeztetést,
             ha a kattintások száma >= 5
         ============================ */}
         {clickCount >=  && (
            <p className="war">
               Túl sok kattintás!
            </p>
         )}

         {/* ============================
             TODO 8. FELADAT
             Reset gomb:
             állítson mindent alaphelyzetbe
         ============================ */}
         <button
            oClick={() => {
               setNotifications(true);
               setClickCount(0);
               setLastState("Be");
            }}
            className="reset"
         >
            Visszaállítás
         <button>

      </div>
   );
}
