import React, { useEffect } from "react";

  const Dropdown = ({setValue, opctions }) => {
  const onChange = (e) =>  {
    setValue(opctions.filter(ev => ev.key === e.target.value)[0]);
  }
  return (
    <select onChange={onChange}>
      {opctions.map((data) => {
         // console.log(data)
        return (
          <option id={data.key} value= {data.key}>
            {data.value}
          </option>
        );
      })}
    </select>
  );
};
export default Dropdown;