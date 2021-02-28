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
    <div style={{
      minWidth: '60%',
      border: 10,
      borderWidth: 0.25,
      borderRadius: 5,
      borderStyle: "groove",
      padding: 30
    }} >
    <div style={{
      minWidth: '60%',
    }} >
      {
        conditions.map((e) => {
          return (
            <FilterRow data={e} addFilter={addFilter} deleteFilter={deleteFilter} />
          )
        })

      }
      <div style={{
        marginTop: 30,
        bottom: 10,
        left: 30,
      }}>
      <button type="button" onClick={add} style={{
        minWidth: 60,
        fontSize: 18,
        borderStyle: "hidden",
        backgroundColor: "white",
        padding: 5
      }}>+ Add Filter</button>
    </div>
    </div>
    </div>

  )
};
export default Filter;
