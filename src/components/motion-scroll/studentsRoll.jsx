import Nutrotion from "../Teams/nutrotion";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden w-full whitespace-nowrap">
      <motion.div className="flex space-x-8 items-center" style={{ x }}>
        {children}
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <section className="overflow-hidden w-full" style={{ direction: "ltr" }}>
      <ParallaxText baseVelocity={-3}>
        <div className="flex space-x-4">
          <Nutrotion name="Mohammad" />
          <Nutrotion name="Khaled" />
          <Nutrotion name="Rawan" />
          <Nutrotion name="Raneem" />
          <Nutrotion name="abd" />
          <Nutrotion name="sawsan" />
          <Nutrotion name="ammro" />
        </div>
      </ParallaxText>

      <ParallaxText baseVelocity={3}>
        <div className="flex space-x-4">
          <Nutrotion name="Omar" />
          <Nutrotion name="Noor" />
          <Nutrotion name="Hadi" />
          <Nutrotion name="Raneem" />
          <Nutrotion name="Layla" />
          <Nutrotion name="Zayn" />
          <Nutrotion name="Yasmin" />
          <Nutrotion name="Amina" />
        </div>
      </ParallaxText>
    </section>
  );
}
