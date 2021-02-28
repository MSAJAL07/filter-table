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
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Filter conditions = {conditions} setConditions = {setConditions} />
    </div>
  );
}

export default App;



