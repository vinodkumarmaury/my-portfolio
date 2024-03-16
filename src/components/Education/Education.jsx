// Education.js
import React from "react";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <section id="education"  className={styles.education}>
      <h1 className={`${styles["section-heading"]}`}>
        <span>
          <i className={`fas fa-graduation-cap`}></i>
        </span>
        <span> Education </span>
      </h1>

      <div className={styles.timeline}>
        <div className={`${styles["timeline-box"]} ${styles.left}`}>
          <div className={styles["timeline-container"]}>
            <div className={styles["timeline-logo"]}>
              <img
                src="https://kgpchronicle.iitkgp.ac.in/wp-content/uploads/2018/09/iitkgp_logo.png"
                alt="logo"
              />
            </div>
            <h3 className={`${styles.experienceDesignation}`}> Degree </h3>
            <h4 className={styles.experienceCompanyName}> Institute Name </h4>
            <h5 className={`${styles.experienceDuration} ${styles.m0}`}>
              {" "}
              Nov 2021-Present{" "}
            </h5>

            <p
              className={`${styles.experienceDescription} ${styles.textAlignJustify}`}
            >
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
        </div>

        <div className={`${styles["timeline-box"]} ${styles.right}`}>
          <div className={styles["timeline-container"]}>
            <div className={styles["timeline-logo"]}>
              <img
                src="https://seeklogo.com/images/I/iit-kharagpur-logo-731A3C2EF1-seeklogo.com.png"
                alt="logo"
              />
            </div>
            <h3
              className={`${styles.experienceDesignation} ${styles.m0} ${styles.mBlue}`}
            >
              {" "}
              Degree{" "}
            </h3>
            <h4 className={styles.experienceCompanyName}> Institute Name </h4>
            <h5 className={`${styles.experienceDuration} ${styles.m0}`}>
              {" "}
              Nov 2021-Present{" "}
            </h5>
            <p
              className={`${styles.experienceDescription} ${styles.textAlignJustify}`}
            >
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
        </div>

        <div className={`${styles["timeline-box"]} ${styles.left}`}>
          <div className={styles["timeline-container"]}>
            <div className={styles["timeline-logo"]}>
              <img
                src="https://seeklogo.com/images/I/iit-kharagpur-logo-731A3C2EF1-seeklogo.com.png"
                alt="logo"
              />
            </div>
            <h3
              className={`${styles.experienceDesignation} ${styles.m0} ${styles.mBlue}`}
            >
              {" "}
              Degree{" "}
            </h3>
            <h4 className={styles.experienceCompanyName}> Institute Name </h4>
            <h5 className={`${styles.experienceDuration} ${styles.m0}`}>
              {" "}
              Nov 2021-Present{" "}
            </h5>

            <p
              className={`${styles.experienceDescription} ${styles.textAlignJustify}`}
            >
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
        </div>

        <div id={styles["timeline-divider"]}>
          <div className={styles["timeline-traveller"]}>
            <div>
              <i className={`fas fa-car-side ${styles.icon}`}></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
