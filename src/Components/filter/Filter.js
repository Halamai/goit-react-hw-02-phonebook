import React from "react";
import s from "./Filter.module.css";

const Filter = (props) => {
  return (
    <label className={s.filterinput}>
      Find contacs by name:
      <input
        type="text"
        name="filter"
        value={props.filter}
        onChange={props.onHandleFilter}
      />
    </label>
  );
};

export default Filter;
