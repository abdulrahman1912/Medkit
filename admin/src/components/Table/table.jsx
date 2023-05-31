import React from 'react'
import Style from './table.module.css'

export const TableRow = ({ Sn, Name, Type, Amount, Status, TimeStamp }) => {
    const color = Status === 'pending' ? '#F29D38' : Status === 'failed' ? '#EB3223' : '#38FF38'
    return (
        <tr>
            <td>{Sn}</td>
            <td>{Name}</td>
            <td>{Type}</td>
            <td>{Amount}</td>
            <td className={Style.parent}>
                <div className={Style.status} style={{ borderColor: color, color: color }}>{Status}</div>
            </td>
            <td>{TimeStamp}</td>
        </tr>
    )
}


export const Table = ({ children,th }) => {
    const tableHeads = th.map((head)=>{
       return <th>{head}</th>
    })
    return (
        <table className={Style.table}>
            <tr className={Style.head}>
               {tableHeads}
            </tr>
           {children}
        </table>
    )
}


export const tabledata = [
    {
        Sn: 1,
        Name: 'raji',
        Type: "remita",
        Amount: 120000,
        Status: 'failed',
        TimeStamp: 'may 20 - 3:00am'
    },
    {
        Sn:2,
        Name: 'fatima',
        Type: "remita",
        Amount:340000,
        Status: 'pending',
        TimeStamp: 'may 10 - 6:00am'
    },
    {
        Sn:3,
        Name:'ibrahim',
        Type:'paystack',
        Status:"success",
        Amount:190000,
        TimeStamp:'april 20 -  7:00pm'
    },
    {
        Sn:3,
        Name:'ibrahim',
        Type:'paystack',
        Status:"success",
        Amount:2400000,
        TimeStamp:'april 20 -  7:00pm'
    },
    {
        Sn:4,
        Name:'khadija',
        Type:'paystack',
        Status:"failed",
        Amount:10000,
        TimeStamp:'april 10 -  10:00am'
    },
    {
        Sn:5,
        Name:'fortune',
        Type:'remita',
        Status:"pending",
        Amount:190000,
        TimeStamp:'june 1 -  12:00pm'
    },
    {
        Sn:6,
        Name:'safura',
        Type:'remita',
        Status:"success",
        Amount:190000,
        TimeStamp:'april 20 -  7:00pm'
    },
    {
        Sn:7,
        Name:'salam',
        Type:'paystack',
        Status:"failed",
        Amount:190000,
        TimeStamp:'april 12 -  1:00am'
    },
    {
        Sn:8,
        Name:'nate',
        Type:'paystack',
        Status:"pending",
        Amount:'120000',
        TimeStamp:'april 20 -  7:00pm'
    }]

