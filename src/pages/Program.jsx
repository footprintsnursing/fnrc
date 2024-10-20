import React from "react";
import ScheduleCard from "../components/ScheduleCard";
import styles from "../styles/Program.module.css";

const sched = [
    {
        header: "IGA/SLA (NCAS-RN) Mentorship Program",
        image: "/images/NCAS_IGA.jpg",
        description: "Elevate your nursing skills with the Nursing Community Assessment for Nurses (NCAS) – RN Mentorship Program. This program utilizes a comprehensive assessment approach, combining Computer-based Assessment (CBA), Simulation Lab Assessment (SLA), and an Oral Assessment. It evaluates applicants based on the skills and competencies essential for successful nursing practice.",
        title: "NCAS – RN Mentorship Program",
        tuition: "$997 (tax included) and materials",
        duration: "30 hours",
        deliveryMethod: "In class",
        admissionRequirement: "Bachelor of Nursing Program from any country",
        intakeDescription: "Every day is an opportunity to learn, grow, and connect. We are excited to present our monthly schedule.",
        schedule: [
        ["", "1ST", "2ND", "3RD", "4TH"],
        ["SUNDAY GROUP", "2", "3", "4", "5"],
        ["MONDAY GROUP", "8", "9", "10", "11"],
        ["TUESDAY GROUP", "11", "12", "13", "14"]
        ]
    },

    {
        header: "NCLEX-RN Mentorship Program",
        image: "/images/NCAS_IGA.jpg",
        description: "Elevate your nursing skills with the Nursing Community Assessment for Nurses (NCAS) – RN Mentorship Program. This program utilizes a comprehensive assessment approach, combining Computer-based Assessment (CBA), Simulation Lab Assessment (SLA), and an Oral Assessment. It evaluates applicants based on the skills and competencies essential for successful nursing practice.",
        title: "NCAS – RN Mentorship Program",
        tuition: "$628.95 (tax included) and materials",
        duration: "30 hours 1 year subscription to our LMS with 2000 Qbanks + Powerpoint",
        deliveryMethod: "In class",
        admissionRequirement: "Bachelor of Nursing Program from any country",
        intakeDescription: "Every day is an opportunity to learn, grow, and connect. We are excited to present our monthly schedule.",
        schedule: [
        ["", "1ST", "2ND", "3RD", "4TH"],
        ["SUNDAY GROUP", "2", "3", "4", "5"],
        ["MONDAY GROUP", "8", "9", "10", "11"],
        ["TUESDAY GROUP", "11", "12", "13", "14"]
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
        ["", "1ST", "2ND", "3RD", "4TH"],
        ["SUNDAY GROUP", "2", "3", "4", "5"],
        ["MONDAY GROUP", "8", "9", "10", "11"],
        ["TUESDAY GROUP", "11", "12", "13", "14"]
        ]
    },

]

const Program = () => {
    return (
        <div    >
            <div>
                {
                    sched.map((item, idx) => (
                        <div key={idx}>
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