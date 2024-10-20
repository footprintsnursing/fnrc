import React from "react";
import logo from "/images/fnrc_logo.svg";
import styles from "../styles/Footer.module.css";

const Footer =() => {
    return (
        <footer>
            <div className={styles.upper_bg}>
                <div className={styles.upper_footer}>
                    <div className={styles.info_container}>
                        <p className={styles.info_title}>Footprints Nursing Review Center: Supporting IENs Transition Into Canadian Nursing</p>
                        <br></br>
                        <br></br>
                        <p className={styles.info_description}>For over 5 years, Footprints Nursing Review Center has been supporting internationally educated nurses across the globe, guiding them through their journey to becoming registered nurse in Canada. Wherever you are, our expertise and mentorship programs are here to help you achieve your nursing dreams and make a lasting impact in the Canadian healthcare system.</p>
                    </div>
                    
                    <div className={styles.contact_container}>
                        <p className={styles.info_title}>Contact Us</p>
                        <div className={styles.input_container}>
                            <input type="text" placeholder="First Name"></input>
                            <input type="text" placeholder="Last Name"></input>
                        </div>
                        <div className={styles.input_container}>
                            <input type="number" placeholder="Contact Number"></input>
                            <input type="email" placeholder="E-mail"></input>
                        </div>
                        <textarea placeholder="Message"></textarea>
                        <input type="button" value="Submit"/>
                    </div>
                </div>
            </div>
            <div className={styles.middle_bg}>
                <div className={styles.middle_footer}>
                    <img src={logo}/>
                </div>
            </div>
            <div className={styles.lower_bg}>
                <p>Copyright © 2019 - 2024 Footprints Nursing Review Center, New Westminister, B.C., Canada</p>
            </div>
        </footer>
    )
}

export default Footer;