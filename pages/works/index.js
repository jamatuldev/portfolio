import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../../components/global/loader";
import Portfolio from "../../components/sections/portfolio";

const Wrapper = styled.div`
  min-height: calc(100vh - 70px);
  width: 100vw;
`;

export default function Works() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div>
      <Head>
        <title>Jamatul Talukder | My portfolio</title>
        <meta name="description" content="All of my works are here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AnimatePresence>{loading && <Loader />} </AnimatePresence>
        {!loading && (
          <>
            <Wrapper>
              <Portfolio />
            </Wrapper>
          </>
        )}
      </main>
    </div>
  );
}
