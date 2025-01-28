// import React from "react";
// import Login from "./login";
// import Signup from "./signup";
// export default function creatAndLogin() {
//   return (
//     <div>
//       <Login />
//       <Signup />
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import Login from "./login";
import Signup from "./signup";

export default function CreatAndLogin() {
  const [isAccountCreated, setIsAccountCreated] = useState(false);

  // Disable scrolling when the account isn't created
  useEffect(() => {
    if (!isAccountCreated) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isAccountCreated]);

  return (
    <div>
      {!isAccountCreated ? (
        <Signup onAccountCreated={() => setIsAccountCreated(true)} />
      ) : (
        <Login />
      )}
    </div>
  );
}
