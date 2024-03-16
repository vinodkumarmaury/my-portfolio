// Project.js
import React from 'react';
import styles from './Project.module.css'; 

const Project = () => {
  return (
    <section id="projects" className={styles.portfolio}>
      <h1 className={`${styles["section-heading"]} ${styles.mb75px}`}>
        <span>
          <i className="fas fa-th-list"></i>
        </span>
        <span> Portfolio </span> 
      </h1>

      <div id={styles["portfolio-container"]}>

        <div className={styles["portfolio-image-container"]}>
          <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png" alt="not-found" />
          <div className={styles["portfolio-details"]}>
            <p>
              Write here basic details about the project.
            </p>
          </div>
        </div>

        <div className={styles["portfolio-image-container"]}>
          <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png" alt="not-found" />
          <div className={styles["portfolio-details"]}>
            <p>
              Write here basic details about the project.
            </p>
          </div>
        </div>

        <div className={styles["portfolio-image-container"]}>
          <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png" alt="not-found" />
          <div className={styles["portfolio-details"]}>
            <p>
              Write here basic details about the project.
            </p>
          </div>
        </div>

        <div className={styles["portfolio-image-container"]}>
          <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000024_1550237299_codezen.png" alt="not-found" />
          <div className={styles["portfolio-details"]}>
            <p>
              Write here basic details about the project.
            </p>
          </div>
        </div>

        <div className={styles["portfolio-image-container"]}>
          <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000024_1550237299_codezen.png" alt="not-found" />
          <div className={styles["portfolio-details"]}>
            <p>
              Write here basic details about the project.
            </p>
          </div>
        </div>

        <div className={styles["portfolio-image-container"]}>
          <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000024_1550237299_codezen.png" alt="not-found" />
          <div className={styles["portfolio-details"]}>
            <p>
              Write here basic details about the project.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Project;
