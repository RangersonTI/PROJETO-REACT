import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routers";
import { AppThemeProvider } from "./shared/context/ThemeContext";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </AppThemeProvider>
  );
}