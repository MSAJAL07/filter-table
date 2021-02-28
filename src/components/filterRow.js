import React, { useState, useEffect } from "react";
import Dropdown from "./dropdown";
import Columns from "../data/columns"
import { Operators, Cond } from "../data/operators"
const FilterRow = ({ data, addFilter, deleteFilter }) => {
    const [column, setColumn] = useState({});
    const [operator, setOperator] = useState({});
    const [value, setValue] = useState();
    const [op, setOP] = useState([])
    const [cond, setCond] = useState();
    const [isDisable, setIsDisable] = useState(false);
    useEffect(() => {
        if (column.type) {
            setOP(Operators.filter(e => e.type === column.type))
        }
    }, [column])
    const handleValue = (e) => setValue(e.target.value);
    const handleAdd = (e) => {
        if (cond && column && operator && value) {
            let obj = {
                id: data.id,
                data: {
                    id: column.key,
                    operator: operator.key,
                    value: value
                },
                cond: cond.key
            }
            setIsDisable(true)
            addFilter(obj)
        } else {
            alert("invalid filter")
        }

    }
    const handleDelete = (e) => {
        deleteFilter({ id: data.id })
    }


    return (
        <div style={{
            display: 'flex',
            justifyContent: "space-around",
            flexWrap: "wrap"
        }} id={data.id}>
            <Dropdown setValue={setCond} opctions={Cond} />
            <Dropdown setValue={setColumn} opctions={Columns} />
            <Dropdown setValue={setOperator} opctions={op} />
            <input style={{ width: 100, margin: 20 }} placeholder="value" type="text" value={value} onChange={handleValue} />
            <button style={{ width: 100, margin: 20 }} disabled={isDisable} type="button" onClick={handleAdd}> Add </button>
            <button style={{ width: 100, margin: 20 }} type="button" onClick={handleDelete}> Delete</button>
        </div>
    )

}

export default FilterRow