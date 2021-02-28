import React, { useState,useEffect } from "react";
import Dropdown from "./dropdown";
import Columns from "../data/columns"
import Operators     from "../data/operators"
const FilterRow = ({addFilter, deleteFilter}) =>{
    const [column, setColumn] = useState({ value: "Name" , type: "string", key: "name"});
    const [operator, setOperator] = useState({key: "CONTAINS", value : "Contains", type : "string"});
    const [value, setValue] = useState("");
    const [op, setOP] = useState([])
    useEffect(()=>{
        if(column.type){
          setOP(  Operators.filter( e => e.type === column.type))
        }
    },[column])
    useEffect(()=>{
        setOperator(op[0])
    },[op])
    // useEffect(()=>{
    //     setConditions(
    //         {
    //             key : column.key,
    //             operator : operator.key,
    //             value : value
    //         }
    //     )
    // },[value])
    const handleValue = (e) =>    setValue(e.target.value);
    const handleAdd   = (e) => {

    }
    const handleDelete = (e) => {

    }
    
    
    return(
        <div>
            <Dropdown setValue={setColumn} opctions={Columns} />
            <Dropdown setValue={setOperator} opctions={op} />
            <input type = "text" value={value} onChange= {handleValue}/>
            <button type= "button" onClick = {handleAdd}> + </button>
            <button type = "button" onClick ={handleDelete}> Delete</button>
        </div>
    )

}

export default FilterRow