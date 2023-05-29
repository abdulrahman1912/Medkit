import React from 'react'
import Style from './Nav.module.css'
import logonav from '../../assets/logonav.svg'
import {Row} from '../RowComponent/Row'
import dashboard from '../../assets/dashboard.svg'
import signout from '../../assets/signout.svg'
import customer from '../../assets/customer.svg'
import product from '../../assets/product.svg'
import Transaction from '../../assets/Transaction.svg'
import prescribtion from '../../assets/prescribtion.svg'
import { useNavigate } from 'react-router-dom'

export const Nav = () => {
    const navigate = useNavigate()
  return (
    <div className={Style.Container}>
      <img src={logonav} alt="" />
      <div className={Style.middle} >
        <Row img={dashboard} text="Dashboard" onClick={()=>{navigate('/dashboard/main')}}/>
        <Row img={customer} text="Customer" onClick={()=>{navigate('/dashboard/customer')}}/> 
        <Row img={product} text="Product" onClick={()=>{navigate('/dashboard/product')}}/>  
        <Row img={Transaction} text="Transaction" onClick={()=>{navigate('/dashboard/Transaction')}}/>
        <Row img={prescribtion} text="Prescribtion" onClick={()=>{navigate('/dashboard/prescribtion')}}/>
      </div>
      <Row img={signout} text='Sign Out' onClick={()=>{navigate('/')}}/>
    </div>
  )
}
