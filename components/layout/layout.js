import { ThemeProvider } from "styled-components";
import { useThemeContext } from "../../contexts/theme";
import { darkTheme, lightTheme } from "../../ThemeConfig";
import Background from "../background";
import Footer from "../footer";
import Header from "../header";

export default function Layout({ children, toggleTheme }) {
  let [theme] = useThemeContext();
  console.log(theme);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Background />
      <Header toggleTheme={toggleTheme} />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
