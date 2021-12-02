import { Button, Grid, Paper, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router";
import { UserLoggedInContext } from "../../app";
import Addresses from "./Addresses";
import Purchases from "./Purchases";
import UserDetails from "./userDetails";

function User() {
  const userLoggedinContext = React.useContext(UserLoggedInContext);
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = React.useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const logout = () => {
    localStorage.removeItem("userLoggedIn");
    userLoggedinContext.dispatch({ type: "logout" });
    navigate("/");
  };
  return (
    <Grid
      container
      sx={{ marginTop: "80px" }}
      alignItems="center"
      direction="column"
      spacing={2}
    >
      <Grid item container direction="row" justifyContent="center">
        <Paper
          sx={{ width: "100vh", height: 200, padding: "10px" }}
          elevation={8}
        >
          <Grid container spacing={3} justifyContent="space-around">
            <Grid item>
              <UserDetails />
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={() => logout()}>
                Logout
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item>
        <Box sx={{ border: 1, borderColor: "divider", width: "100vh" }}>
          <Tabs centered value={selectedTab} onChange={handleChange}>
            <Tab label="Purchases" />
            <Tab label="Manage Addresses" />
          </Tabs>
        </Box>
        {selectedTab === 0 && <Purchases />}
        {selectedTab === 1 && <Addresses />}
      </Grid>
    </Grid>
  );
}

export default User;
