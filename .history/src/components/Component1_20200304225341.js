import React from "react";

const Component1 = () => {
  const textBoxData = "";
  return (
    <div>
      <input
        type="text"
        placeholder="Add new item"
        value={textBoxData}
        onChange={newData => setTextData(newData.target.value)}
      />
    </div>
  );
};
export default Component1;
