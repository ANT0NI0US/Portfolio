// ThemeProvider.js
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const themeVariables = {
    light: {
      "--background-color": "#ffe8f7",
      "--text-color": "#151515",
      "--second-color": "#FFD93D",
      "--second-secotion-color": "#ffffff",
      "--border-color": "#663f3f80",
      "--link-border-color": "#000000",
      "--description-section-color": "#888686",
      "--linear-gradient-color-one": "rgba(170, 54, 124, 0.5) -5.91%",
      "--linear-gradient-color-two": "rgba(74, 47, 189, 0.5) 111.58%",
      "--error-color": "#ff4545",
      "--button-send-color": "#0c2670",
      "--cards-background": "#d6caca75",
    },
    dark: {
      "--background-color": "#151515",
      "--text-color": "#fff",
      "--second-color": "#dbf227",
      "--second-secotion-color": "black",
      "--border-color": "rgba(255, 255, 255, 0.5)",
      "--link-border-color": "rgba(255, 255, 255, 1)",
      "--description-section-color": "#b8b8b8",
      "--linear-gradient-color-one": "#667D83",
      "--linear-gradient-color-two": "#4C565D",
      "--error-color": "red",
      "--button-send-color": "white",
      "--cards-background": "#c4c0c00d",
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={themeVariables[theme]}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
