import React,{useState,useEffect} from "react";
import style from "./Hero.module.css"
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { useTypewriter,Cursor } from "react-simple-typewriter";
import Typewriter from "typewriter-effect";

const Hero = () => {


  return (
    <>
      <div className={style.bodyheader}>

      <div className={style.me}>

          <p style={{ color:'white',fontSize:'30px', marginBottom:'-4px' }}>Hello, I am</p>  
          <h2 style={{color:'white'}}>
            Vinod Kumar Maurya 
            <span style = {{color:'yellow',letterSpacing:'2px'}} >
            <Typewriter 
                style={{marginTop:'10px'}}         
                options={{
                  strings: ['A Problem Solver', 'Loves Programming',"A Passionate Developer"],
                  autoStart: true,
                  loop: true,
                }}
              /> 
            </span>
                    
          </h2>       
        </div>

        <div id="name-social-container">
          
          <div>
          <ul className={`${style["horizontal-list"]} ${style["text-center"]} ${style["social-icons"]}`}>
              <li>
                <a href="https://www.linkedin.com/in/vinod-maurya/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/vinodkumarmaury" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/its_vinod_kr" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li> 
                <a href="https://www.facebook.com/profile.php?id=100046770062491" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/im_vinod_maurya/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
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
