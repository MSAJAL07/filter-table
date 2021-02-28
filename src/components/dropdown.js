import React, { useEffect } from "react";
const Dropdown = ({ setValue, opctions }) => {
  const onChange = (e) => {
    setValue(opctions.filter(ev => ev.key === e.target.value)[0]);
  }
  return (
    <select
      style={{ width: 100, margin: 20 }}
      onChange={onChange} >
      <option value="none" selected disabled hidden />
      {opctions.map((data) => {
        // console.log(data)
        return (
          <option id={data.key} value={data.key}>
            {data.value}
          </option>
        );
      })}
    </select>
  );
};
export default Dropdown;
