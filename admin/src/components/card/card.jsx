import React from 'react'
import Style from './card.module.css'


export const Card = ({ img, text, number, color ,focus,imgSize,fontSize}) => {

    return (
        <div className={Style.Container}>
            <div className={Style.up}>
                {focus?  
                <img src={img} alt="" style={{width:imgSize}} />:
                <div className={Style.img}>

                    <img src={img} alt="" />
                </div> }
                <div className={Style.text}>

                <h3 style={{fontSize}}>{text}</h3>
                </div>
            </div>
            <h1 style={{ color }} >{number}</h1>
        </div>
    )
}
