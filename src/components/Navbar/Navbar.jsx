import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaFileDownload } from "react-icons/fa";
import style from "./navbar.module.css";
import cv from "../../assets/Thiwanka_Lakmal_Dissanayake_CV.pdf"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={style.navbar}>
      <div className={style.topSection}>
        <h1 className={style.logo}><Link to="/">THIWANKA</Link></h1>
        <div className={style.buttonList}>
          <button className={style.resumeBtn}><a href={cv} download><FaFileDownload /> Resume</a></button>
          <button className={style.toggleBtn} onClick={toggleMenu}><FaBars /></button>
        </div>
      </div>
      {menuOpen && (
        <div className={style.fullScreenMenu}>
          <div className={style.partOne}>
            <button className={style.closeBtn} onClick={toggleMenu}><FaTimes /></button>
            <div className={style.navList}>
              <ul>
                <div className={style.navItem}>
                  <Link to="/" onClick={toggleMenu}>Home</Link>
                </div>
                <div className={style.navItem}>
                  <Link to="/about" onClick={toggleMenu}>About</Link>
                </div>
                <div className={style.navItem}>
                  <Link to="/tech-stack" onClick={toggleMenu}>Tech Stack</Link>
                </div>
                <div className={style.navItem}>
                  <Link to="/projects" onClick={toggleMenu}>Projects</Link>
                </div>
                <div className={style.navItem}>
                  <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                </div>
              </ul>
            </div>            
          </div>
          <p className={style.copyright}>Copyright 2025 &copy; Thiwanka Dissanayake. All Rights Reserved.</p>
        </div>
      )}
    </nav>
  );
}
