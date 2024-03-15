import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        <p>
          © 2024 Vinod Kumar Maurya, Indian Institute of Technology Kharagpur (IITKGP).
        </p>
      </div>
    </div>
  );
};

export default Footer;
