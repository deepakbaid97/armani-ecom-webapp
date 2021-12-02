import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { UserLoggedInContext } from "../app";

const loginpage = () => {
  return (
    <Link to="/login">
      <Button variant="contained" disableElevation>
        Singup/Login
      </Button>
    </Link>
  );
};

const userPage = (user) => {
  return (
    <Link to="/user">
      <Button variant="contained" disableElevation>
        {user}
      </Button>
    </Link>
  );
};

const NavBar = () => {
  const userLoggedinContext = React.useContext(UserLoggedInContext);
  const [userState, setUserState] = React.useState("");

  React.useEffect(() => {
    let user = [];
    if (localStorage.getItem("userLoggedIn")) {
      user = JSON.parse(localStorage.getItem("userLoggedIn"));
      userLoggedinContext.dispatch({ type: "login", payload: user[0] });
      console.log(user, "user");
    }
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h4" sx={{ flex: 1 }}>
            Armani Exchange
          </Typography>
          <Link to="/">
            <Button variant="contained" disableElevation>
              Home
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="contained" disableElevation>
              Product
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="contained" disableElevation>
              Cart
            </Button>
          </Link>
          <Link to="/bookmark">
            <Button variant="contained" disableElevation>
              Bookmarks
            </Button>
          </Link>
          <UserLoggedInContext.Consumer>
            {(value) => {
              setUserState(userLoggedinContext.state.firstName);
              console.log(value.state, "value state");
              return value.state ? userPage(userState) : loginpage();
            }}
          </UserLoggedInContext.Consumer>
        </Toolbar>
      </AppBar>
      {}
    </div>
  );
};

export default React.memo(NavBar);
