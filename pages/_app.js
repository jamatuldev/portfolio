import "../styles/globals.css";

import Layout from "../components/layout/layout";

import { CustomThemeProvider } from "../contexts/theme";

function MyApp({ Component, pageProps }) {
  return (
    <CustomThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CustomThemeProvider>
  );
}

export default MyApp;
