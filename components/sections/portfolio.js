import { motion } from "framer-motion";
import styled from "styled-components";
import { wrapper } from "./globalStyles";
import data from "../.././data/projects.json";
import { useRouter } from "next/router";

const PortfolioWrapper = styled(motion.section)`
  width: 65%;
  margin: 150px auto;

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
  font-weight: 700;
  color: ${(p) => p.theme.c};
  @media (max-width: 768px) {
    font-size: 38px;
  }

  @media (max-width: 468px) {
    font-size: 34px;
  }
`;

const CardWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
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
  width: 280px;
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
  width: 280px;
  height: 175px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 5px rgba(255, 255, 255, 0.3);
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

export default function Portfolio({ projects }) {
  let router = useRouter();
  let handleCardClick = (href) => {
    router.push(href);
  };
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
        {projects.map((project, i) => (
          <Card
            key={i}
            variants={cardVariant}
            initial="initial"
            animate="animate"
            onClick={() => handleCardClick(`/works/${project.slug}`)}
          >
            <CardImage src={project.thumbline} alt={project.title} />
            <CardTitle>{project.title}</CardTitle>
            <CardDetails>{project.description}</CardDetails>
          </Card>
        ))}
      </CardWrapper>
    </PortfolioWrapper>
  );
}
