import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScheduleCard from "../components/ScheduleCard";
import styles from "../styles/Program.module.css";

const sched = [
    {
        header: "IGA - CBA and SLA (formerly known as NCAS)",
        id: "ncas",
        image: "/images/NCAS2_IGA.jpg",
        description: "Elevate your nursing skills with the Nursing Community Assessment for Nurses (NCAS) – RN Mentorship Program. This program utilizes a comprehensive assessment approach, combining Computer-based Assessment (CBA), Simulation Lab Assessment (SLA), and an Oral Assessment. It evaluates applicants based on the skills and competencies essential for successful nursing practice.",
        // title: "NCAS – RN Mentorship Program",
        tuition: ["$ 997", "(tax included) and materials"],
        duration: ["<b>30 Hours Self-Learning:</b> Start with self-directed online modules on the FNRC Portal, designed to familiarize participants with NCAS concepts.", "<b>30 Hours Face-to-Face Onsite Sessions:</b> Participate in in-depth, face-to-face sessions at our center, where mentors provide real-time feedback and skill enhancement.", "<b>30 Hours Guided Independent Learning:</b> Further your understanding with structured, independent study tasks to reinforce your knowledge."],
        deliveryMethod: ["<b>Onsite:</b> Engage in interactive, hands-on learning with our expert mentors.", "<b>Online Access:</b> Full access to the FNRC Portal for course materials, practice tests, and additional resources, making learning flexible and accessible anytime."],
        admissionRequirement: "Bachelor of Nursing Program from any country",
        intakeDescription: "Every day is an opportunity to learn, grow, and connect. We are excited to present our monthly schedule.",
        schedule: [
        ["", "1ST", "2ND", "3RD", "4TH"],
        ["OCT. GROUP (SAT)", "Oct. 19", "Oct. 26", "Nov. 2", "Nov. 9"],
        ["OCT GROUP (SUN)", "Oct. 27", "Nov. 3", "Nov. 10", "Nov. 17"],
        ["NOV. GROUP (SAT)", "Nov. 23", "Nov. 30", "Dec. 7", "Dec. 14"],
        ["JAN. GROUP (SAT)", "Jan. 18", "Jan. 25", "Feb. 1", "Feb. 8"],
        ["JAN GROUP (SUN)", "Jan. 19", "Jan. 26", "Feb. 2", "Feb. 9"]
        ]
    },

    {
        header: "NCLEX-RN Mentorship Program",
        id:"nclex",
        image: "/images/NCLEX2.jpg",
        description: "Our National Council Licensure Examination (NCLEX) mentorship program designed to equip nursing graduates with the knowledge and skills needed to successfully pass the National Council Licensure Examination for Registered Nurses (NCLEX-RN). This course is crafted by experienced nurse educators and professionals who understand the demands of the nursing profession and the specific requirements of the NCLEX-RN exam.",
        // title: "NCAS – RN Mentorship Program",
        tuition: ["$ 628.25", "(tax included) and materials"],
        duration: ["<b>30 Hours Self-Learning:</b> Start with self-directed online modules on the FNRC Portal, designed to familiarize participants with core concepts.", "<b>30 Hours Face-to-Face Onsite Sessions:</b> Participate in in-depth, face-to-face sessions at our center, where mentors provide real-time feedback and skill enhancement.", "<b>30 Hours Guided Independent Learning:</b> Further your understanding with structured, independent study tasks to reinforce your knowledge."],
        deliveryMethod: ["<b>Onsite:</b> Engage in interactive, hands-on learning with our expert mentors.", "<b>Online Access:</b> Full access to the FNRC Portal for course materials, practice tests, and additional resources, making learning flexible and accessible anytime."],
        admissionRequirement: "Bachelor of Nursing Program from any country",
        intakeDescription: "Every day is an opportunity to learn, grow, and connect. We are excited to present our monthly schedule.",
        schedule: [
        ["", "1ST", "2ND", "3RD", "4TH", "5TH"],
        ["NOV. GROUP (SAT)", "Nov. 23", "Nov. 30", "Dec. 7", "Dec. 14", "Dec. 21"],
        ]
    },

    {
        header: "IGA - CBA and SLA (formerly known as NCAS) Crash Course",
        image: "/images/NCAS_IGA.jpg",
        description: "Elevate your nursing skills with the Nursing Community Assessment for Nurses (NCAS) – RN Mentorship Program. This program utilizes a comprehensive assessment approach, combining Computer-based Assessment (CBA), Simulation Lab Assessment (SLA), and an Oral Assessment. It evaluates applicants based on the skills and competencies essential for successful nursing practice.",
        // title: "NCAS – RN Mentorship Program",
        tuition: ["$ 997", "(tax included) and materials"],
        duration: ["<b>30 Hours Self-Learning:</b> Start with self-directed online modules on the FNRC Portal, designed to familiarize participants with core concepts.", "<b>22.5 Hours Face-to-Face Onsite Sessions:</b> Participate in in-depth, face-to-face sessions at our center, where mentors provide real-time feedback and skill enhancement.", "<b>30 Hours Guided Independent Learning:</b> Further your understanding with structured, independent study tasks to reinforce your knowledge."],
        deliveryMethod: ["<b>Onsite:</b> Engage in interactive, hands-on learning with our expert mentors.", "<b>Online Access:</b> Full access to the FNRC Portal for course materials, practice tests, and additional resources, making learning flexible and accessible anytime."],
        admissionRequirement: "Bachelor of Nursing Program from any country",
        intakeDescription: "Every day is an opportunity to learn, grow, and connect. We are excited to present our monthly schedule.",
        schedule: [
        ["", "1ST", "2ND", "3RD",],
        ["OCT. GROUP", "Oct. 28", "Oct. 29", "Oct. 30"],
        ["NOV. GROUP", "Nov. 19", "Nov. 20", "Nov. 21"],
        ["DEC. GROUP", "Dec. 17", "Dec. 18", "Dec. 19"],
        ]
    },

]

const Program = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <div className={styles.program_main_container}>
            <div className={styles.program_info_container}>
                <p className={styles.title2}>Our Expert Mentorship Program</p>
                <br></br>
                <p className={styles.info2}>At Footprints Nursing Review Center, we offer tailored mentorship programs designed to support internationally educated nurses (IENs) in achieving success on the NCAS and NCLEX-RN exams. Whether you’re preparing for the NCAS Competency Assessment or focusing on passing the NCLEX-RN, our comprehensive and personalized mentorship will guide you every step of the way. With expert instructors, hands-on practice, and individualized support, we’re here to help you reach your nursing goals in Canada.</p>
            </div>
            <div>
                {
                    sched.map((item, idx) => (
                        <div id={item.id} className={styles.program_card_container} key={idx}>
                            <div className={styles.header_container}>
                                <p className={styles.card_header}>{item.header}</p>
                            </div>
                            <ScheduleCard sched={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Program;