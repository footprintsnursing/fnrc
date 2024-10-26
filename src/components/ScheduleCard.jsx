import React from "react";
import styles from "../styles/ScheduleCard.module.css";

const ScheduleCard = ({sched}) => {

    const {id, image, title, description, tuition, duration, deliveryMethod, admissionRequirement, intakeDescription, schedule, isShortCourse} = sched;
    return (
<section id={id} className={styles.main_container}>
        <div className={styles.sub_container}>
            {/* <h1 className={styles.title}>{title}</h1> */}
            <div className={styles.image_container}>
                <img loading="lazy" src={image} width={515} height={317} alt="Eureka Classroom"/>
                <div className={styles.description_container}>
                    <h3>{title}</h3>
                    <br></br>
                    <p>{description}</p>
                    {/* { isShortCourse ? (<div className={styles.button_container}><button onClick={handleRedirect}>View Program Outline</button></div>) : null} */}
                </div>
            </div>
            <div className={styles.info_container}>
                <div className={styles.info}>
                    <h4>Tuition Fee:</h4>
                    <p>{tuition}</p>
                </div>
                <div className={styles.info}>
                    <h4>Duration:</h4>
                    <p>{duration}</p>
                </div>
                <div className={styles.info}>
                    <h4>Delivery Method:</h4>
                    <p>{deliveryMethod}</p>
                </div>
            </div>
            {/* <div className={styles.info2}>
                <h4>Admission Requirement:</h4>
                <p>{admissionRequirement}</p>
            </div> */}
            <div className={styles.info_schedule}>
                <h4>Intake Schedule:</h4>
                <p>{intakeDescription}</p>
                <table>
                    {schedule && schedule.map((sched, index) => 
                    <tbody key={`${sched} + ${index}`}>
                        <tr>
                            {
                                sched && sched.map((s, id) => <td className={`${index !== 0 && id !== 0 ? `${styles.bg_yellow}` : `${styles.bg_white}`} `} key={`${s} + ${id} + ${index}`}>{s}</td>)
                            }
                        </tr>
                    </tbody>

                    )}
                </table>
            </div>
        </div>
    </section>
    )
}

export default ScheduleCard;