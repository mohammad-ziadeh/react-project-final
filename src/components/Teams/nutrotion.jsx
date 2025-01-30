import React from "react";
import Rania from "../../../public/img/team (2).png";
import { useTranslation } from "react-i18next";
import { IoArrowForwardOutline } from "react-icons/io5";


import "./team.css";
function Nutrotion() {
  const { t } = useTranslation();

  const Member = {
    backgroundImage: `url(${[Rania].join(", ")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "200px",
    borderRadius: "50%",
    border: "3px solid #BDE4F4",
  };
  return (
    <div className="Mangement">
      <h2> Students </h2>
      <p> StudentsStudentsStudentsStudentsStudentsStudentsStudentsStudents </p>

      <div className="container-mang">
        <div className="member">
          <img
            src={Rania}
            alt="Member"
            style={Member}
            className="image-member"
          />
          <h4> Student One </h4>
          <h6> Technical Trainer </h6>
          <a
            href="/Rania"
            style={{ borderBottom: "1px dotted red", fontSize: "14px" }}
          >
            {" "}
            More <IoArrowForwardOutline />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
export default Nutrotion;
