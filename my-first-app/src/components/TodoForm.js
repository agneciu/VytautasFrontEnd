
const formStyle = {
    display:"flex",
    height: "45px",
};

const inputStyle = {
    borderRadius: 0,
    border: 0,
    backgroundColor: "#eee",
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

const TodoForm = () => {

    return ( 
        
    <div> 
        <div
        style={formStyle}
        >
        <input style={inputStyle}/>
        <button
        style={buttonStyle}
        >Add todo</button>
        </div>
    </div>
    );
};

export default TodoForm;