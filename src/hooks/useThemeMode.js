import constate from "constate";
import { useState } from "react";

const useThemeMode = () => {
  const [mode, setMode] = useState(
    window.localStorage?.getItem("mode") || "light"
  );

  const handleChangeMode = (value) => {
    window.localStorage.setItem("mode", value);
    setMode(value);
  };
  return { mode, handleChangeMode };
};

export const [ThemeModeProvider, useThemeModeContext] = constate(useThemeMode);
