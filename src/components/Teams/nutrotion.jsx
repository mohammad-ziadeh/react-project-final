import React from "react";
import Rania from "../../../public/img/team (2).png";
import { useTranslation } from "react-i18next";
import { IoArrowForwardOutline } from "react-icons/io5";

import "./team.css";
function Nutrotion({ name, tag }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center w-[150px] h-[200px] space-y-2">
      <div className="w-[150px] h-[150px] rounded-full border-4 border-[#BDE4F4] overflow-hidden">
        <img src={Rania} alt="Member" className="w-full h-full object-cover" />
      </div>
      <h4 className="text-lg font-semibold" style={{ fontFamily: "Nunito" }}>
        {name}
      </h4>
      <h6 className="text-sm text-gray-600" style={{ fontFamily: "Nunito" }}>
        {tag}
      </h6>
    </div>
  );
}

export default Nutrotion;
