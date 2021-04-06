import {renderInformation} from "../data/displayData";
import React from "react";
import SignupForm from "./signupForm"

const Signup = () => {
  return (
    <div className = "bg-secondary">
      <div className ="ml-8">
      <h3 className = "text-header  font-bold mt-6">{renderInformation.signUpData.title}</h3>
        <div className = "mt-6 mx-auto grid gap-4 grid-cols-2">
        <p className = "">{renderInformation.signUpData.description}</p>
        <SignupForm/>
        </div>
        </div>
    </div>
  );
}
export default Signup;