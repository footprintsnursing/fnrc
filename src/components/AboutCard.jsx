import React, { useState } from "react";
import styles from "../styles/AboutCard.module.css";
import ReactCardFlip from "react-card-flip";



const AboutCard = ({instructor}) => {
    const { name, owner, position, description, picture} = instructor;

    return (
        <div className={styles.flip_card}>
            <div className={styles.flip_card_inner}>
                {/* Front of the card */}
                <div className={styles.flip_card_front}>
                    <img loading="lazy" src={picture} alt="instructor" />
                    <p className={styles.instructor_name}>{name}</p>
                    <p className={styles.instructor_pos}>{owner}</p>
                    <p className={styles.instructor_pos}>{position}</p>
                </div>

                {/* Back of the card */}
                <div className={styles.flip_card_back}>
                    <p className={styles.instructor_description}>
                        {description}
                    </p>
                </div>
            </div>
    </div>
    )
}

export default AboutCard;