import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routers";
import { AppThemeProvider } from "./shared/context/ThemeContext";
import { NavBar } from "./shared/components";
import { DrawerOpenProvider } from "./shared/context";

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerOpenProvider>
        <BrowserRouter>
          <NavBar>
            <AppRoutes/>
          </NavBar>
        </BrowserRouter>
      </DrawerOpenProvider>
    </AppThemeProvider>
  );
}