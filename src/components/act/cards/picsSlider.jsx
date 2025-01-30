import Carousel from "react-bootstrap/Carousel";
import React from "react";
import styles from "../styles/Activity.module.css";

function IndividualIntervalsExample() {
  return (
    <Carousel style={{ width: "70%", height: "70%" }}>
      <Carousel.Item interval={2500} >
        <img
          style={{ borderRadius: "10px" }}
          src="../../../public/pexels-vanessa-loring-7868839.jpg"
          alt="First slide"
          className="d-block w-100"
        />
        <Carousel.Caption className={styles.cardsContainerText}>
          <h3>Focused on the future</h3>
          <p>
            "Encouraging problem-solving skills and innovation in every
            project."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          style={{ borderRadius: "10px" }}
          src="../../../public/pexels-vanessa-loring-7869034 (1).jpg"
          alt="Second slide"
          className="d-block w-100"
        />
        <Carousel.Caption className={styles.cardsContainerText}>
          <h3>Hands-on robotics</h3>
          <p>
            "Empowering young minds to build and innovate with real-world
            technology!"
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          style={{ borderRadius: "10px" }}
          src="../../../public/pexels-ron-lach-9783360 (1).jpg"
          alt="Third slide"
          className="d-block w-100"
        />
        <Carousel.Caption className={styles.cardsContainerText}>
          <h3>Exploring the digital world</h3>
          <p>
            "Inspiring creativity and curiosity through coding and technology."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          style={{ borderRadius: "10px" }}
          src="../../../public/pexels-vanessa-loring-7869134 (1).jpg"
          alt="Third slide"
          className="d-block w-100"
        />
        <Carousel.Caption className={styles.cardsContainerText}>
          <h3>Collaborative learning</h3>
          <p>
            "Building connections and teamwork through exciting STEM projects!"
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
