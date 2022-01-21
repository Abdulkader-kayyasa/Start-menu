import { useState } from 'react' ;
import './App.css';
import Dropdown from './Dropdown';
function App() {
  const [selected, setSelected] = useState("Choose One");
  return (
    <div className="App">

      <Dropdown selected={selected} setSelected={setSelected}/>
      <h1 className='text'>{selected}</h1>
    </div>
  );
}

export default App;
