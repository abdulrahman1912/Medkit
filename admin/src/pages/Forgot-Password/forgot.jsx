import React from 'react'
import Style from './forgot.module.css'
import logobig from '../../assets/logobig.svg'
import { FormGroup,Button } from '../../components'

export const ForgotPassword = () => {
  return (
    <div className={Style.loginContainer}>
      <img src={logobig} alt="" />
      <div className={Style.loginForm}>
        <h1 >Forgot Your Password</h1>
        <FormGroup
          label={'Email'}
          type={'email'}
          name={'email'}
          placeholder={'rajmuzz@gmail.com'}
        />
        
        <Button text={'Continue'} style={{marginTop:100}} />
        <span style={{color:'#000',width:"50%"}}>Don’t have an account? <p style={{ color: '#5F77E1',margin:0}}>Sign Up</p></span>
      </div>
    </div>
  )
}