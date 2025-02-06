import React, { useRef } from "react";
import Login from "../components/login/login";
import Signup from "../components/login/signup";
import "../components/login/log.css";

export default function CreatAndLogin() {



  const loginSectionRef = useRef(null);
  const signupSectionRef = useRef(null);
  const handleScrollToLogin = () => {
    loginSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleScrollToSignup = () => {
    signupSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleValidSignIn = () => {
 
  };
  return (
    <div style={{ overflow: "hidden", height: "130vh" }}>
      <div ref={signupSectionRef}>
        <Signup handleScrollToLogin={handleScrollToLogin} />
      </div>
      <div ref={loginSectionRef}>
        <Login
          handleScrollToSignup={handleScrollToSignup}
          onValidSignIn={handleValidSignIn}
        />
      </div>
    </div>
  );
}

