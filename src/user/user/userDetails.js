import React from "react";
import { Grid, Typography } from "@mui/material";
import { UserLoggedInContext } from "../../app";

function UserDetails() {
  const userLoggedinContext = React.useContext(UserLoggedInContext);
  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="body1">Name:</Typography>
          <Typography variant="h5">
            {`${userLoggedinContext.state.firstName} ${userLoggedinContext.state.lastName}`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">Email:</Typography>
          <Typography variant="h6">{`${userLoggedinContext.state.email}`}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">Phone No:</Typography>
          <Typography variant="h6" color="text.secondary">
            {`${userLoggedinContext.state.phoneNo}`}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default UserDetails;
