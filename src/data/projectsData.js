import ImgCrypto from "../../public/images/projects/crypto-screener-cover-image.jpg";
import ImgFolio from "../../public/images/projects/portfolio-cover-image.jpg";

const projectsData = [
  {
    id: 1,
    className: "col-span-12",
    title: "Crypto Screener Application",
    type: "Featured Project",
    summary:
      "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
    img: ImgCrypto,
    link: "/",
    github: "/",
  },
  {
    id: 2,
    className: "col-span-12",
    title: "React Portfolio Website",
    type: "Featured Project",
    summary:
      "A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive.",
    img: ImgFolio,
    link: "/",
    github: "/",
  },
];

export default projectsData;
