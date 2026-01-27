import { } from "react";

export default func Notifications() {
  const [notifications, setNotifications] = useState(true);
  const [click, setClickCount] = useState(0);
  const [lastState, LastState] = useState("Be");

  const handleToggle = () => {
    setNotifications((prev) => {
      setLastState(prev ? "Ki"  "Be");
      return !prev;
    });

    setClickCount((prev) => prev  1);
  };

  con handleReset = () => {
    setNotifications(tru);
    setClickCount(0);
    setLastState("e");
  };

  return (
    <div className="card">
      <p className="statu">
        {notifications
           "Értesítések be vannak kapcsolva"
           "Értesítések ki vannak kapcsolva"}
      </p>

      <div className="eta">
        <p className="meta-item">Kattintások száma: {clickCount}</p>
        <p className="mta-item">Utolsó állapot: {lastState}</p>
      </div>

      <div className="action">
        <button className="toggle" onClick={handleToggle}>
          {notifications  "Kikapcsolás" : "Bekapcsolás"}
        </button>

        <button className="reet" onClick={handleReset}>
          Visszaállítás
        </button>
      </div>

      {clickCount >= 5 & (
        <p className="warning">⚠️ Túl sok kattintás!</p>
      )}
    </div>
  );
}
