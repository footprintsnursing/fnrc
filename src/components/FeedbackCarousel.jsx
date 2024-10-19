import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from "../styles/FeedbackCarousel.module.css";

const FeedbackCarousel = () => {
  const feedbacks = [
    { name: 'Sherielynne Guimoc', program:"NCAS-RN/IGA", feedback: 'Preparation for NCAS exam is an overwhelming feeling. Footprints has been very helpful overall,  from the foundation, knowledge consolidation and motivation as well. Sir Wilf and Ms. Marilee were so hands on and approachable. They’re very passionate of teaching. It’s so nice of them to incorporate an individual simulation for practice and feedback. Praying 🙏 for a successful exam to all of us (batch-mates).😇' },
    { name: 'Johnny Doe', program:"NCAS-RN/IGA", feedback: 'Preparation for NCAS exam is an overwhelming feeling. Footprints has been very helpful overall,  from the foundation, knowledge consolidation and motivation as well. Sir Wilf and Ms. Marilee were so hands on and approachable. They’re very passionate of teaching. It’s so nice of them to incorporate an individual simulation for practice and feedback. Praying 🙏 for a successful exam to all of us (batch-mates).😇Preparation for NCAS exam is an overwhelming feeling. Footprints has been very helpful overall,  from the foundation, knowledge consolidation and motivation as well. Sir Wilf and Ms. Marilee were so hands on and approachable. They’re very passionate of teaching. It’s so nice of them to incorporate an individual simulation for practice and feedback. Praying 🙏 for a successful exam to all of us (batch-mates).😇' },
    { name: 'Sherielynne Guimoc', program:"NCAS-RN/IGA", feedback: 'Preparation for NCAS exam is an overwhelming feeling. Footprints has been very helpful overall,  from the foundation, knowledge consolidation and motivation as well. Sir Wilf and Ms. Marilee were so hands on and approachable. They’re very passionate of teaching. It’s so nice of them to incorporate an individual simulation for practice and feedback. Praying 🙏 for a successful exam to all of us (batch-mates).😇' },
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
