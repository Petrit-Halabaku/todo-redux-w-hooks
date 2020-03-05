import React from "react";
import { useSelector } from "react-redux";

const listItemData = useSelector(state => state.listItems);
const Component2 = () => {
  return (
    <div>
      <h3>List Item</h3>
      {listItemData.map((item, index) => {
        return <div key={`eachkey${index}`}>{item}</div>;
      })}
    </div>
  );
};

export default Component2;
