import React from 'react'
import Style from './login.module.css'
import logobig from '../../assets/logobig.svg'
import { FormGroup,Button } from '../../components'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  return (
    <div className={Style.loginContainer}>
      <img src={logobig} alt="" />
      <div className={Style.loginForm}>
        <h1 >Login To Dashboard</h1>
        <FormGroup
          label={'Email'}
          type={'email'}
          name={'email'}
          placeholder={'rajmuzz@gmail.com'}
        />
        <FormGroup
          label={'Password'}
          type={'password'}
          name={'password'}
          placeholder={'123456'}
        />
        <p onClick={()=>{navigate('/forgotPassword')}}>Forgot password?</p>
        <Button text={'Login'} style={{width:300}} />
        <span style={{color:'#000',width:"50%"}}>Don’t have an account? <p style={{ color: '#5F77E1',margin:0}} onClick={()=>{navigate('/register')}} >Sign Up</p></span>
      </div>
    </div>
  )
}