import React from 'react'
import SignupImg from '../assets/signup.png'
import Template from '../components/Template'

const  Signup = ({setIsLoggedIn}) => {
  return (
    <Template
    title="join the millions learning to code with StudyNotion for free"
    desc1="Build Skills for today, tomarrow, and beyond"
    desc2="Education to future-proof your carrer."
    image={SignupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}

  />
  )
}

export default Signup