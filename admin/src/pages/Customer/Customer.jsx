import React from 'react'
import Style from './customer.module.css'
import { SpaceBetween, Table,TableRowWithOptions,tabledata2 } from '../../components'
import reload from '../../assets/refresh.svg'


export const Customer = () => {
    const tableRows = tabledata2.map(({Values,Status})=>{
        return <TableRowWithOptions  key={Values} Values={Values} Status={Status} />
    })

    return (
        <div className={Style.main}>
            <SpaceBetween
                style={{ fontSize: 30, fontWeight: '800' }}
                text1={'All Customers'}
                text2={<img src={reload} />}
            />

            <Table th={['Sn', 'Name', 'Email', 'Phone', 'Gender', 'Status']} >
              {tableRows}
            </Table>
        </div>
    )
}
