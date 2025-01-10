import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routers";
import { LightTheme } from "./shared/themes";
import { ThemeProvider } from "@mui/material";

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </ThemeProvider>
  );
}