const addToList = newListItem => {
  return {
    type: "ADD_ITEM",
    playload: newListItem
  };
};
export default addToList;
