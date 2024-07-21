import { prettyDOM } from '@testing-library/react'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
// import { toast} from 'react-hot-toast'


const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData,setFormData] =  useState({
        email:"" ,password:""
    })


     
    const [showPassword,setShowPassword] = useState(false);
     
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
       setIsLoggedIn(true);
       toast.success("Logged In!");
       navigate("/dashboard");
    }

  return (
    <form onSubmit={submitHandler} 
    className='flex flex-col w-full gap-y-4 mt-6'
    >
    <label className='w-full '>
    <p className='text-[0.875rem]  text-richblack-5 mb-1 leading-[1.373rem]'>
        Email  Address <sup className='text-pink-200'>*</sup>
        </p>
        <input required className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full border-b-[1px] p-[12px] '
        type='email'
        value={formData.email}
        onChange={changeHandler}
        placeholder='Enter email id'
        name="email"
        ></input>
    </label>

    <label className='w-full relative'>
    <p className='text-[0.875rem]  text-richblack-5 mb-1 leading-[1.373rem]'>
        passsword <sup className='text-pink-200'>*</sup>
        </p>
        <input
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full border-b-[1px] p-[12px] '
         required
        type={showPassword ? ("text") : ("password")}
        value={formData.password}
        name="password"
        onChange={changeHandler}
        placeholder='Enter passsword'
        ></input>


        <span
            className='absolute right-3 top-[38px] cursor-pointer '
        onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>) : 
            
            (<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}
        </span>



        <Link to="#">
            <p  className='text-x5 mt-1 text-blue-100 max-w-max ml-auto'>
                Forgot passsword
            </p>
        </Link>
    </label>
    
    <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
        Sign In
    </button>
    </form>
  )
}

export default LoginForm