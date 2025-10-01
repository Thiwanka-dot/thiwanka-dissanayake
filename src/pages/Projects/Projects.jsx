import React from "react"
import style from "./projects.module.css"
import { FaArrowRight } from "react-icons/fa"
import restaurant from "../../assets/Restaurant.png"
import train from "../../assets/train.png"
import cab from "../../assets/cab.png"
import QR from "../../assets/qrcode.png"
import peerConnect from "../../assets/peerconnect.png"

export default function Projects() {
  return (
    <div>
      <div className="p-5"></div>
      <div className={style.container}>
        <h1>Projects</h1>
        <div className="p-5"></div>
        <div className={style.projectContainer}>
          <a href="https://github.com/Thiwanka-dot/peer-support" className={style.projectItem}>
            <img src={peerConnect} />
            <div className={style.projectContent}>
              <div className={style.itemText}>
                <h2>PeerConnect</h2>
                <FaArrowRight />
              </div>
              <p>PeerConnect is a web-based platform designed to 
                connect individuals in underserved communities with 
                supportive peers and resources. It provides a safe, 
                user-friendly space where users can share experiences, 
                access guidance, and find mental health support.
              </p>
              <div className={style.progLan}>                
                <span>MERN Stack</span>
                <span>Socket.IO</span>
                <span>JWT</span>
                <span>Chart.js</span>
              </div>
            </div>
          </a>
          <a href="https://github.com/Thiwanka-dot/QR_Code_Manager" className={style.projectItem}>
            <img src={QR} />
            <div className={style.projectContent}>
              <div className={style.itemText}>
                <h2>QR Code Manager</h2>
                <FaArrowRight />
              </div>
              <p>This React app allows users to generate and scan QR codes. 
                The `QRGenerator` lets users input text or URLs to create 
                and download QR codes. The `QRScanner` enables scanning via 
                camera or uploaded images using `html5-qrcode`. Both features 
                are integrated into a single clean interface. Styling is managed 
                through custom CSS modules.
              </p>
              <div className={style.progLan}>                
                <span>ReactJS</span>
                <span>Vite</span>
                <span>ESLint</span>
              </div>
            </div>
          </a>
          <a href="https://github.com/Thiwanka-dot/MegaCityCab-v2" className={style.projectItem}>
            <img src={cab} />
            <div className={style.projectContent}>
              <div className={style.itemText}>
                <h2>Mega City Cab</h2>
                <FaArrowRight />
              </div>
              <p>MegaCityCab-v2 is an open-source project designed 
                to provide a seamless and user-friendly experience 
                for cab services. The application includes both 
                frontend and backend functionalities, ensuring 
                efficient booking and management of rides. The 
                project is actively maintained and open to 
                contributions to enhance its features and usability.
              </p>
              <div className={style.progLan}>
                <span>Java</span>
                <span>MySQL</span>
                <span>MySQL JDBC</span>
              </div>
            </div>
          </a>
          <a href="https://github.com/Thiwanka-dot/Train-Management" className={style.projectItem}>
            <img src={train} />
            <div className={style.projectContent}>
              <div className={style.itemText}>
                <h2>Sri Lanka Railway Website</h2>
                <FaArrowRight />
              </div>
              <p>This SOC-based application for the Railway Department 
                of Sri Lanka allows passengers to search the trains 
                based on the locations and make a booking for the 
                selected train. The admins of this application manage 
                the information about the trains and their availabilities, 
                and the bookings made by the passengers. 
              </p>
              <div className={style.progLan}>
                <span>ReactJS</span>
                <span>NodeJS</span>
                <span>C++</span>
                <span>ASP.NET</span>
                <span>Web API</span>
              </div>
            </div>
          </a>
          <a href="https://github.com/Thiwanka-dot/OuterClove-Restaurant" className={style.projectItem}>
            <img src={restaurant} />
            <div className={style.projectContent}>
              <div className={style.itemText}>
                <h2>OuterClove Restaurant</h2>
                <FaArrowRight />
              </div>
              <p>A restaurant website project that provides a 
                comprehensive solution for managing a restaurant's operations, 
                including customer orders, reservations, 
                and product management. The project is built using a combination 
                of front-end technologies (HTML, CSS, JavaScript) and back-end 
                technologies (PHP, MySQL).
              </p>
              <div className={style.progLan}>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>PHP</span>
                <span>MySQL</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
