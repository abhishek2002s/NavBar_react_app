import React from 'react'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import frameImage from '../assets/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from "react-icons/fc"

const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 justify-between gap-y-0'>
         
         <div className='w-11/12 max-w-[450px]'>
           <h1 
           className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375]'
           >{title}</h1>

           <p className='text-[1.125rem] flex flex-col leading[1.625rem] mt-4'>
            <span className='text-richblack-100 '>{desc1}</span>
            <span className='text-blue-100'>{desc2}</span>
           </p>

           {formtype === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)}


           <div className='flex w-full items-center my-4 gap-x-2'>
            <div className='w-full h-[1px] bg-richblack-700'></div>
            <p className='text-richblack-700 font-medium leading[1.375rem]'>OR</p>
            <div className='w-full h-[1px] bg-richblack-700'></div>
           </div>

            <button className='text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 w-full flex justify-center items-center rounded-[8px] font-medium  '>
            <FcGoogle/>
                <p>Sign up with google</p>
            </button>

         </div>

         <div className='relative w-11/12 max-w-[450px] '>
            <img src={frameImage}
            alt='pattern'
            width={558}
            height={504}
            loading="lazy"
            ></img>

            <img src={image}
            alt='pattern'
            width={558}
            height={ 490}
            loading="lazy"
            className="absolute -top-4  right-4"
            />


         </div>
         
    </div>
  )
}

export default Template