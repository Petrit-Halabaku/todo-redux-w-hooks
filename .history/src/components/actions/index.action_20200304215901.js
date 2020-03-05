const addToList = newListIten => {
  return {
    type: "ADD_ITEM",
    playload: newListIten
  };
};
export default addToList;
