const addToList = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state,action.payload];

  }
  return state
};

export default addToList
