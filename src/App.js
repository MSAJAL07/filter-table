import React, { useEffect, useState } from 'react';
import './App.css';
import Filter from "./components/filter";
import Columns from "./data/columns"
import Table from "./components/table"
import data from "./data/tabledata"
import Operator from './util/operators'
function App() {
  const [conditions, setConditions] = useState([]);
  const [tabledata,setTabledata]  = useState(data);

  useEffect(() => {
    //console.log(conditions)
    applyfilter();
  }, [conditions])

  const isvalid = obj => obj.data.id !== null ;
  const check = (obj,oj) => {
    if(oj.data.operator === "CONTAINS"){
      return Operator.contains(obj,oj);
    }else if(oj.data.operator === "GTE"){
      return Operator.gte(obj,oj);
    }if(oj.data.operator === "LTE"){
      return Operator.lte(obj,oj);
    }else if(oj.data.operator === "EQ"){
      return Operator.eq(obj,oj)
    }

  }
 
  const applyfilter = () =>{
    let tmp= [];
    data.forEach((obj,index )=>{
    let f=1;
        conditions.forEach((oj,ind)=>{
          if(isvalid(oj) && !check(obj,oj)) f=0;
        });

      if(f) tmp.push(obj)
    });
    setTabledata(tmp)
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
      <Table column={Columns} data={tabledata} />
      <text style={{ marginBottom: 20, color: "grey", display: "inline" }}>&copy; Sajal Kumar Mishra</text>
      </div>
  );
}

export default App;



