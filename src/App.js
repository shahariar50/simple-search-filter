import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useMemo } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          background: { default: "#050405", paper: "#17181B" },
          primary: { main: "#564FB1" },
        },
        typography: {
          fontFamily: ["'Sen', sans-serif"],
          body1: { fontSize: 16, color: "#637381" },
          body2: { fontSize: 14, color: "#637381" },
          h1: { fontSize: 40 },
          h2: { fontSize: 32 },
          h3: { fontSize: 24, fontWeight: 700 },
          h4: { fontSize: 20 },
          h5: { fontSize: 18, fontWeight: 700 },
          h6: { fontSize: 16, fontWeight: 700 },
          button: { fontSize: 14, textTransform: "capitalize" },
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <ProductList />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
