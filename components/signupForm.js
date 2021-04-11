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
    <form onSubmit={handleSubmit(onSubmit)} className = "grid tablet:grid-cols-1 laptop:grid-cols-2 laptop:grid-rows-2 gap-x-6  gap-y-8">
      {renderInformation.signUpData.formFields.map(x =>
        <>
          <label className =" " key={x.htmlName}  >
            <input  name={x.htmlName}
                   className="form-input w-full mt-6 tablet:mt-0 text-black border border-gray-400 pl-4 py-3 focus:outline-none focus:border-gray-500 rounded-sm bg-white bg-opacity-100 "
                   type="text"
                   placeholder={x.displayName}
                   ref={register(x.hookFormArgs)}/>
                   
          </label>
        </>
      )}
      
      <button className ="  mr-auto ml-0 bg-black text-white shadow py-2 px-4 rounded-full font-bold transform hover:scale-105" type="submit" value="Submit"> Submit </button>
      
    </form> 
  )
}
export default SignupForm;