import React from "react";
import ScheduleCard from "../components/ScheduleCard";
import styles from "../styles/Program.module.css";

const sched = [
    {
        header: "IGA/SLA (NCAS-RN) Mentorship Program",
        image: "/images/NCAS2_IGA.jpg",
        description: "Elevate your nursing skills with the Nursing Community Assessment for Nurses (NCAS) – RN Mentorship Program. This program utilizes a comprehensive assessment approach, combining Computer-based Assessment (CBA), Simulation Lab Assessment (SLA), and an Oral Assessment. It evaluates applicants based on the skills and competencies essential for successful nursing practice.",
        title: "NCAS – RN Mentorship Program",
        tuition: "$997 (tax included) and materials",
        duration: "30 hours",
        deliveryMethod: "In class",
        admissionRequirement: "Bachelor of Nursing Program from any country",
        intakeDescription: "Every day is an opportunity to learn, grow, and connect. We are excited to present our monthly schedule.",
        schedule: [
        ["", "1ST", "2ND", "3RD", "4TH"],
        ["OCT. GROUP(SAT)", "Oct. 19", "Oct. 26", "Nov. 2", "Nov. 9"],
        ["OCT GROUP(SUN)", "Oct. 27", "Nov. 3", "Nov. 10", "Nov. 17"],
        ["NOV. GROUP(SAT)", "Nov. 23", "Nov. 30", "Dec. 7", "Dec. 14"],
        ["JAN. GROUP(SAT)", "Jan. 18", "Jan. 25", "Feb. 1", "Feb. 8"],
        ["JAN GROUP(SUN)", "Jan. 19", "Jan. 26", "Feb. 2", "Feb. 9"]
        ]
    },

    {
        header: "NCLEX-RN Mentorship Program",
        image: "/images/NCLEX2.jpg",
        description: "Elevate your nursing skills with the Nursing Community Assessment for Nurses (NCAS) – RN Mentorship Program. This program utilizes a comprehensive assessment approach, combining Computer-based Assessment (CBA), Simulation Lab Assessment (SLA), and an Oral Assessment. It evaluates applicants based on the skills and competencies essential for successful nursing practice.",
        title: "NCAS – RN Mentorship Program",
        tuition: "$628.95 (tax included) and materials",
        duration: "30 hours 1 year subscription to our LMS with 2000 Qbanks + Powerpoint",
        deliveryMethod: "In class",
        admissionRequirement: "Bachelor of Nursing Program from any country",
        intakeDescription: "Every day is an opportunity to learn, grow, and connect. We are excited to present our monthly schedule.",
        schedule: [
        ["", "1ST", "2ND", "3RD", "4TH", "5TH"],
        ["NOV. GROUP(SAT)", "Nov. 23", "Nov. 30", "Dec. 7", "Dec. 14", "Dec. 21"],
        ]
    },

    {
        header: "IGA - SLA/CBA (NCAS-RN) Mentorship Crash Course",
        image: "/images/NCAS_IGA.jpg",
        description: "Elevate your nursing skills with the Nursing Community Assessment for Nurses (NCAS) – RN Mentorship Program. This program utilizes a comprehensive assessment approach, combining Computer-based Assessment (CBA), Simulation Lab Assessment (SLA), and an Oral Assessment. It evaluates applicants based on the skills and competencies essential for successful nursing practice.",
        title: "NCAS – RN Mentorship Program",
        tuition: "$997 (tax included) and materials",
        duration: "24 hours",
        deliveryMethod: "In class",
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
    return (
        <div    >
            <div>
                {
                    sched.map((item, idx) => (
                        <div className={styles.program_card_container} key={idx}>
                            <div className={styles.header_container}>
                                <p className={styles.card_header}>{item.header}</p>
                            </div>
                            <ScheduleCard sched={item} />
                        </div>
                    ))
                }
            </div>

            {/* <div>
                <ScheduleCard
                    image="/images/NCAS_IGA.jpg"
                    description="Elevate your nursing skills with the Nursing Community Assessment for Nurses (NCAS) – RN Mentorship Program. This program utilizes a comprehensive assessment approach, combining Computer-based Assessment (CBA), Simulation Lab Assessment (SLA), and an Oral Assessment. It evaluates applicants based on the skills and competencies essential for successful nursing practice."
                    title="NCAS – RN Mentorship Program"
                    tuition="$918 (tax included) and materials"
                    duration="22 hours plus 1 hour of final coaching"
                    deliveryMethod="In class"
                    admissionRequirement="Bachelor of Nursing Program from any country"
                    intakeDescription="Every day is an opportunity to learn, grow, and connect. We are excited to present our monthly schedule."
                    schedule={[
                    ["", "1ST", "2ND", "3RD", "4TH"],
                    ["SUNDAY GROUP", "2", "3", "4", "5"],
                    ["MONDAY GROUP", "8", "9", "10", "11"],
                    ["TUESDAY GROUP", "11", "12", "13", "14"]
                    ]}
                />
            </div> */}
        </div>
    )
}

export default Program;