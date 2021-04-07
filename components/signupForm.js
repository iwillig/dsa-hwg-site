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
    <form onSubmit={handleSubmit(onSubmit)} className = "grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-8  ">
      {renderInformation.signUpData.formFields.map(x =>
        <>
          <label className =" " key={x.htmlName}  >
            <input className = "text-body h-12   " name={x.htmlName}
                   type="text"
                   placeholder={x.displayName}
                   className=" text-black border border-gray-400 pl-4 py-3 focus:outline-none focus:border-gray-500 rounded-sm bg-white bg-opacity-100 "
                   ref={register(x.hookFormArgs)}/>
                   
          </label>
        </>
      )}
      
      <button className ="w-30 h-10 mr-auto ml-0 bg-black text-white shadow py-2 px-4 rounded-full font-bold" type="submit" value="Submit"> Submit </button>
      
    </form>
  )
}
export default SignupForm;