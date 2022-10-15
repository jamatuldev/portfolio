import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useThemeContext } from "../../contexts/theme";
import { darkBG, darkTheme, lightBG, lightTheme } from "../../themeConfig";
import Background from "../background";
import Footer from "../footer";
import Header from "../header";

export default function Layout({ children, toggleTheme }) {
  let [theme] = useThemeContext();
  let [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "dark" ? "#000000" : "#ffffff";
    setTimeout(() => {
      document.body.style.overflow = "auto";
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
