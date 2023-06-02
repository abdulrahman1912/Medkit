import React, { useState } from 'react'
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
export const TableRowWithOptions = ({ Values, Status, }) => {
    const [status, setStatus] = useState(Status)
    
    const color = status === 'pending' ? '#F29D38' : status === 'failed' ? '#EB3223' : '#38FF38'
   const tableData = Values.map((index)=>{
        return <td key={index}>{index}</td>
   })
    return (
        <tr>
            {tableData}
            <td className={Style.parent}>
             
                    <select name="Status" value={status}  onChange={(e)=>{setStatus(e.target.value)}} className={Style.status} style={{ borderColor: color, color: color }}>
                        <option value="pending" style={{  color: color }}>pending</option>
                        <option value="failed" style={{  color: color }}>failed</option>
                        <option value="success" style={{  color: color }}>success</option>
                    </select>
            </td>
        </tr>
    )
}


export const Table = ({ children,th }) => {
    const tableHeads = th.map((head)=>{
       return <th key={head}>{head}</th>
    })
    return (
        <table className={Style.table}>
            <tbody>
            <tr className={Style.head}>
               {tableHeads}
            </tr>
            {children}
            </tbody>
          
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
        Sn:4,
        Name:'ibrahim',
        Type:'paystack',
        Status:"success",
        Amount:2400000,
        TimeStamp:'april 20 -  7:00pm'
    },
    {
        Sn:5,
        Name:'khadija',
        Type:'paystack',
        Status:"failed",
        Amount:10000,
        TimeStamp:'april 10 -  10:00am'
    },
    {
        Sn:6,
        Name:'fortune',
        Type:'remita',
        Status:"pending",
        Amount:190000,
        TimeStamp:'june 1 -  12:00pm'
    },
    {
        Sn:7,
        Name:'safura',
        Type:'remita',
        Status:"success",
        Amount:190000,
        TimeStamp:'april 20 -  7:00pm'
    },
    {
        Sn:8,
        Name:'salam',
        Type:'paystack',
        Status:"failed",
        Amount:190000,
        TimeStamp:'april 12 -  1:00am'
    },
    {
        Sn:9,
        Name:'nate',
        Type:'paystack',
        Status:"pending",
        Amount:'120000',
        TimeStamp:'april 20 -  7:00pm'
    }]

    export const tabledata2 = [
        {
          Values: ['1', 'Raji', "kingraj133@gmail.com", '08118529085', 'Male'],
          Status: 'pending'
        },
        {
          Values: ['2', 'Abdulrahman', "abdul@gmail.com", '08223459567', 'Male'],
          Status: 'failed'
        },
        {
          Values: ['3', 'John', "john@example.com", '1234567890', 'Male'],
          Status: 'pending'
        },
        {
          Values: ['4', 'Jane', "jane@example.com", '9876543210', 'Female'],
          Status: 'failed'
        },
        {
          Values: ['5', 'Alex', "alex@example.com", '5555555555', 'Male'],
          Status: 'success'
        },
        {
          Values: ['6', 'Sarah', "sarah@example.com", '1111111111', 'Female'],
          Status: 'pending'
        },
        {
          Values: ['7', 'Jane', "jane@example.com", '9876543210', 'Female'],
          Status: 'failed'
        },
        {
          Values: ['8', 'Alex', "alex@example.com", '5555555555', 'Female'],
          Status: 'success'
        },
        // Dummy data entries
        {
          Values: ['9', 'John', 'john.doe@example.com', '1234567890', 'Male'],
          Status: 'pending'
        },
        {
          Values: ['10', 'Jane', 'jane.smith@example.com', '9876543210', 'Female'],
          Status: 'failed'
        },
        {
          Values: ['11', 'Michael', 'michael.johnson@example.com', '5555555555', 'Male'],
          Status: 'success'
        },
        // Additional 10 dummy data entries
        {
          Values: ['12', 'Emma', 'emma.wilson@example.com', '5555555555', 'Female'],
          Status: 'pending'
        },
        {
          Values: ['13', 'William', 'william.brown@example.com', '1234567890', 'Male'],
          Status: 'failed'
        },
        {
          Values: ['14', 'Olivia', 'olivia.jones@example.com', '9876543210', 'Female'],
          Status: 'success'
        },
        {
          Values: ['15', 'James', 'james.davis@example.com', '5555555555', 'Male'],
          Status: 'pending'
        },
        {
          Values: ['16', 'Ava', 'ava.miller@example.com', '1234567890', 'Female'],
          Status: 'failed'
        },
        {
          Values: ['17', 'Liam', 'liam.jackson@example.com', '9876543210', 'Male'],
          Status: 'success'
        },
        {
          Values: ['18', 'Sophia', 'sophia.thompson@example.com', '5555555555', 'Female'],
          Status: 'pending'
        },
        {
          Values: ['19', 'Noah', 'noah.white@example.com', '1234567890', 'Male'],
          Status: 'failed'
        },
        {
          Values: ['20', 'Isabella', 'isabella.clark@example.com', '9876543210', 'Female'],
          Status: 'success'
        },
        {
          Values: ['21', 'Benjamin', 'benjamin.green@example.com', '5555555555', 'Male'],
          Status: 'pending'
        },
    ]



