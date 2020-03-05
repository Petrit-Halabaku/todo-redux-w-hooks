import React, { useState } from "react";
import

const Component1 = () => {
  const [textBoxData, setTextboxData] = useState("");
  const dispatch=setDidspatch()
  return (
    <div>
      <input
        type="text"
        placeholder="Add new item"
        value={textBoxData}
        onChange={newData => setTextboxData(newData.target.value)}
      />
      <button onClick={() => setTextboxData("")}>Add data</button>
    </div>
  );
};
export default Component1;
