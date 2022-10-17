import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../../components/global/loader";
import ReactHtmlParser from "react-html-parser";
import Portfolio from "../../components/sections/portfolio";
import data from "../../data/projects.json";
import { wrapper } from "../../components/sections/globalStyles";
const Wrapper = styled.div`
  min-height: calc(100vh - 70px);
  width: 100vw;
`;

const ContentWrapper = styled.div`
  ${wrapper}
  margin-top: 150px;
  img {
    width: 100%;
    object-fit: cover;
    margin-top: 20px;
  }
  h1 {
    color: ${(p) => p.theme.c};
    line-height: 1.2;
    font-size: 36px;
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  h3 {
    font-size: 24px;
    font-weight: 500;
    color: ${(p) => p.theme.c};
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  p {
    color: ${(p) => p.theme.lc};
    font-size: 18px;
    line-height: 1.7;
  }
  a {
    color: ${(p) => p.theme.p};
    font-size: 18px;
    text-decoration: underline;
    margin-right: 10px;
  }
  ul,
  ol {
    color: ${(p) => p.theme.lc};
    font-size: 18px;
  }
`;

export default function Works() {
  let [loading, setLoading] = useState(true);
  let [content, setContent] = useState("");
  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    let projectData = data.filter((p) => p.slug == pid);
    let htmlContent = projectData.length !== 0 ? projectData[0].html : "n";
    setContent(htmlContent);
  }, [pid, content]);

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
              <ContentWrapper>
                {content === "n" ? (
                  <h1>Sorry nothing found !</h1>
                ) : (
                  ReactHtmlParser(content)
                )}
              </ContentWrapper>
            </Wrapper>
          </>
        )}
      </main>
    </div>
  );
}
