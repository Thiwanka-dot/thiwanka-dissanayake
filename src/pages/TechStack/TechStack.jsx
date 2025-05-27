import React from "react"
import style from "./techstack.module.css"
import html from "../../assets/html-w.png"
import css from "../../assets/css-w.png"
import js from "../../assets/javascript-w.png"
import jquery from "../../assets/jquery-w.png"
import react from "../../assets/reactjs-w.png"
import bootstrap from "../../assets/bootstrap-w.png"
import php from "../../assets/php-w.png"
import mysql from "../../assets/mysql-w.png"
import restApi from "../../assets/api-w.png"
import vscode from "../../assets/vscode-w.png"
import mongodb from "../../assets/mongodb-w.png"
import postman from "../../assets/postman-w.png"
import git from "../../assets/git-w.png"
import nodejs from "../../assets/nodejs-w.png"
import github from "../../assets/github-w.png"

export default function TechStack() {
  return (
    <div>
      <div className="p-5"></div>
      <div className={style.container}>
        <h1>Tech Stack</h1>
        <div className="p-5"></div>
        <div className={style.stackContainer}>
          <div className={style.stackItem}>
            <h2>Frontend Technologies</h2>
            <div className={style.stackCol}>
              <div className={style.stackColItem}>
                <img src={html} alt="html" />
                <span>HTML</span>
              </div>
              <div className={style.stackColItem}>
                <img src={css} alt="css" />
                <span>CSS</span>
              </div>
              <div className={style.stackColItem}>
                <img src={js} alt="javascript" />
                <span>JavaScript</span>
              </div>              
              <div className={style.stackColItem}>
                <img src={react} alt="reactJS" />
                <span>ReactJS</span>
              </div>
              <div className={style.stackColItem}>
                <img src={bootstrap} alt="bootstrap" />
                <span>Bootstrap</span>
              </div>
              <div className={style.stackColItem}>
                <img src={jquery} alt="jquery" />
                <span>JQuery</span>
              </div>
            </div>
          </div>
          <div className={style.stackItem}>
            <h2>Backend Technologies</h2>
            <div className={style.stackCol}>
              <div className={style.stackColItem}>
                <img src={php} alt="php" />
                <span>PHP</span>
              </div>
              <div className={style.stackColItem}>
                <img src={nodejs} alt="Node.js" />
                <span>Node.js</span>
              </div>
              <div className={style.stackColItem}>
                <img src={restApi} alt="REST API" />
                <span>REST API</span>
              </div>
            </div>
          </div>
          <div className={style.stackItem}>
            <h2>Database Technologies</h2>
            <div className={style.stackCol}>
              <div className={style.stackColItem}>
                <img src={mysql} alt="MySQL" />
                <span>MySQL</span>
              </div>
              <div className={style.stackColItem}>
                <img src={mongodb} alt="MongoDB" />
                <span>MongoDB</span>
              </div>
            </div>
          </div>
          <div className={style.stackItem}>
            <h2>Development Tools</h2>
            <div className={style.stackCol}>
              <div className={style.stackColItem}>
                <img src={vscode} alt="VS Code" />
                <span>VS Code</span>
              </div>
              <div className={style.stackColItem}>
                <img src={postman} alt="Postman" />
                <span>Postman</span>
              </div>
              <div className={style.stackColItem}>
                <img src={git} alt="Git" />
                <span>Git</span>
              </div>
            </div>
          </div>
          <div className={style.stackItem}>
            <h2>Design and Collaboration Tools</h2>
            <div className={style.stackCol}>
              <div className={style.stackColItem}>
                <img src={github} alt="GitHub" />
                <span>GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
