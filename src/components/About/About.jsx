// About.js
import React from "react";
import styles from "./about.module.css";
import myimage from "../../Assets/images/Vinod.jpeg"

const About = () => { 
  return (
    <section id="about" className={styles.about}>
      <div className={styles.myimage}>
        <img 
          src={myimage}
          alt="not found"
        />
      </div> 

      <div className={`${styles["about-para"]}`}>
        <p>
          I am a creative problem solver and software engineer who thrives on
          innovation. I love learning, collaborating, and taking on challenges.
          Originally from Bahraich, Uttar Pradesh, India, I enjoy exploring new
          ideas and creating meaningful experiences. In my free time, I enjoy
          music, reading book and competitive programming. I am driven, creative,
          and passionate about making a positive impact through technology.
        </p>
      </div>
    </section>
  );
};

export default About;
