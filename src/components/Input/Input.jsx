import React from 'react'

const Input = ({type, change, name, classStyle, placeholder, onChange, content, id}) => {
    return (
        <input type={type} onClick={change} name={name} className={classStyle} placeholder={placeholder} onChange={onChange} value={content} id={id}/>
    )
}

export default Input
