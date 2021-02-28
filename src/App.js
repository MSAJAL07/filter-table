import Reeact ,{useEffect, useState} from 'react';
import './App.css';
import Filter from "./components/filter";
import Columns from "./data/columns"
import Table from "./components/table"
import data from "./data/tabledata"
function App() {
  const [conditions, setConditions] = useState([]);
  useEffect(()=>{
    console.log(conditions)
  }, [conditions])

  return (
    <div className="App">
      <h1>Filter-Table</h1>
      <Filter conditions = {conditions} setConditions = {setConditions} />
      <Table column = {Columns} data = {data}/>
    </div>
  );
}

export default App;



