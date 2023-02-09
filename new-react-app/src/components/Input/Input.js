import './Input.css'
import { useState } from "react"

const Input = (props) => {
    const onChange = (event) => {
        props.onChange(event.target.value);
    }
   return (
   <div>
    <label htmlFor="search" id="search-label"> {props.label} </label>
   <input onChange={onChange}></input>
   </div>
   );
};

export default Input