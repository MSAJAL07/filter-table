import React, { useEffect, useState } from 'react';
import './App.css';
import Filter from "./components/filter";
import Columns from "./data/columns"
import Table from "./components/table"
import data from "./data/tabledata"
function App() {
  const [conditions, setConditions] = useState([]);
  const [tabledata,setTabledata]  = useState(data);

  useEffect(() => {
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
    <div style={{
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: '100%',
      flexDirection: "column",
      minHeight: "100vh"
    }}>
      <h1>Filter Table</h1>
      <Filter conditions={conditions} setConditions={setConditions} />
      <Table column={Columns} data={data} />
      <text style={{ marginBottom: 20, color: "grey", display: "inline" }}>&copy; Sajal Kumar Mishra</text>
      </div>
  );
}

export default App;



