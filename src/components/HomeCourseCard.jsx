import React from "react";
import styles from "../styles/HomeCourseCard.module.css";

const HomeCourseCard = ({ course }) => {

    const { title, description, picture, info } = course;
    return (
        <div className={styles.home_coursecard_container}>
            <div className={styles.card_container}>
                <img className={styles.card_img} src={picture}/>
                <div>
                    <p className={styles.sub_title1}>{title}</p>
                    <br></br>
                    <p className={styles.info2}>{description}</p>
                    <br></br>
                    <ul>
                        {info.map((item, index) => (
                            <li key={info + index}>{item}</li>
                        ))}
                    </ul>
                    <a className={styles.learn_btn} href="/">Learn More</a>
                </div>
            </div>
        </div>
    )
}

export default HomeCourseCard;