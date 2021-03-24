import {useForm} from "react-hook-form";
import {renderInformation} from "../data/displayData";
import React from "react";

const SignupForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
    alert("I dont work yet");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderInformation.signUpData.formFields.map(x =>
        <>
          <label key={x.htmlName}>
            {x.displayName}
            <input name={x.htmlName}
                   type="text"
                   ref={register(x.hookFormArgs)}/>
          </label>
        </>
      )}
      <input type="submit" value="Submit" />
    </form>
  )
}
export default SignupForm;