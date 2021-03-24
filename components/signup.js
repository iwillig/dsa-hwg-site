import {renderInformation} from "../data/displayData";
import React from "react";
import SignupForm from "./signupForm"

const Signup = () => {
  return (
    <div>
      <h3>{renderInformation.signUpData.title}</h3>
      <p>{renderInformation.signUpData.description}</p>
      <SignupForm/>
    </div>
  );
}
export default Signup;