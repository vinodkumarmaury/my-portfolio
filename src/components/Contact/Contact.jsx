// Contact.js
import React from "react";
import styles from "./contact.module.css";

import { IoLocationOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import resume from "../../Assets/images/Resume.png"
import Map from "../../Assets/images/map.jpg"
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";


const Contact = () => {
  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1ASZ-J1xg4jJiYW6BvpaW76ecR9e5NsNK/view?usp=sharing"
    );
  };
  const handleMapEvents = () => {
    window.open("https://goo.gl/maps/czJrxa2GAejtWYVC8");
  };
  return (
    <section id="contact" className={styles.contact}>
      <h1 className={`${styles["section-heading"]} ${styles.mb50px}`}>
        <span>
          <i className="far fa-address-card"></i>
        </span>
        <span> Contact </span>
      </h1>
         <div className={styles.mapAndContact}>
        {/* Map maker */}
        <div className={styles.right}>
          <div className={styles.map}
           onClick={handleMapEvents}
           >
            <img src={Map} alt="Map" />
            <FaMapMarkerAlt className={styles.mapMarker} />
          </div>
          <div className={styles.address}>
            <IoLocationOutline className={styles.icon} />
            <span>
               Bahraich Uttar Pradesh India-271902.
            </span>
          </div>
          <div className={styles.callToActions}>
            <button
              className={styles.resumeDownloadButton}
              onClick={handleResumeDownload}
            >
              Download Resume
              <div className={styles.resumePreviewPopup}>
                <img src={resume} alt="Resume" />
              </div>
            </button>
          </div>
        </div>

        <div className={styles["contact-container"]}>
        <div className={styles["contact-form-container"]}>
          <form className={styles["contact-form"]}>
            <input
              className={styles["input-name"]}
              name="name"
              type="text"
              placeholder="Your Name"
            />
            <input className={`${styles["input-email"]}`} 
              name="input-email"
              type="text"
              required
              placeholder="Your Email"
            />
            <textarea className={`${styles["input-message"]}`} 
              name="input-message"
              rows="2"
              cols="40"
              placeholder="Message"
            ></textarea>
            <button className={`${styles["sub-btn"]}`} type="submit">
              <a href="mailto:example@email.com">Mail me</a>
            </button>
          </form>
        </div>
      </div>
      </div>
       
      <div className={styles.namesocialcontainer}>
          
          <div>
        <ul className={`${styles["horizontal-list"]} ${styles["text-center"]} ${styles["social-icons"]}`}>
        <li>
                <a href="https://www.linkedin.com/in/vinod-maurya/" target="_blank" rel="noreferrer">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/vinodkumarmaury" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/its_vinod_kr" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li> 
                <a href="https://www.facebook.com/profile.php?id=100046770062491" target="_blank" rel="noreferrer">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/im_vinod_maurya/" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
              <a href="https://www.codechef.com/users/vinodmaurya" target="_blank" rel="noreferrer"> <i>
                 <SiCodechef />
                  </i></a>
              </li>
              <li>
                <a href="https://codeforces.com/profile/vinod_kumar_maurya" target="_blank" rel="noreferrer">
                  <i>
                    <SiCodeforces/>
                  </i>
                </a>
              </li>
              <li>
                <a href="https://www.codingninjas.com/studio/profile/Vinod_IITKGP" target="_blank" rel="noreferrer">
                  <i>
                    <SiCodingninjas/>
                  </i>
                </a>
              </li>
              <li>
                <a href="mailto:vinodmaurya0410@gmail.com" target="_blank" rel="noreferrer">
                  <i>
                    <SiGmail/>
                  </i>
                </a>
              </li>
              <li>
                <a href="https://leetcode.com/Vinod_Kumar_Maurya/"  target="_blank" rel="noreferrer">
                  <i>
                    <SiLeetcode/>
                  </i>
                </a>
              </li>
              <li><a href="tel:9305627067" target="_blank" rel="noreferrer">
                <i>
                <FaPhoneAlt/>
                </i>
                </a></li>
            </ul>
          </div>
        </div>
    </section>
  );
};

export default Contact;
