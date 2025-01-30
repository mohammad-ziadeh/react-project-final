import React, { useState, useEffect } from "react";
import Coach from "./coach";
import Technical from "./technical";
import Nutrotion from "./nutrotion";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
// import InfiniteBanner from "../../components/infintyLoop";

export default function Team() {
  // // State to track time
  // const [clock, setClock] = useState(new Date().getTime());

  // useEffect(() => {
  //   // Update clock every second
  //   const interval = setInterval(() => {
  //     setClock(new Date().getTime()); // Update with current timestamp
  //   }, 1000);

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);

  return (
    <div>
      <ScrollAnimation animateIn="fadeIn">
        <Coach />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Technical />
      </ScrollAnimation>
      {/* <InfiniteBanner clock={clock}> */}
      <ScrollAnimation animateIn="fadeIn">
        <Nutrotion />
      </ScrollAnimation>
      {/* </InfiniteBanner> */}
    </div>
  );
}
