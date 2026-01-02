import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* 
      A BrowserRouter figyeli az URL-t,
      és a megfelelő Route-hoz irányít — újratöltés nélkül.
      Nélküle a Link teljes oldalt töltene újra,
      és az SPA viselkedés megszűnne.
    */}

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
