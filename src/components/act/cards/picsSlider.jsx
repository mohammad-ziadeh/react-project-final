import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "../styles/Activity.module.css";

function IndividualIntervalsExample() {
  return (
    <Carousel style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
      <Carousel.Item interval={2500}>
        <img
          style={{ borderRadius: "10px", transition: "transform 0.5s ease" }}
          src="../../../public/pexels-vanessa-loring-7868839.jpg"
          alt="First slide"
          className="d-block w-100"
        />
        <Carousel.Caption className={styles.cardsContainerText}>
          <h3>Focused on the Future</h3>
          <p>Encouraging problem-solving skills and innovation in every project.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2500}>
        <img
          style={{ borderRadius: "10px", transition: "transform 0.5s ease" }}
          src="../../../public/pexels-vanessa-loring-7869034 (1).jpg"
          alt="Second slide"
          className="d-block w-100"
        />
        <Carousel.Caption className={styles.cardsContainerText}>
          <h3>Hands-on Robotics</h3>
          <p>Empowering young minds to build and innovate with real-world technology!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2500}>
        <img
          style={{ borderRadius: "10px", transition: "transform 0.5s ease" }}
          src="../../../public/pexels-ron-lach-9783360 (1).jpg"
          alt="Third slide"
          className="d-block w-100"
        />
        <Carousel.Caption className={styles.cardsContainerText}>
          <h3>Exploring the Digital World</h3>
          <p>Inspiring creativity and curiosity through coding and technology.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2500}>
        <img
          style={{ borderRadius: "10px", transition: "transform 0.5s ease" }}
          src="../../../public/pexels-vanessa-loring-7869134 (1).jpg"
          alt="Fourth slide"
          className="d-block w-100"
        />
        <Carousel.Caption className={styles.cardsContainerText}>
          <h3>Collaborative Learning</h3>
          <p>Building connections and teamwork through exciting STEM projects!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
