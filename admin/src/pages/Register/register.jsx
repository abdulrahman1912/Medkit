import React from 'react'
import Style from '../login/login.module.css'
import logobig from '../../assets/logobig.svg'
import { FormGroup,Button } from '../../components'
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate()
  return (
    <div className={Style.loginContainer}>
      <img src={logobig} alt="" />
      <div className={Style.loginForm}>
        <h1  style={{fontSize:25}}>Register As A Medkit Admin</h1>
        <FormGroup
          label={'FullName'}
          type={'text'}
          name={'fullname'}
          placeholder={'raji muhammad muzzamil'}
        />
        <FormGroup
          label={'Phone Number'}
          type={'number'}
          name={'number'}
          placeholder={'08118529085'}
        />
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
        <FormGroup
          label={'Confirm Password'}
          type={'password'}
          name={'ConfirmPassword'}
          placeholder={'123456'}
        />
        
        <Button text={'sign Up'} style={{width:300}} />
        <span style={{color:'#000',width:"50%"}}>Already have an account? <p style={{ color: '#5F77E1',margin:0}} onClick={()=>{navigate('/')}}>Login</p></span>
      </div>
    </div>
  )
}