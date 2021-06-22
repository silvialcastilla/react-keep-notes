import React from 'react'

const Button = ({btnClass, title, type, onClick}) => {
    return (
        <button className={btnClass} type={type !== "" ? (<></>) : (type)} onClick={onClick}>{title}</button>
    )
}

export default Button