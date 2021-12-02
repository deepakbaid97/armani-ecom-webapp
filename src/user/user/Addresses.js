import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { UserLoggedInContext } from "../../app";
import CreateAddress from "./CreateAddress";

function Addresses() {
  const userLoggedInContext = React.useContext(UserLoggedInContext);
  const [addresses, setAddresses] = useState([]);
  const [showAddressForm, setShowAddressForm] = useState(false);

  useEffect(() => {
    if (userLoggedInContext.state.address)
      setAddresses(userLoggedInContext.state.address);
  }, []);

  return (
    <>
      <UserLoggedInContext.Consumer>
        {(value) =>
          value.state.address ? setAddresses(value.state.address) : ""
        }
      </UserLoggedInContext.Consumer>
      <Grid container direction="column" spacing={2}>
        <Grid item container direction="column" spacing={1}>
          {addresses.map((address) => {
            return (
              <Grid item key={address.key}>
                <Paper elevation={2} sx={{ width: "100vh" }}>
                  <Box sx={{ padding: "10px" }}>
                    <Typography variant="h5">{address.addressName}</Typography>
                    <Typography>{address.addressLineOne}</Typography>
                    <Typography>{address.addressLineTwo}</Typography>
                    <Typography>Pin code: {address.pincode}</Typography>
                    <Typography>City: {address.city}</Typography>
                    <Button
                      variant="contained"
                      onClick={() =>
                        userLoggedInContext.dispatch({
                          type: "remove_address",
                          payload: address.key,
                        })
                      }
                    >
                      Remove
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <Grid item>{showAddressForm ? <CreateAddress /> : ""}</Grid>
        <Grid item>
          <Button variant="outlined" onClick={() => setShowAddressForm(true)}>
            Create New Address
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Addresses;
