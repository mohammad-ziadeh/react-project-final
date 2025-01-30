import React from "react";
import "./about.css";
import { TbHorseToy } from "react-icons/tb";
import { IoIosHome } from "react-icons/io";
import { GiNotebook } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <h1>
        welcome to our <span>Shining Stars Academy</span>
      </h1>
      <p className="headerDis">{t("description")}</p>

      <div className="grid">
        <div className="flex2">
          <ul>
            <li className="one">
              <h2>
                <ScrollAnimation animateIn="fadeIn">
                  <IoIosHome
                    style={{
                      color: "white",
                      backgroundColor: "#2a92ca",
                      borderRadius: "50px",
                      width: "80px",
                      height: "80px",
                    }}
                  />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="slideInLeft"
                  animateOnce={true}
                  duration={2}
                  initiallyVisible={false}
                >
                  Friendly Environment
                </ScrollAnimation>
              </h2>

              <p className="paragraph">
                <ScrollAnimation
                  animateIn="slideInRight"
                  animateOnce={true}
                  duration={2}
                  initiallyVisible={false}
                >
                  Providing an encouraging and safe environment that encourages
                  children to learn and interact freely
                </ScrollAnimation>
              </p>
            </li>
            <li className="tow">
              <h2>
                <ScrollAnimation animateIn="fadeIn">
                  <TbHorseToy
                    style={{
                      color: "white",
                      backgroundColor: "#fbcc1b",
                      borderRadius: "50px",
                      width: "80px",
                      height: "80px",
                    }}
                  />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="slideInLeft"
                  animateOnce={true}
                  duration={2}
                  initiallyVisible={false}
                >
                  Educational Toys
                </ScrollAnimation>
              </h2>
              <p className="paragraph">
                <ScrollAnimation
                  animateIn="slideInRight"
                  animateOnce={true}
                  duration={2}
                  initiallyVisible={false}
                >
                  Games aimed at the pleasant development of children's mental
                  and physical skills.
                </ScrollAnimation>
              </p>{" "}
            </li>
            <li className="three">
              <h2>
                <ScrollAnimation animateIn="fadeIn">
                  <GiNotebook
                    style={{
                      color: "white",
                      backgroundColor: "#14dad6",
                      borderRadius: "50px",
                      width: "80px",
                      height: "80px",
                    }}
                  />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="slideInLeft"
                  animateOnce={true}
                  duration={2}
                  initiallyVisible={false}
                >
                  Educational Activities
                </ScrollAnimation>
              </h2>
              <p className="paragraph">
                <ScrollAnimation
                  animateIn="slideInRight"
                  animateOnce={true}
                  duration={2}
                  initiallyVisible={false}
                >
                  Activities aimed at stimulating children's thinking and
                  creativity through play and practical experiences
                </ScrollAnimation>
              </p>{" "}
            </li>
          </ul>
        </div>
        {/* ............................ */}
        <div className="imag">
          <img src="../../../public/img/about2.png.webp"></img>
        </div>

        {/* ........................................ */}
      </div>
    </div>
  );
}

export default About;
