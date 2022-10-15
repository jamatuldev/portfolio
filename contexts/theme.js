import { createContext, useContext, useState } from "react";

const Context = createContext();

export function CustomThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  return (
    <Context.Provider value={[theme, setTheme]}>{children}</Context.Provider>
  );
}

export function useThemeContext() {
  return useContext(Context);
}
