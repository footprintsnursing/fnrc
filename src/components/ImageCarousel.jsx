import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from "../styles/ImageCarousel.module.css";
const ImageCarousel = () => {
  return (
    <div className={styles.carousel_container}>
      <Carousel autoPlay 
        interval={3000} 
        swipeable={true} 
        infiniteLoop 
        showStatus={false} 
        showThumbs={false}
        transitionTime={2000} >
        <div>
          <img className={styles.carousel_img} src="/images/home_pic1.JPG" alt="Image 1" />
        </div>
        {/* <div>
          <img className={styles.carousel_img} src="/images/home_pic2.JPG" alt="Image 2" />
        </div>
        <div>
          <img className={styles.carousel_img} src="/images/home_pic7.jpg" alt="Image 3" />
        </div> */}
        <div>
          <img className={styles.carousel_img} src="/images/home_pic3.JPG" alt="Image 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
