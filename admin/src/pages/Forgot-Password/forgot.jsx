import React from 'react'
import Style from './forgot.module.css'
import logobig from '../../assets/logobig.svg'
import { FormGroup,Button } from '../../components'
import { useNavigate } from 'react-router-dom'

export const ForgotPassword = () => {
  const navigate = useNavigate()
  return (
    <div className={Style.loginContainer}>
      <img src={logobig} alt="" />
      <div className={Style.loginForm}>
        <h1 >Forgot Your Password</h1>
        <p>Please enter your email to receive a verification code</p>
        <FormGroup
          label={'Email'}
          type={'email'}
          name={'email'}
          placeholder={'rajmuzz@gmail.com'}
        />
        
        <Button text={'Continue'} style={{marginTop:100}} />
        <span style={{color:'#000',width:"50%"}}>Don’t have an account? <p style={{ color: '#5F77E1',margin:0}} onClick={()=>{navigate('/register')}} >Sign Up</p></span>
      </div>
    </div>
  )
}