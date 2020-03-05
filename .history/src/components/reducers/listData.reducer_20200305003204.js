const addToList = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state,action.payload];

  }
};

export default addToList
