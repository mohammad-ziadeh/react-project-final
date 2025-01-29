import React from "react";
import "./about.css";
import { TbHorseToy } from "react-icons/tb";
import { IoIosHome } from "react-icons/io";
import { GiNotebook } from "react-icons/gi";

function About() {
  return (
    <div className="container">
      <h1>
        welcome to our <span>Shining Stars Academy</span>
      </h1>
      <p>
        The shining stars academy school seeks to provide an outstanding
        educational environment that enhances children's abilities and develops
        their academic and social skills. We believe that every child has unique
        possibilities.
      </p>

      <div className="grid">
        <div class="flex3">
          <div>
            
            <IoIosHome
              style={{
                color: "white",
                backgroundColor: "#2a92ca",
                borderRadius: "50px",
                width: "80px",
                height: "80px",
              }}
            />
          </div>
          <div>
            <TbHorseToy
              style={{
                color: "white",
                backgroundColor: "#fbcc1b",
                borderRadius: "50px",
                width: "80px",
                height: "80px",
              }}
            />
          </div>
          <div>
            <GiNotebook
              style={{
                color: "white",
                backgroundColor: "#14dad6",
                borderRadius: "50px",
                width: "80px",
                height: "80px",
              }}
            />
          </div>
        </div>

        <div className="flex2">
          <ul>
            <li className="one">
              <h2>Frindly Environment</h2>
            </li>
            <li className="pargraph">
              Providing an encouraging and safe environment<br></br> that
              encourages children to learn and interact freely{" "}
            </li>
            <li className="tow">
              <h2>Educational Toys</h2>
            </li>
            <li className="pargraph">
              Games aimed at the pleasant development of children'smental and
              physical skills.{" "}
            </li>
            <li className="three">
              <h2>Educational Activities</h2>
            </li>
            <li className="pargraph">
              Activities aimed at stimulating children's <br></br>thinking and
              creativity through play and practical experiences{" "}
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
