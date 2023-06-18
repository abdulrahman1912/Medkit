import React from 'react'
import Style from './main.module.css'
import notification from '../../assets/notification.svg'
import { Card, Table, TableRow, tabledata, SpaceBetween } from '../../components'
import card from '../../assets/card.svg'
import success from '../../assets/success.svg'
import pending from '../../assets/pending.svg'
import failed from '../../assets/failed.svg'

export const Main = () => {
  const tablerows = tabledata.map(({ Sn, Name, Status, TimeStamp, Type, Amount }) => {
    return <TableRow
      key={Sn}
      Sn={Sn}
      Name={Name}
      Status={Status}
      Amount={Amount}
      Type={Type}
      TimeStamp={TimeStamp}
    />
  })
  const tableHeads = ['Sn','Name','Status','Amount',"Type",'TimeStamp']
  return (
    <div className={Style.main}>
      <SpaceBetween
        style={{ fontSize: 30, fontWeight: '800' }}
        text1={'Quick Overview'}
        text2={<img src={notification} alt="" />}
      />
      <div className={Style.row}>
        <Card img={card} text={'Total Customers'} number={'20,000'} color={'#5686E1'} />
        <Card img={success} text={'Successful Transactions'} number={'19,990'} color={'#38FF38'} />
        <Card img={pending} text={'Pending Transactions'} number={10} color={'#F29D38'} />
        <Card img={failed} text={'Failed Transactions'} number={0} color={'#EB3223'} />
      </div>
      <SpaceBetween
        style={{ color: 'grey' }}
        text1={'Recent customer transaction'}
        text2={<h3 style={{ textDecoration: 'underline', color: '#5F77E1' }}>View All</h3>}
      />
      <Table th={tableHeads} >
        {tablerows}
      </Table>
    </div>
  )
}
