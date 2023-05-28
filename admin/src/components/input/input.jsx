import React from "react";
import Style from "./input.module.css";

export const FormGroup = ({ label, type, onChange, style,placeholder ,name}) => {
    return (
        <div className={Style.FormGroup}>
            <label
                htmlFor={name}
            >
                {label}
            </label>
            <input
                type={type}
                name={name}
                onChange={onChange}
                className={Style.input}
                placeholder={placeholder}
                style={style}
            />
        </div>
    )
}