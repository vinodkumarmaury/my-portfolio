// Skills.js
import React from "react";
import styles from "./Skill.module.css";
import HTMLImage from "./../../Assets/images/html-white.png";
import ReactImage from "./../../Assets/images/react-white.png";
import JSImage from "./../../Assets/images/js-white.png";
import NodeImage from "./../../Assets/images/node-white.png";
// import MongoImage from "./../../Assets/images/mongo-white.png";
import GitImage from "./../../Assets/images/git-white.png";
import CSSImage from "./../../Assets/images/css-white.png";
// import ExpressImage from "./../../Assets/images/express-white.png";
import FirebaseImage from "./../../Assets/images/firebase-white.png";
import CppImage from "./../../Assets/images/cpp-white.png";
import CImage from "./../../Assets/images/c-white.svg";
import PythonImage from "./../../Assets/images/python-white.png";
import MatlabImage from "./../../Assets/images/MATLAB.png";
const Skills = () => {
  const logos = [
    {
      src: HTMLImage,
      alt: "HTML",
    },
    {
      src: CSSImage,
      alt: "CSS",
    },
    {
      src: JSImage,
      alt: "JS",
    },
    {
      src: ReactImage,
      alt: "React",
    },
    {
      src: MatlabImage,
      alt: "Matlab",
    },
    {
      src: NodeImage,
      alt: "Node",
    },

    // {
    //   src: ExpressImage,
    //   alt: "Express",
    // },
    {
      src: CppImage,
      alt: "C++",
    },
    {
      src: CImage,
      alt: "C",
    },
    {
      src: PythonImage,
      alt: "Python",
    },
    // {
    //   src: MongoImage,
    //   alt: "Mongo",
    // },
    {
      src: GitImage,
      alt: "Git",
    },
    {
      src: FirebaseImage,
      alt: "Firebase",
    }, 
  ];
  
  return (
    <div id="skills" className={styles.technologies}>
      <div className={styles.container}>
        <h1 className={`${styles["section-heading"]}`}>
          <span>
            <i className="fas fa-chalkboard-teacher"></i>
          </span>
          <span> SKILLS </span>
        </h1>
        <div className={styles.techMarquee} behavior="scroll" direction="left">
          {logos.map((logo, index) => (
            <div className={styles.techlogo} key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
