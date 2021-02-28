import Reeact ,{useEffect, useState} from 'react';
import './App.css';
import Filter from "./components/filter";
import Columns from "./data/columns"
import Table from "./components/table"
import data from "./data/tabledata"
function App() {
  const [conditions, setConditions] = useState([]);
  const [tabledata,setTabledata]  = useState(data);

  useEffect(()=>{
    console.log(conditions)
  }, [conditions])
  const isvalid = obj => obj.id && obj.data.id && obj.data.operator && obj.data.value && obj.cond ;
  
const applyfilter = () =>{
  conditions.forEach((index, obj)=>{
    if(isvalid(obj)){
      Table.forEach((ind,oj)=>{

      })

    }
  })
}
  return (
    <div className="App">
      <h1>Filter-Table</h1>
      <Filter conditions = {conditions} setConditions = {setConditions} />
      <Table column = {Columns} data = {tabledata}/>
    </div>
  );
}

export default App;



