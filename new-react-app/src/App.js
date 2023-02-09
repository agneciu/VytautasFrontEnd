import Input from './components/Input/Input'
import SearchHistory from './components/SearchHistory/SearchHistory';
import './App.css';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState();

  const handleChange = (value) => {
    setValue(value);
  }
  return (
    <div>
         <Input label="Search" onChange={handleChange} />  
         <p>{value}</p> 
         
    </div>
  );
  };

  


export default App;
