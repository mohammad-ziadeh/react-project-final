import * as React from "react";
import { useTime } from "framer-motion";
import InfiniteBanner from "./slideDown";
import InfiniteBanner2 from "./slideUp";
import Footer from "../Footer";
import FooterInfo1 from "../infoFooter";
import FooterInfo2 from "../infoFooter2";
import FooterInfo3 from "../infoFooter3";
import FooterInfo4 from "../infoFooter4";

const App = () => {
  const clock = useTime();

  return (
    <div>
      <InfiniteBanner2 clock={clock}>
        <div style={{ display: "flex", backgroundColor: "black" }}>
          <FooterInfo1 />
          <FooterInfo2 />
          <FooterInfo3 />
          <FooterInfo4 />
        </div>
      </InfiniteBanner2>
      <InfiniteBanner clock={clock}>
        <div style={{ display: "flex", backgroundColor: "black" }}>
          <Footer />
          <Footer />
          <Footer />
          <Footer />
          <Footer />
        </div>
      </InfiniteBanner>
    </div>
  );
};

export default App;
