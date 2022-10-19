import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../../components/global/loader";
import Portfolio from "../../components/sections/portfolio";
import data from "../../data/projects.json";
const Wrapper = styled.div`
  opacity: ${(p) => (p.$loading ? 0 : 1)};
  min-height: calc(100vh - 70px);
  width: 100vw;
`;

export default function Works({ projects }) {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      <Head>
        <title>Jamatul Talukder | My portfolio</title>
        <meta name="description" content="All of my works are here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AnimatePresence>
          {loading && (
            <>
              <Loader />
              <Portfolio projects={projects} />
            </>
          )}{" "}
        </AnimatePresence>
        {!loading && (
          <>
            <Wrapper $loading={loading}>
              <Portfolio projects={projects} />
            </Wrapper>
          </>
        )}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const projects = data;
  return { props: { projects } };
}
