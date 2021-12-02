import {
  Button,
  Grid,
  Typography,
  Paper,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { CartItemContext, UserLoggedInContext } from "../app";
import CartItem from "./cartItem";

const individualProduct = (props) => {
  console.log(props, "props id");
  return (
    <Grid item>
      <CartItem id={props} key={props} />
    </Grid>
  );
};

const CartPage = () => {
  const cartItemContext = React.useContext(CartItemContext);
  const userLoggedInContext = React.useContext(UserLoggedInContext);
  const navigate = useNavigate();
  const [cartItem, setCartItem] = React.useState(cartItemContext.cartItemState);
  const [amount, setAmount] = React.useState(0);
  const [selectedAddress, setSelectedAddress] = React.useState("");

  const [isDisabled, setIsDisabled] = React.useState(false);

  console.log(cartItem, "cartItem from cartpage");

  React.useEffect(() => {
    //setCartItem(cartItemContext.cartItemState);
    totalAmount();
    if (cartItem.length === 0 || selectedAddress === "") setIsDisabled(true);
    else setIsDisabled(false);
  }, [selectedAddress, cartItem]);

  const totalAmount = () => {
    let total = 0;
    cartItem.forEach((d) => (total += d.price * d.count));
    setAmount(total);
    console.log(total);
  };

  //checkout section
  const onCheckout = () => {
    let purchased = [];
    if (
      localStorage.getItem(`${userLoggedInContext.state.email} purchase data`)
    ) {
      purchased = JSON.parse(
        localStorage.getItem(`${userLoggedInContext.state.email} purchase data`)
      );
    }

    cartItem.forEach((element) => {
      purchased.push(element);
    });

    localStorage.setItem(
      `${userLoggedInContext.state.email} purchase data`,
      JSON.stringify(purchased)
    );
    cartItemContext.cartItemDispatch("checkout");
  };

  return (
    <div style={{ margin: "100px 20px", width: "100%" }}>
      <CartItemContext.Consumer>
        {(value) => {
          console.log(value, "value");
          setCartItem(value.cartItemState);
        }}
      </CartItemContext.Consumer>
      <Grid container spacing={3} alignItems="center" direction="column">
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Welcome to your cart
          </Typography>
        </Grid>
        {cartItem.length === 0 ? (
          <Typography>
            Add some items into the cart from the Products Page
          </Typography>
        ) : (
          cartItem.map((d) => individualProduct(d.id))
        )}
        <Grid
          container
          item
          direction="row-reverse"
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Button
              disabled={isDisabled}
              variant="contained"
              onClick={() =>
                userLoggedInContext.state ? onCheckout() : navigate("/login")
              }
            >
              Check Out
            </Button>
          </Grid>
          <Grid item>
            <Paper sx={{ width: 200 }}>
              <Typography>Total Amount: $ {amount}</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <InputLabel id="address-label">Select Address</InputLabel>
            <Select
              labelId="address-label"
              id="address"
              d
              label="Select Address"
              value={selectedAddress}
              onChange={(e) => setSelectedAddress(e.target.value)}
            >
              {userLoggedInContext.state
                ? userLoggedInContext.state.address.map((a) => {
                    return (
                      <MenuItem key={a.key} value={a.addressName}>
                        {a.addressName}
                      </MenuItem>
                    );
                  })
                : ""}
            </Select>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartPage;
