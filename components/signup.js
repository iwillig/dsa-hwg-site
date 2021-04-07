import {renderInformation} from "../data/displayData";
import React from "react";
import SignupForm from "./signupForm"

const Signup = () => {
  return (
    <div className = "border-t border-transparent bg-secondary">
      <div className ="ml-8  mt-6">
      <h3 className = "text-header  font-bold ">{renderInformation.signUpData.title}</h3>
        <div className = " mt-6 mx-auto grid gap-0 grid-cols-2">
        <p className = "">{renderInformation.signUpData.description}</p>
        <SignupForm/>
        </div>
        </div>
    </div>
  );
}
export default Signup;