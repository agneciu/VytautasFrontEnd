import "./Button.css"



const Button = (props) => {
    
   return <button className="btn" onClick={props.onClick}> {props.label} </button>
};

export default Button;