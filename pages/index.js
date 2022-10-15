import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import Loader from "../components/global/loader";
import Bio from "../components/sections/bio";
import Love from "../components/sections/love";
import Social from "../components/sections/social";
import Technology from "../components/sections/technology";
import Work from "../components/sections/work";
import Showcase from "../components/showcase";
import styles from "../styles/Home.module.css";
import { disableScroll, enableScroll } from "../utils/scroll";

export default function Home() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    disableScroll();
    setTimeout(() => {
      enableScroll();
    }, 6000);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Jamatul Talukder | A Mern Stack Web developer</title>
        <meta name="description" content="I am a mernstack webdevloper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Showcase />
        <Work />
        <Technology />
        <Bio />
        <Love />
        <Social /> */}
        <AnimatePresence>
          {loading && (
            <>
              <Loader />
              <Showcase />
              <Work />
              <Technology />
              <Bio />
              <Love />
              <Social />
            </>
          )}{" "}
        </AnimatePresence>
        {!loading && (
          <>
            <Showcase />
            <Work />
            <Technology />
            <Bio />
            <Love />
            <Social />
          </>
        )}
      </main>
    </div>
  );
}
