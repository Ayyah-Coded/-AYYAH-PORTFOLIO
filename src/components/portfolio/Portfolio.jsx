import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Grandis-Store",
    img: "/home-page.png",
    desc: "Designed and developed a scalable event-driven e-commerce platform with microservices, secure payment integration, real-time order processing, and cloud-ready deployment for high performance and reliability.",
    href: "#",
  },
  {
    id: 2,
    title: "ResumeFlow",
    img: "./Dashboard-ResumeFlow.png",
    desc: "A full-stack, AI-powered resume builder that helps users create professional, ATS-friendly resumes with features including AI-assisted content generation, live preview, theming, and shareable resume links.",
    href: "#",
  },
  {
    id: 3,
    title: "Dexpto-Terminal",
    img: "/coin-overview.png",
    desc: "Dexpto Terminal is a production-oriented cryptocurrency analytics interface designed for fast market exploration, historical price analysis, and real-time market monitoring.",
    href: "#",
  },
  {
    id: 4,
    title: "BlipChat",
    img: "./blipchat.png",
    desc: "Production-inspired messaging platform demonstrating API Gateway, RabbitMQ event streaming, Redis caching, JWT authentication and independently deployable services.",
    href: "#",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 50]);

  return (
    <section style={{
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      paddingBottom: "1px"
    }}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.href} target="_blank" rel="noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;