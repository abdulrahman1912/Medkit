import React from 'react'
import Style from './Row.module.css'


export const Row = ({img,text,onClick,style}) => {
  return (
    <div className={Style.Cotainer} style={style} onClick={onClick}>
    <img src={img} alt="" />
    <div className={Style.Text}>{text}</div>
    </div>
  )
}
