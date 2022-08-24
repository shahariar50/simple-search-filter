import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useMemo } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import ProfileList from "./components/profile/ProfileList";
import { useThemeModeContext } from "./hooks/useThemeMode";

function App() {
  const { mode } = useThemeModeContext();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark"
            ? {
                background: { default: "#050405", paper: "#17181B" },
                primary: { main: "#564FB1", light: "#96B3CD" },
                secondary: { main: "#050405", contrastText: "#637381" },
                text: { primary: "#637381", secondary: "#fff" },
                action: { hover: "#050405" },
              }
            : {
                background: { default: "#fff", paper: "#F7F7F8" },
                primary: { main: "#564FB1", light: "#564FB1" },
                secondary: { main: "#fff", contrastText: "#231F20" },
                text: { primary: "#231F20", secondary: "#231F20" },
                action: { hover: "#050405" },
              }),
        },
        typography: {
          fontFamily: ["'Sen', sans-serif"],
          body1: { fontSize: 16 },
          body2: { fontSize: 14 },
          h1: { fontSize: 40 },
          h2: { fontSize: 32 },
          h3: { fontSize: 24, fontWeight: 700 },
          h4: { fontSize: 20 },
          h5: { fontSize: 18, fontWeight: 700 },
          h6: { fontSize: 16, fontWeight: 700 },
          button: { fontSize: 14, textTransform: "capitalize" },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <ProfileList />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
