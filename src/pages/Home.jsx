import React from "react";
import HomeCourseCard from "../components/HomeCourseCard";
import styles from "../styles/Home.module.css";
import WhyCard from "../components/WhyCard";
import FeedbackCarousel from "../components/FeedbackCarousel";

const ncas = {
    picture: "/images/NCAS_IGA.jpg",
    title: "NCAS/IGA - CBA/SLA Mentorship Program",
    description: "A comprehensive course designed to guide internationally educated nurses (IENs) through the IGA (Inspired Global Assessment) formerly known as NCAS (Nursing Community Assessment Service) Competency Assessment Program. This program focuses on:",
    info: ["Test-taking strategies: Learn how to navigate the structure of the exams effectively.", "Content mastery: Review key areas of nursing competencies assessed in the IGA.", "Clinical simulations: Gain practical, hands-on experience with realistic, case-based scenarios.", "Focused preparation: We help ensure you are prepared for the Simulation Lab Assessment (SLA), and components of the Computer-Based Assessment (CBA)."]
};

const nclex = {
    picture: "/images/NCLEX.jpg",
    title: "NCLEX-RN Mentorship Program",
    description: "Our NCLEX-RN Mentorship Program is designed to provide you with the focused, in-depth preparation you need to pass the NCLEX-RN exam. We place special emphasis on:",
    info: ["Enjoy a 1-year subscription to our LMS (Learning Management System), providing access to 2,000 Qbanks and Powerpoint for comprehensive exam preparation, along with full-length NCLEX mock exams and personalized feedback to help you improve your performance.","Clinical Judgment and Critical Thinking: Develop the necessary skills to answer NCLEX-style questions with confidence and accuracy.", "Canadian Nursing Context: Understand the standards and expectations of nursing in Canada, with tailored strategies for success in the Canadian healthcare environment.", "One-on-One Mentorship: Benefit from personalized mentorship with expert instructors who guide you through each stage of preparation."]
};

const card = [
    {
        title: "EXPERT GUIDANCE",
        info: "Our team of experienced instructors, many of whom are successful Canadian nurses, provides mentorship and personalized support."
    },
    {
        title: "PROVEN TRACK RECORD",
        info: "With 5 years of expertise, we have consistently achieved a high success rate in guiding IENs to pass their NCAS/IGA and NCLEX-RN exams."
    },
    {
        title: "CONVENIENT LOCATION",
        info: "Located just a few steps from New Westminster Station, our center is easily accessible for busy students."
    },
    {
        title: "SUPPORTIVE ENVIRONMENT",
        info: "Our small class sizes and welcoming community foster collaboration and confidence-building among IENs."
    },
    {
        title: "FLEXIBLE SCHEDULE",
        info: "Offering both weekday and weekend review sessions to suit your busy life."
    },
    {
        title: "HANDS-ON PRACTICE",
        info: "Our courses include simulation-based learning, giving you the opportunity to practice clinical scenarios and develop critical thinking skills essential for real-world nursing situations."
    }
]

const Home = () => {
    return (
        <div className={styles.home_main_container}>
            <div className={styles.home_first_sub_container}>
                <h1 className={styles.title2}>Supporting IEN&apos;s Transition into Canadian Nursing </h1>
                <br></br>
                <p className={styles.info2}>At Footprints Nursing Review Center, we dedicate ourselves to helping you pursue and achieve a nursing career in Canada.</p>
            </div>
            <div className={styles.home_second_sub_container}>
                <div className={styles.second_container}>
                    <h2 className={styles.title1}>Your Pathway to Canadian Nursing</h2>
                    <br></br>
                    <p className={styles.info1}>Navigating the road to becoming a registered nurse in Canada can be challenging, but at Footprints Nursing Review Center, we’re here to make that journey easier. Our specialized programs, including NCAS/IGA - CBA/SLA Review and NCLEX-RN Mentorship, equip internationally educated nurses with the skills, knowledge, and confidence needed to meet Canadian licensure requirements and thrive in the healthcare sector.</p>
                </div>
                <div className={styles.card_container}>
                    <HomeCourseCard course={ncas}/>
                    <hr></hr>
                    <HomeCourseCard course={nclex}/>
                </div>
            </div>
            <div className={styles.home_third_sub_container}>
                <div className={styles.third_container}>
                    <h2 className={styles.title3}>Why Choose Footprints Nursing Review Center</h2>
                    <div className={styles.third_card_container}>
                        <div className={styles.third_card_holder}>
                            {/* <WhyCard/>
                            <WhyCard/> */}

                            {card.map((item,idx) => (
                                <WhyCard key={item + idx} cardInfo={item}/>
                            ))}
                        </div>
                        <img className={styles.third_img} src="/images/fnrc_folder.jpg"/>
                    </div>
                </div>
            </div>
            <div className={styles.home_fourth_sub_container}>
                <div className={styles.title_container}>
                    <h2 className={styles.title1}>Success Starts Here: What Our Student Say</h2>
                </div>
                <div className={styles.fourth_container}>
                    <div className={styles.fourth_left_container}>
                        <p className={styles.info1}>The journey to becoming a registered nurse in Canada can be challenging, but at Footprints Nursing Review Center, our students’ success stories prove that it’s possible. Through our comprehensive mentorship programs, we’ve helped hundreds of IENs overcome obstacles and achieve their goals. Discover what our students have to say about their experience with us.</p>
                        <a className={styles.learn_btn} href="/">Learn More</a>
                    </div>
                    <FeedbackCarousel/>
                </div>
            </div>
        </div>
    )
}

export default Home;