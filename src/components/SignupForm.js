import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
const navigate = useNavigate();
 const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    Email:"",
    Password:"",
    confirmPassword:"",
 })


 const [showPassword,setShowPassword] = useState(false);
 const [showConfirmPassword,setShowConfirmPassword] = useState(false);

 const [accountType, setAccountType] = useState("student");

 function changeHandler(event){
    setFormData( (prevData) => (
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    ))
}

function submitHandler(event){
    event.preventDefault();
    if(formData.Password != formData.confirmPassword){
        toast.error("password does not match");
        return;
    }
    setIsLoggedIn(true);
    toast.success("Account created");
    const accountData = {
        ...formData
    };
    console.log("Printing account data");
    console.log(accountData);
    navigate("/dashboard");
    
}

  return (
    <div>
        {/* student-Instructor tab */}
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button 

className={`${accountType === "student" 
            ?
            "bg-richblack-900 text-richblack-5"
            :
            "bg-transparent text-richblack-200"
            } py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("student")}
       >
                Students
            </button>
            <button
             className={`${accountType === "instructor" 
            ?
            "bg-richblack-900 text-richblack-5"
            :
            "bg-transparent text-richblack-200"
            } py-2 px-5 rounded-full transition-all duration-200`}
            
            
             onClick={() => setAccountType("instructor")}>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
        <div className='flex justify-between mt-4'>
        {/* firstName and lastName */}
            <lable>
                <p className='text-[0.875rem]  text-richblack-5 mb-1 leading-[1.373rem]'>First Name <sup>*</sup></p>
                <input 
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full border-b-[1px] p-[12px] '
                required type='text' 
                name="firstName"
                onChange={changeHandler}
                placeholder='Enter First Name'
                value={formData.firstName}
                ></input>
            </lable>

            <lable>
                <p className='text-[0.875rem]  text-richblack-5 mb-1 leading-[1.373rem]'>Last Name <sup className='text-pink-200'>*</sup></p>
                <input  
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full border-b-[1px] p-[12px] '
                type='text' required 
                name="lastName"
                onChange={changeHandler}
                placeholder='Enter last Name'
                value={formData.lastName}
                ></input>
            </lable>

        </div>

{/* email address */}
<div className='mt-[20px]'>
<lable>
                <p className='text-[0.875rem]  text-richblack-5 mb-1 leading-[1.373rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
                <input
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full border-b-[1px] p-[12px] '
                 required type='email' 
                name="Email"
                onChange={changeHandler}
                placeholder='Enter email address'
                value={formData.Email}
                ></input>
            </lable>
</div>
        

 {/* cratepassword and confirm password */}
 <div className='w-full flex justify-between mt-4'>
 <lable className='relative'>
                <p className='text-[0.875rem]  text-richblack-5 mb-1 leading-[1.373rem]'>Create Password <sup className='text-pink-200'>*</sup></p>
                <input 
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full border-b-[1px] p-[12px] '
                required type= {showPassword ? ("text") : ("password")} 
                name="Password"
                onChange={changeHandler}
                placeholder='Enter address'
                value={formData.Password}
                ></input>
                  <span
                       className='absolute right-3 top-[38px] cursor-pointer '
                   onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}
                  </span>
            </lable>



 <lable  className='relative'>
                <p className='text-[0.875rem]  text-richblack-5 mb-1 leading-[1.373rem]'>Confrim Password <sup className='text-pink-200'>*</sup></p>
                <input
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full border-b-[1px] p-[12px] '
                 required type= {showConfirmPassword ? ("text") : ("password")} 
                name="confirmPassword"
                onChange={changeHandler}
                placeholder='Confirm Password'
                value={formData.confirmPassword}
                ></input>
                  <span 
                       className='absolute right-3 top-[38px] cursor-pointer '
                  onClick={() => setShowConfirmPassword((prev) => !prev)}>
                  {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}
                  </span>
             </lable>
             </div>
             <button
             className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 w-full'
             >Create Account</button>
         </form>
    </div>
  )
}

export default SignupForm