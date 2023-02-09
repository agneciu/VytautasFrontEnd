import Input from './Input';
import { useState } from 'react';


const formStyle = {
    display:"flex",
    height: "45px",
};

const buttonStyle = {
    borderRadius: 0,
    border: 0,
    backgroundColor: "#ccc",
    padding: "0.5rem",
    // fontWeight: "bold",
};



const mergedStyles ={
    ...formStyle,
    ...buttonStyle,
};




const TodoForm = (props) => {
const [inputValue, setInputValue] = useState();

const handleChange = (myValue) => setInputValue(myValue);
const handleClick = () => {props.onSubmit(inputValue);}

    return ( 
    <div> 
        <div
        style={formStyle}>
        <Input value={inputValue} onChange={handleChange}/>
        <button style={buttonStyle} 
        onClick={handleClick}>Add todo</button>
        </div>
    </div>
    );
};

export default TodoForm;