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
        ["", "1ST", "2ND", "3RD", "4TH"],,
        // ["MAR. GROUP (SAT)", "Mar. 8", "Mar. 15", "Mar. 22", "Mar. 29"],
        // ["APR. GROUP (SAT)", "Apr. 5", "Apr. 12", "Apr. 19", "Apr. 26"],
        // ["MAY GROUP (SAT)", "May 3", "May 10", "May 17", "May 24"],
        ["JUN. GROUP (SAT)","Jun. 14", "Jun. 21", "Jun. 28", "Jul. 5 "],
        ["JUL. GROUP (SAT)", "Jul. 12", "Jul. 19", "Jul. 26", "Aug. 2"],
        ["AUG. GROUP (SAT)", "Aug. 16", "Aug. 23", "Aug. 30", "Sept. 6"],
        ["SEPT. GROUP (SAT)", "Sept. 20", "Sept. 27", "Oct. 4", "Oct. 11"]
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
        // ["JAN. GROUP (SAT)", "Jan. 4", "Jan. 11", "Jan. 19", "Jan. 26", "Feb. 2"],
        ["MAR. GROUP (SUN)", "Mar. 16", "Mar. 23", "Mar. 30", "Apr. 6", "Apr. 13"],
        ["JUN. GROUP (SUN)", "Jun. 15", "Jun. 22", "Jun. 29", "Jul. 6","Jul. 13"],
        ["SEPT. GROUP (SUN)", "Aug. 31", " Sept. 7", "Sept. 14", "Sept. 21", "Sept. 28"]
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
        // ["MAR. GROUP" , "Mar. 19,", "Mar. 20", "Mar. 21"],
        // ["APR. GROUP", "Apr. 8", "Apr. 9", "Apr. 10"],
        // ["MAY GROUP", "May. 6", "May. 7", "May. 8"],
        // ["JUN. GROUP", "Jun. 24", "Jun. 25", "Jun. 26"],
        ["JUL. GROUP", "Jul. 15", "Jul. 16", "Jul. 17"],
        ["AUG. GROUP", "Aug. 11", "Aug. 12", "Aug. 13"],
        ["SEPT. GROUP", "Sept. 9", "Sept. 10", "Sept. 11"],
        ["OCT. GROUP", "Oct. 6", "Oct. 7", "Oct. 8"]
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