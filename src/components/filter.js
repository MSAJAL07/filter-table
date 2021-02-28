import React, { useState } from "react";
import FilterRow from "./filterRow"
const Filter = ({ conditions, setConditions }) => {

  const addFilter = (e) => {
    let tmp = [];
    for (let i = 0; i < conditions.length; ++i) {
      if (e.id === conditions[i].id) {
        tmp.push(e);
      } else {
        tmp.push(conditions[i])
      }
    }
    setConditions(tmp);
  }
  const deleteFilter = e => {
    let tmp = [];
    for (let i = 0; i < conditions.length; ++i) {
      if (e.id !== conditions[i].id) {
        tmp.push(conditions[i]);
      }
    }
    setConditions(tmp);
  }
  const add = () => {
    let count = conditions[conditions.length - 1]?.id;
    if (!count) count = 0;
    count++;
    let obj = {
      id: count,
      data: {
        id: null,
        operator: null,
        value: null
      },
      cond: null
    }
    let tmp = [...conditions]
    tmp.push(obj);
    setConditions(tmp)
  }

  return (
    <div>
      {
        conditions.map((e) => {
          return (
            <FilterRow data={e} addFilter={addFilter} deleteFilter={deleteFilter} />
          )
        })

      }
      <button type="button" onClick={add} style={{
        fontWeight: "bold",
        minWidth: 60,
        fontSize: 30
      }}>+</button>
    </div>

  )
};
export default Filter;
