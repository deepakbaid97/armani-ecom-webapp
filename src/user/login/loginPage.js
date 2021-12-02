import {
  Grid,
  TextField,
  Typography,
  Item,
  Button,
  Card,
  CardMedia,
} from "@mui/material";
import React from "react";
import LoginForm from "./loginForm";

function LoginPage() {
  return (
    <Grid container>
      <Grid item xs={0} sm={6}>
        <Card>
          <CardMedia
            component="img"
            height="660"
            image="https://static.highsnobiety.com/thumbor/_iO4xbi7GvcoLU6cz7LgWbteg3k=/1600x2129/static.highsnobiety.com/wp-content/uploads/2021/08/10165739/armani-exchange-new-collection-06.jpg"
          />
        </Card>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        spacing={10}
        xs={0}
        sm={6}
      >
        <Grid item>
          <Typography align="center" variant="h3" sx={{ marginTop: "100px" }}>
            Login Page
          </Typography>
        </Grid>
        <Grid item>
          <LoginForm />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
