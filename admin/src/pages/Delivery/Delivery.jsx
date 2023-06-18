import React from 'react'
import Style from './delivery.module.css'
import notification from '../../assets/notification.svg'
import { Card, Table, TableRow, tabledata, SpaceBetween } from '../../components'
import card from '../../assets/card.svg'
import success from '../../assets/drug.svg'

export const Prescription = () => {

    const tableHeads = ['Sn', 'Name', 'Status', 'Amount', "Type", 'TimeStamp']
    return (
        <div className={Style.main}>
          <img src={success} alt=""  style={{width:'30%'}}/>

          
          <SpaceBetween
          style={{width:200}}
          text1={<button className={Style.button}>Approve</button>}
          text2={<button className={Style.button} style={{color:"red",borderColor:"red"}}>Decline</button>}
          />
        </div>
    )
}
