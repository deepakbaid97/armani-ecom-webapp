import { Grid, Typography } from "@mui/material";
import React from "react";
import SignupForm from "./SignupForm";

function SignupPage() {
  return (
    <Grid
      container
      sx={{ marginTop: "100px" }}
      spacing={2}
      alignItems="center"
      direction="column"
    >
      <Grid item>
        <Typography variant="h3">Signup Page</Typography>
      </Grid>
      <Grid item>
        <SignupForm />
      </Grid>
    </Grid>
  );
}

export default SignupPage;
