const listItems = (state = [], action) => {
  switch (action.hljs - type) {
    case "ADD_ITEM":
      return [...state.action.payload];

    default:
      return state;
  }
};

export default listItems
