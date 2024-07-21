import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';


const Navbar = (props) => {
let isloggedIn =  props.isloggedIn;
let setIsLoggedIn = props.setIsLoggedIn;



  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
       
       <Link to="/">
        <img src={logo} alt='logo' width={160} height={32} loading="lazy"></img>
       </Link>

<nav>
    <ul className='flex gap-x-5 text-richblack-100'>
        <li>
            <Link to="/">
                Home
            </Link>
        </li>
        <li>
            <Link to="/">
                About
            </Link>
        </li>
        <li>
            <Link to="/">
                Contact
            </Link>
        </li>
    </ul>
</nav>

{/* Login - Signup - Logout Dashboard */}

<div className='flex items-center gap-x-4 text-richblack-100'>
    { !isloggedIn &&
        <Link to ="/login">
            <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                Log in
            </button>
        </Link>
    }
    { !isloggedIn &&
        <Link to ="/signup">
            <button  className='bg-richblack-800  text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                Sign up
            </button>
        </Link>
    }
    { isloggedIn &&
        <Link to ="/logout">
            <button  className='bg-richblack-800  text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'  
            onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out!")
                  
            }}>  
                Logout
            </button>
        </Link>
    }
    { isloggedIn &&
        <Link to ="/dashboard">
            <button  className='bg-richblack-800  text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                Dashboard
            </button>
        </Link>
    }
</div>


    </div>
  )
}

export default Navbar