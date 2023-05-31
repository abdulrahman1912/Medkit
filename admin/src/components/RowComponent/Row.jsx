import React from 'react'
import Style from './Row.module.css'


export const Row = ({img,text,onClick,style,focus}) => {
  
  return (
    <div className={focus?Style.Cotainer1:Style.Cotainer} style={style} onClick={onClick}>
    <img src={img} alt="" />
    <div className={Style.Text}>{text}</div>
    </div>
  )
}

export const SpaceBetween= ({text1,text2,style})=>{
  return(
    <div className={Style.head}>
    <h3 style={style}>{text1}</h3>
    {text2}
  </div>
  )
}
