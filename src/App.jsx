import React from "react";

import Home from "./pages/home";
import Creat from "./components/login/creatAndLogin";
import Teams from "./components/Teams/team";

export default function App() {
  return (
    <div>

      <Home />

      <Teams />
      {/* <Creat /> */}
    </div>
  );
}
