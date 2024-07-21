import React from 'react'
import Template from '../components/Template'
import LoginImg from '../assets/login.png'

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build Skills for today, tomarrow, and beyond"
      desc2="Education to future-proof your carrer."
      image={LoginImg}
      formtype="Login"
      setIsLoggedIn={setIsLoggedIn}

    />
  )
}

export default Login