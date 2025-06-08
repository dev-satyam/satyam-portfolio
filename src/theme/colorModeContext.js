import React from "react";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default ColorModeContext;

// src/hooks/useThemeToggle.js
import { useMemo, useState } from "react";
import ColorModeContext from "../theme/colorModeContext";
import getTheme from "../theme/theme";

export default function useThemeToggle() {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(() => getTheme(mode), [mode]);
  return { colorMode, theme };
}
