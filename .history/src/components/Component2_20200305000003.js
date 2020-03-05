import React from "react";
import { useSelector } from "react-redux";

const Component2 = () => {
   const listItemData = useSelector(state => state.listItems);
  return (
    <div>
      <h3>List Item</h3>
      {listItemData.map((item, index) => {
        return <div key={`eachItem${index}`}>{item}</div>;
      })}
    </div>
  );
};

export default Component2;
