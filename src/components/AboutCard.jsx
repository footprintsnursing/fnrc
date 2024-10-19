import React, { useState } from "react";
import styles from "../styles/AboutCard.module.css";
import ReactCardFlip from "react-card-flip";



const AboutCard = ({instructor}) => {
    const { name, position, description, picture} = instructor;
    // const [isFlipped, setIsFlipped] = useState(false);

    // const handleClick = () => {
    //     setIsFlipped(!isFlipped);
    // }
    return (
        // <div className={styles.instructor_card_container}>
        //     <img src="/images/Marilee.png" alt="instructor"/>
        //     <p className={styles.instructor_name}>Marilee D. Sinalo</p>
        //     <p className={styles.instructor_pos}>NCLEX-RN / IGA (NCAS-RN) Instructor</p>
        // </div>
        // <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        //     {/* Front of the card */}
        //     <div className={styles.instructor_card_container} onClick={handleClick}>
        //         <img src="/images/Marilee.png" alt="instructor" />
        //         <p className={styles.instructor_name}>Marilee D. Sinalo</p>
        //         <p className={styles.instructor_pos}>NCLEX-RN / IGA (NCAS-RN) Instructor</p>
        //     </div>

        //     {/* Back of the card */}
        //     <div className={styles.instructor_card_back} onClick={handleClick}>
        //         <p className={styles.instructor_description}>
        //             Marilee has over 10 years of experience helping internationally educated nurses prepare for the NCLEX and NCAS. Her unique teaching methods focus on real-world applications and simulations.
        //         </p>
        //     </div>
        // </ReactCardFlip>
        <div className={styles.flip_card}>
            <div className={styles.flip_card_inner}>
                {/* Front of the card */}
                <div className={styles.flip_card_front}>
                    <img src={picture} alt="instructor" />
                    <p className={styles.instructor_name}>{name}</p>
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