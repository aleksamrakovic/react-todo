import React, { useState } from "react";

const TodoSearch = ({ searchTodo, setShowDone }) => {
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState(false);

  const onInputChange = (term) => {
    setValue(term);
    searchTodo(term);
  };

  const onCheckboxChange = (selected) => {
    setSelected(selected);
    setShowDone(selected);
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <div className="form-check w-25">
          <input
            onChange={() => onCheckboxChange(!selected)}
            className="form-check-input"
            type="checkbox"
            value={selected}
            id="check"
            checked={selected}
          />
          <label className="form-check-label" htmlFor="check">
            Show done
          </label>
        </div>
        <input
          value={value}
          onChange={(e) => onInputChange(e.target.value)}
          type="text"
          className="form-control w-75"
          placeholder="Search"
        />
      </div>
    </>
  );
};

export default TodoSearch;
