import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { DarkThemeContextProvider } from "./context/DarkThemeContext.jsx";
import { MobileSidebarContextProvider } from "./context/MobileSidebarContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DarkThemeContextProvider>
      <MobileSidebarContextProvider>
        <App />
      </MobileSidebarContextProvider>
    </DarkThemeContextProvider>
  </BrowserRouter>
);
