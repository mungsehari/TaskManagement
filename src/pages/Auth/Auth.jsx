import React, { useState } from "react";
import "./Auth.css";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const togglePanel = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="box lg:max-w-4xl">
        <div
          className={`cover ${
            isRegister ? "rotate-active" : ""
          } flex items-center justify-center `}
        >
          <div className="front">
            <img
              src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <div className="text">
              <span className="text-1">
                Success is built upon well-organized task
              </span>
              <span className="text-2 text-xs">Let's get connected</span>
            </div>
          </div>

          <div className="back">
            <img
              src="https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
        </div>

        <div className="forms h-full">
          <div className="form-content h-full">
            <div className="login-form">
              <Signin togglePanel={togglePanel} />
            </div>
            <div className="signup-form">
              <Signup togglePanel={togglePanel} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
