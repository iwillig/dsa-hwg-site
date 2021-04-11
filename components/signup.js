import {renderInformation} from "../data/displayData";
import React from "react";
import SignupForm from "./signupForm"

const Signup = () => {
  return (
    <div className = "bg-secondary ">
      <div className ="pt-6  pb-16 tablet:pb-22 mx-8  desktop:mx-64 ">
      <h3 className = "text-header  font-bold ">{renderInformation.signUpData.title}</h3>
        <div className = " mb-24 mt-6 mx-auto grid gap-0 grid-cols-1 tablet:grid-cols-2 ">
        <p className = "desktop:mr-36">{renderInformation.signUpData.description}</p>
        <SignupForm/>
        </div>
        </div>
    </div>
  );
}
export default Signup;