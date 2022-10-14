import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useThemeContext } from "../../contexts/theme";
import { darkTheme, lightTheme } from "../../themeConfig";
import Background from "../background";
import Footer from "../footer";
import Header from "../header";

export default function Layout({ children, toggleTheme }) {
  let [theme] = useThemeContext();
  let [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFooter(true);
    }, 6000);
  }, []);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Background />
      <Header toggleTheme={toggleTheme} />
      {children}
      {showFooter && <Footer />}
    </ThemeProvider>
  );
}
