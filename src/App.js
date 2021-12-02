import NavBar from "./components/navbar";
import React from "react";
import { cartItemReducer } from "./reducers/cartItemReducer";
import { ThemeProvider } from "@mui/material/styles";
//import { theme } from "./branding/theme";
import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { UserLoggedInReducer } from "./reducers/UserLoggedInReducer";
import MyRoutes from "./Routes/MyRoutes";
import { BookmarkedItemsReducer } from "./reducers/BookmarkedItemsReducer";

export const CartItemContext = React.createContext();
export const UserLoggedInContext = React.createContext();
export const BookmarkedItemsContext = React.createContext();

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
});

const initialCartItemState = [];
const initialUserLoggedin = "";
const initialBookmarkedItems = [];

const App = () => {
  const [cartItem, dispatch] = React.useReducer(
    cartItemReducer,
    initialCartItemState
  );

  const [userLoggedin, userLoggedinDispatch] = React.useReducer(
    UserLoggedInReducer,
    initialUserLoggedin
  );

  const [BookmarkedItems, BookmarkedItemsDispatch] = React.useReducer(
    BookmarkedItemsReducer,
    initialBookmarkedItems
  );

  return (
    <ThemeProvider theme={theme}>
      <BookmarkedItemsContext.Provider
        value={{ state: BookmarkedItems, dispatch: BookmarkedItemsDispatch }}
      >
        <UserLoggedInContext.Provider
          value={{ state: userLoggedin, dispatch: userLoggedinDispatch }}
        >
          <CartItemContext.Provider
            value={{ cartItemState: cartItem, cartItemDispatch: dispatch }}
          >
            <div style={{ display: "flex" }}>
              <NavBar />
              <MyRoutes />
            </div>
          </CartItemContext.Provider>
        </UserLoggedInContext.Provider>
      </BookmarkedItemsContext.Provider>
    </ThemeProvider>
  );
};

export default App;
