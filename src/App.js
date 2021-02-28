import React, { useEffect, useState } from 'react';
import './App.css';
import Filter from "./components/filter";
import Columns from "./data/columns"
import Table from "./components/table"
import data from "./data/tabledata"
function App() {
  const [conditions, setConditions] = useState([]);
  useEffect(() => {
    console.log(conditions)
  }, [conditions])

  return (
    <div style={{
      display: "flex",
      flex: 1,
      backgroundColor: "pink",
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



