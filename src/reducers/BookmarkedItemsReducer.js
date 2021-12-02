export const BookmarkedItemsReducer = (state, action) => {
  const newState = [...state];
  switch (action.type) {
    case "add":
      const index = newState.findIndex((d) => d === action.id);
      if (index === -1) newState.push(action.id);
      console.log(newState);
      return newState;

    default:
      return state;
  }
};
