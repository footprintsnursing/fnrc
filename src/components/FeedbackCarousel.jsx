import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from "../styles/FeedbackCarousel.module.css";

const FeedbackCarousel = () => {
  const feedbacks = [
    { name: 'Kruti Goswami', program:"NCAS-RN/IGA", feedback: 'Highly recommended! Excellent explanations with lots of useful tips and techniques for passing NCAS test. Mentor provided endless online material to review and self evaluation.Thanks Marilee! I learned  and enjoyed in-person sessions with fun as well.Thank you very much for directing way to IENs in their journey to become RN in BC. 😊' },
    { name: 'Stephany Fagyan', program:"NCAS-RN/IGA", feedback: 'Ms Marilee is very detailed and passionate about teaching. You won’t be disappointed. She’s extremely organized and very responsive. She offers many additional tools to help with the process and she definitely goes out of her way to ensure her students are getting what they need. Highly recommend FNRC!' },
    { name: 'Danbe Seo', program:"NCAS-RN/IGA", feedback: 'her classroom is very neat, and she always well prepares the materials for the class. the tuition fee is reasonable. I learned about not only CBA but also practical skills. She is ready to answer all my questions, and it is very helpful. I can feel that she really cares about us. Her class is even fun! Studying is painful, but I could enjoy learning with her. I strongly recommend her lecture.' },    
    { name: 'Jennifer Dionisio', program:"NCAS-RN/IGA", feedback: 'Ms. Marilee is such a blessing to IENs who wants to pursue nursing career in Canada. She is such an inspiration and always encourage us that everything is possible through hardwork and perseverance. She taught us many things about the Canadian Healthcare system and definitely learned a lot from it. With her great expertise gained from her vast nursing experience, this is something that you cannot learn from the books. After the NCAS review, it gave a light for my nursing career and I want to pursue it despite the many challenges that we IENs already faced. She told us that there is only delays, but we can reach the destination of being RNs here in Canada. Thank you so much for inspiring, sharing your knowledge and resources and helping us through this journey.' }
  ];

  return (
    <div className={styles.feedback_container}>
        <Carousel 
          autoPlay 
          infiniteLoop 
          interval={3000} 
          showThumbs={false} 
          showStatus={false}
          showIndicators={false}
          transitionTime={1000}
          >
        {feedbacks.map((item, index) => (
            <div className={styles.feedback_card} key={index}>
                <p>{item.feedback}</p>
                <br></br>
                <p>{item.name}</p>
                <p>{item.program}</p>
            </div>
        ))}
        </Carousel>
    </div>
  );
};

export default FeedbackCarousel;
