import * as React from "react";
import {
  motion,
  useTime,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import PropTypes from "prop-types";

const InfiniteBanner = ({
  clock,
  loopDuration = 72000,
  children,
  ...otherProps
}) => {
  const progress = useTransform(
    clock,
    (time) => (time % loopDuration) / loopDuration
  );
  const percentage = useTransform(progress, (t) => t * 100);
  const translateX = useMotionTemplate`-${percentage}%`;

  return (
    <div
      {...otherProps}
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        ...otherProps.style,
      }}
    >
      <motion.div style={{ translateX, width: "max-content" }}>
        <div>{children}</div>
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: "100%",
            top: 0,
          }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};

InfiniteBanner.propTypes = {
  clock: PropTypes.object.isRequired,
  loopDuration: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default InfiniteBanner;
