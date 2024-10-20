import React, { useState } from "react";
import logo from "/images/fnrc_logo.svg";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }

    console.log(menuOpen);
    return (
        <nav>
            <div className={styles.nav_container}>
               <img src={logo} alt="logo" />
                    {/* Hamburger icon */}
                <div className={`${styles.hamburger} ${
                        menuOpen ? styles.open : ""
                    }`}
                    onClick={toggleMenuOpen}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
                    <ul className={`${menuOpen ? styles.menuOpen : styles.nav_menu}`}>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/program">PROGRAMS</a></li>
                        <li><a href="/about">ABOUT</a></li>
                        <li><a>CONTACT</a></li>
                        <li><a href="https://footprintsnursingreviewcenter.talentlms.com/">MY PORTAL</a></li>
                    </ul>
            </div>
        </nav>
    )
}

export default Navbar;