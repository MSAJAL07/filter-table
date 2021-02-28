import Reeact ,{useEffect, useState} from 'react';
import './App.css';
import Filter from "./components/filter";

function App() {
  const [conditions, setConditions] = useState([]);
  useEffect(()=>{
    console.log(conditions)
  }, [conditions])

  return (
    <div className="App">
      <h1>Filter-Table</h1>
      <Filter conditions = {conditions} setConditions = {setConditions} />
    </div>
  );
}

export default App;



