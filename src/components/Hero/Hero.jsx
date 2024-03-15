import React from "react";
import style from "./Hero.module.css"
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <div className={style.bodyheader}>

      <div className={style.me}>
          <p>Hello, I'm</p>
          <h1 className={style.name}>
            Vinod Kumar <span>Maurya</span>
          </h1>
          <h2 className={style.title}>
            {/* <span>A</span> */}
            <ul className={style.typewriter}>
              <li>
                <span>A Software Engineer, Problem Solver and Creative Thinker </span>
              </li>
              <li>
                <span>Problem Solver</span>
              </li>
              <li>
                <span>Creative Thinker</span>
              </li>
            </ul>
          </h2>
        </div>

        <div id="name-social-container">
          
          <div>
          <ul className={`${style["horizontal-list"]} ${style["text-center"]} ${style["social-icons"]}`}>
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
      </div>
    </>
  );
};

export default Hero;
