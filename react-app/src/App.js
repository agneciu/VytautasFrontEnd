import {useState} from "react";
import Button from './components/Button/Button';
import './App.css';
import ClickedMeTimes from './components/ClickedMeTimes/ClickedMeTimes';

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    // const newState = counter + 1;
    // setCounter(newState)
    setCounter((prevState) => prevState +1)
  }  


  return (
    
    <div className="App">
     <Button label="Press Me" onClick={onClick}/>
     <ClickedMeTimes counter={counter} />
    </div>
  );
}

export default App;
