export const UserLoggedInReducer = (state, action) => {
  const newState = { ...state };
  let users = null;
  let index = null;
  switch (action.type) {
    case "login":
      return action.payload;

    case "logout":
      return "";

    case "add_address":
      newState.address = [...(newState.address || [])];
      newState.address = [...newState.address, action.payload];
      users = JSON.parse(localStorage.getItem("ecomUsers"));
      index = users.findIndex((d) => d.email === state.email);
      users[index] = newState;
      localStorage.setItem("ecomUsers", JSON.stringify(users));
      //console.log(newState, "new Address");
      return newState;

    case "remove_address":
      users = JSON.parse(localStorage.getItem("ecomUsers"));
      index = users.findIndex((d) => d.email === state.email);
      newState.address.filter((d) => d.key !== action.payload);
      console.log(action.payload, "index");
      users[index] = newState;
      localStorage.setItem("ecomUsers", JSON.stringify(users));
      console.log(newState, "new Address");
      return newState;

    default:
      return state;
  }
};
