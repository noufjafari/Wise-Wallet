import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { BudgetProv } from "./Components/contexts/BudgetCont.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <BudgetProv>
      <App />
    </BudgetProv>
  </BrowserRouter>
);
