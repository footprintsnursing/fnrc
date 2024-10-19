import React from "react";
import styles from "../styles/WhyCard.module.css";

const WhyCard = ({cardInfo}) => {
    const { title, info } = cardInfo
    return (
        <div className={styles.whycard_container}>
            <h3 className={styles.whycard_title}>{title}</h3>
            <br></br>
            <p className={styles.whycard_info}>{info}</p>
        </div>
    )
}

export default WhyCard;