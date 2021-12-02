export const cartItemReducer = (state, action) => {
  let new_state = JSON.parse(JSON.stringify(state));
  let index = -1;

  switch (action.type) {
    case "add_item":
      if (state.findIndex((d) => d.id === action.payload) === -1)
        new_state.push({
          id: action.payload.id,
          count: 1,
          price: action.payload.price,
        });
      //console.log(new_state);
      return new_state;

    case "delete_item":
      new_state = state.filter((d) => d.id !== action.payload);
      return new_state;

    case "increment_item":
      index = new_state.findIndex((d) => d.id === action.payload);
      if (state[index].count < 5) new_state[index].count++;
      //console.log(new_state[index].count);
      return new_state;

    case "decrement_item":
      index = new_state.findIndex((d) => d.id === action.payload);
      if (state[index].count > 0) new_state[index].count--;
      return new_state;

    case "checkout":
      return [];

    default:
      return state;
  }
};
