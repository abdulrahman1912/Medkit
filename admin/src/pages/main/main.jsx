import React from 'react'
import Style from './main.module.css'
import notification from '../../assets/notification.svg'
import { Card } from '../../components'
import card from '../../assets/card.svg'
import success from '../../assets/success.svg'
import pending from '../../assets/pending.svg'
import failed from '../../assets/failed.svg'

export const Main = () => {
  return (
    <div className={Style.main}>
      <div className={Style.head}>
        <h1>Quick Overview</h1>
        <img src={notification} alt="" />
      </div>
       <div className={Style.row}>
        <Card img={card} text={'Total Customers'} number={'20,000'} color={'#5686E1'}/>
        <Card img={success} text={'Successful Transactions'} number={'19,990'} color={'#38FF38'}/>
        <Card img={pending} text={'Pending Transactions'} number={10} color={'#F29D38'}/>
        <Card img={failed} text={'Failed Transactions'} number={0} color={'#EB3223'}/>
       
       </div>
       <div className={Style.head}>
        <h3 style={{color:'grey'}}>Recent customer transaction</h3>
        <h3 style={{textDecoration:'underline',color:'#5F77E1'}}>View All</h3>
      </div>
    </div>
  )
}
