import React from "react"
import style from "./about.module.css"
import travel from "../../assets/travel.jpg"
import coding from "../../assets/coding.jpg"
import club from "../../assets/club.jpg"
import swimming from "../../assets/swimming.jpg"
import football from "../../assets/football.jpg"
import lifting from "../../assets/lifting.jpg"
import anime from "../../assets/anime.webp"
import manga from "../../assets/manga.jpg"
import snorkel from "../../assets/snorkelling.jpg"

export default function About() {
  return (
    <div>
      <div className="p-5"></div>
      <div className={style.container}>
        <h1>About Me</h1>
        <div className="p-5"></div>
        <div className={style.aboutCon}>
          <div className={style.aboutCol}>
            <h2>Personal Summary</h2>
            <p>
              My name is Thiwanka Lakmal Dissanayake. I am an enthusiastic undergraduate student 
              pursuing a BSc in Software Engineering at Cardiff Metropolitan University (ICBT Campus). Alongside my studies, 
              I work part-time as an ICT teacher for London and Edexcel students in Grades 1 to 5, while also dedicating time to self-learn Full Stack MERN Development.
              In my free time, I enjoy solo traveling, creative illustration, and watching anime. I actively participate 
              in tech events and continuously strive to improve my coding skills through online courses and practical projects.
            </p>
          </div>
          <div className={style.aboutCol}>
            <h2>Core Skills</h2>
            <ul className={style.skillList}>
              <li>Effective Communication</li>
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
              <li>Leadership</li>
              <li>Critical Thinking</li>
              <li>Creativity</li>
              <li>Presentation Skills</li>
            </ul>
          </div>
          <div className={style.aboutCol}>
            <h2>Education</h2>
            <ul className={style.educationList}>
              <li>
                <h3>BSc in Software Engineering (Top-Up)</h3>
                <p>Cardiff Metropolitan University (ICBT Campus) <br />
                  Duration: 2024 - Present | Grade: In Progress
                </p>
              </li>
              <li>
                <h3>Higher Diploma in Computing & Software Engineering</h3>
                <p>Cardiff Metropolitan University (ICBT Campus) <br />
                  Duration: 2022 - 2024 | Grade: Distinction
                </p>
              </li>
              <li>
                <h3>Completion of Edexcel IGCSE O/ls</h3>
                <p>Willesden College International <br />
                  Duration: 2011 - 2022 | Grade: 2A*s, 4As & 1B
                </p>
              </li>
              <li>
                <h3>Diploma in ICT (Level 3)</h3>
                <p>IDM Achievers International Campus <br />
                  Duration: 2020 - 2021 | Grade: High Distinction
                </p>
              </li>
            </ul>
          </div>
          <div className={style.aboutCol}>
            <h2>Communities</h2>
            <p>
              I actively engage in various tech and professional communities, including the <em><a href="https://mvp.microsoft.com/studentambassadors">Microsoft Learn 
              Student Ambassadors</a></em>, <em><a href="https://gdg.community.dev/gdg-sri-lanka/">Google Developer Group 
              Sri Lanka</a></em>, <em><a href="https://www.meetup.com/awsugcmb/">AWS User Group 
              Colombo</a></em>, and <em><a href="https://www.meetup.com/sldevs/">Sri Lanka Developer Forum</a></em>. Being part of these communities 
              allows me to expand my knowledge, network with industry professionals, and participate in exciting tech events.
            </p>
          </div>
          <div className={style.aboutCol}>
            <h2>Hobbies</h2>
            <ul className={style.hobbiesList}>
              <li>
                <img src={travel} alt="Travel" />
                <span>Solo Traveling</span>
              </li>
              <li>
                <img src={coding} alt="Coding" />
                <span>Programming</span>
              </li>
              <li>
                <img src={club} alt="club" />
                <span>Joining Tech Clubs</span>
              </li>
              <li>
                <img src={swimming} alt="swimming" />
                <span>Swimming</span>
              </li>
              <li>
                <img src={snorkel} alt="snorkelling" />
                <span>Snorkelling</span>
              </li>
              <li>
                <img src={football} alt="football" />
                <span>Football</span>
              </li>
              <li>
                <img src={lifting} alt="lifting" />
                <span>Lifting Weights</span>
              </li>
              <li>
                <img src={anime} alt="anime" />
                <span>Watching Anime</span>
              </li>
              <li>
                <img src={manga} alt="manga" />
                <span>Reading Manga</span>
              </li>
            </ul>
          </div>
        </div>
      </div>      
    </div>
  );
}
