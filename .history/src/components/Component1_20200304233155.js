import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addToList from "./actions/actionTypes.action";

const Component1 = () => {
  const [textBoxData, setTextboxData] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        placeholder="Add new item"
        value={textBoxData}
        onChange={newData => setTextboxData(newData.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addToList(textBoxData));
          setTextboxData("");
        }}
      >
        Add data
      </button>
    </div>
  );
};
export default Component1;
