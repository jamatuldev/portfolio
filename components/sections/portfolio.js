import { motion } from "framer-motion";
import styled from "styled-components";
import { wrapper } from "./globalStyles";

const PortfolioWrapper = styled(motion.section)`
  width: 65%;
  margin: 100px auto;

  @media (max-width: 1054px) {
    width: 75%;
  }

  @media (max-width: 915px) {
    width: 85%;
  }
  @media (max-width: 805px) {
    width: 87%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 626px) {
    text-align: center;
  }
  @media (max-width: 468px) {
    width: 96%;
  }
`;

const Heading = styled(motion.h1)`
  font-size: 44px;
  color: ${(p) => p.theme.c};
`;

const CardWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  @media (max-width: 805px) {
    gap: 60px;
  }
  @media (max-width: 768px) {
    gap: 40px;
  }
  @media (max-width: 626px) {
    justify-content: center;
  }
`;
const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  text-align: center;
  cursor: pointer;
  @media (max-width: 805px) {
    width: 280px;
  }
  @media (max-width: 768px) {
    width: 260px;
  }
  @media (max-width: 626px) {
    width: 360px;
  }
  @media (max-width: 468px) {
    width: 300px;
  }
  @media (max-width: 340px) {
    width: 250px;
  }
`;

const CardImage = styled(motion.img)`
  width: 300px;
  height: 190px;
  object-fit: cover;
  border-radius: 5px;
  @media (max-width: 805px) {
    width: 280px;
    height: 180px;
  }
  @media (max-width: 768px) {
    width: 260px;
    height: 170px;
  }
  @media (max-width: 626px) {
    width: 360px;
    height: 225px;
  }
  @media (max-width: 468px) {
    width: 300px;
    height: 190px;
  }
  @media (max-width: 340px) {
    width: 250px;
    height: 140px;
  }
`;

const CardTitle = styled(motion.h3)`
  font-size: 22px;
  margin: 0;
  margin: 10px 0;
  margin-top: 15px;
  font-weight: 500;
  color: ${(p) => p.theme.lc};

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CardDetails = styled(motion.p)`
  font-size: 16px;
  color: ${(p) => p.theme.lc};
  margin: 0;

  // @media (max-width: 768px) {
  //   font-size: 15px;
  // }
`;

const cardVariant = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.5, duration: 0.5, ease: "easeInOut" },
  },
};

export default function Portfolio() {
  return (
    <PortfolioWrapper>
      <Heading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
      >
        Works
      </Heading>
      <CardWrapper>
        <Card variants={cardVariant} initial="initial" animate="animate">
          <CardImage src="/portfolio.png" alt="Portfolio Image" />
          <CardTitle>Web Scraper</CardTitle>
          <CardDetails>
            The world is fictional about this app. World need to know more about
            that.
          </CardDetails>
        </Card>
        <Card variants={cardVariant} initial="initial" animate="animate">
          <CardImage src="/portfolio.png" alt="Portfolio Image" />
          <CardTitle>Web Scraper</CardTitle>
          <CardDetails>
            The world is fictional about this app. World need to know more about
            that.
          </CardDetails>
        </Card>
        <Card variants={cardVariant} initial="initial" animate="animate">
          <CardImage src="/portfolio.png" alt="Portfolio Image" />
          <CardTitle>Web Scraper</CardTitle>
          <CardDetails>
            The world is fictional about this app. World need to know more about
            that.
          </CardDetails>
        </Card>
      </CardWrapper>
    </PortfolioWrapper>
  );
}
