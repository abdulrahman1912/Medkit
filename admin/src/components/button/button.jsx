import React from "react";
import Style from './button.module.css'
export const Button = ({ text, onClick,style }) => {
    return (

        <button
            className={Style.button}
            onClick={onClick}
            style={style}
        >
            {text}
        </button>

    )
}