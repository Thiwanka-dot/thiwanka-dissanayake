import React from "react"
import { Link } from "react-router-dom"
import userImg from "../../assets/img.png"
import userImg2 from "../../assets/img2.png"
import userImg3 from "../../assets/img3.png"
import style from "./home.module.css"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"

export default function Home() {
  return (
    <div className={style.border}>
      <div className={style.container}>
        <div className={style.userProfile}>          
          <div className={style.content}>
            <div className={style.userContent}>
              <h1>THIWANKA LAKMAL DISSANAYAKE</h1>
              <p>
                I'm a passionate BSc Software Engineering Undergraduate at 
                Cardiff Metropolitan University with a focus on Full Stack Development. 
                I enjoy building innovative solutions with modern technologies.
              </p>
              <div className={style.socialBtn}>
                <button className={style.linkedinBtn}>
                  <Link to="https://www.linkedin.com/in/thiwanka-dissanayake-tld/"><FaLinkedinIn /> LinkedIn</Link>
                </button>
                <button className={style.githubBtn}>
                  <Link to="https://github.com/Thiwanka-dot"><FaGithub /> GitHub</Link>
                </button>
              </div>
            </div>
          </div>
          <img src={userImg} alt="Thiwanka - Web Developer" />
        </div>
      </div>
    </div>
  );
}
