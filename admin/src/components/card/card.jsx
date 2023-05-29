import React from 'react'
import Style from './card.module.css'


export const Card = ({ img, text, number, color }) => {

    return (
        <div className={Style.Container}>
            <div className={Style.up}>
                <div>

                    <img src={img} alt="" />
                </div>
                <h3>{text}</h3>
            </div>
            <h1 style={{ color }} >{number}</h1>
        </div>
    )
}
