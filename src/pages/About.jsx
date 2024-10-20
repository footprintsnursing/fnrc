import React from "react";
import styles from "../styles/About.module.css";
import AboutCard from "../components/AboutCard";
import WhyCard from "../components/WhyCard";

const instructors = [
    {
        name: "Marilee D. Sinlao",
        picture: "/images/Marilee.png",
        position: "NCLEX-RN / IGA (NCAS-RN) Instructor",
        description: "Marilee is a registered nurse with extensive years of nursing experience working in various hospitals in the lower mainland. She has more than a decade of teaching experience and has taught HCA and LPN students in various colleges in British Columbia. Marilee has been a Senior Educational Instructor and strongly advocates for internationally educated nurses (IENs) in supporting them to transition efficiently into Canadian Registered Nurses. She also completed her Instructor Development Program at the National Association of Career Colleges (NACC). She believes in empowering their students to become lifelong learners. Together with her husband, they aim to provide a nurturing and inclusive environment that fosters academic excellence."
    },
    {
        name: "Wilfredo Mendoza",
        picture: "/images/Wilf.png",
        position: "IGA (NCAS-RN) Instructor",
        description: "Wilfredo Mendoza is a Registered nurse (emergency unit) working at various health care authorities in the lower mainland with 17 years of experience. He shares our passion for teaching and understands that IENs journey is without challenges and frustrations. He is willing to make a difference in our community, making him an excellent addition to our team."
    },
    {
        name: "Jocelyn Baluyot",
        picture: "/images/Jocelyn.png",
        position: "IGA (NCAS-RN) Instructor",
        description: "Jocelyn Baluyot, a distinguished member of our team at Eureka College of Canada. As a seasoned nurse with a robust international background, including experiences in the Philippines, the UK, and Canada, Jocelyn epitomizes excellence in nursing. Currently serving as our NCAS-RN instructor, she brings a wealth of knowledge and a nuanced understanding of the Canadian nursing landscape. Jocelyn's commitment to nursing education is unparalleled. She guides aspiring nurses through the intricacies of the Canadian nursing system."
    },
    {
        name: "Ederlyn Lumabi",
        picture: "/images/Eder.png",
        position: "NCLEX-RN Instructor",
        description: "Ederlyn Lumabi, our esteemed NCLEX-RN instructor, brings a distinguished background as the former Dean of the College of Nursing at De La Salle Health Sciences Institute. With a wealth of experience, she currently serves as a nurse educator and clinical service manager in Manitoba. Ederlyn's expertise is an invaluable asset to our team, aligning seamlessly with our mission of nursing education and clinical excellence. Her commitment to shaping the future of nursing aligns perfectly with our goals. "
    }
]

const whycards = [{
        title: "PROVEN TRACK RECORD",
        info: "Each instructor has a high success rate in coaching students to pass their certification exams."
    },
    {
        title: "REAL-WORLD EXPERIENCE",
        info: "Our team has worked in various healthcare settings across Canada, bringing valuable insights into Canadian healthcare practices."
    },
    {
        title: "PATIENT & SUPPORTIVE",
        info: "We provide a supportive and engaging learning environment where no question goes unanswered."
    },
    {
        title: "EXAM-FOCUSED",
        info: "Our instructors stay up-to-date with the latest exam trends and ensure you’re equipped with the knowledge and strategies to pass on the first try."
    }
]

const About = () => {
    return (
        <section className={styles.about_main_container}>
            <div className={styles.about_sub_upper_container}>
                <p className={styles.about_title}>Your Journey to Becoming a Canadian Nurse Starts Here</p>
                <br></br>
                <p className={styles.about_info}>At Footprints Nursing Review Center, we walk beside you every step of the way on your path to nursing success in Canada. Whether you&apos;re preparing for the NCLEX, NCAS SLA, or CBA, we are committed to helping Internationally Educated Nurses (IENs) achieve their dreams with the best-in-class training and resources.</p>
                <br></br>
                <p className={styles.about_info}>With over 5 years of excellence, our review programs are designed to simplify the complex journey of nursing certification and licensure in Canada. Our tailored courses, combined with real-life insights and industry expertise, give you the confidence and skills you need to succeed.</p>
            </div>
            <div className={styles.about_sub_lower_container}>
                <div className={styles.about_sub_lower_bg}>
                    <div className={styles.about_card_container}>
                        {
                            instructors.map((instructor, idx) => (
                                <AboutCard key={instructor+idx} instructor={instructor}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={styles.about_sub_lower2_container}>
                <p className={styles.about_title2}>What Makes Our Instructors Stand Out</p>
                <div className={styles.whycard_container}>
                    {
                        whycards.map((item,idx) => (
                            <WhyCard key={item+idx} cardInfo={item} />
                        ))
                    }
                </div>
            </div>

            <div className={styles.about_sub_lower3_container}>
                <div className={styles.sub_lower3_bg}>
                    <p className={styles.about_info2}>
                    Join the hundreds of successful IEN&apos;s who&apos;ve trusted 
                    <b> Footprints Nursing Review Center</b> to guide them to their Canadian nursing career.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;