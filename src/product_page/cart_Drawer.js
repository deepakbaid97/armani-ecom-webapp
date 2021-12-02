import React from "react";
import { Drawer, Toolbar, Typography, Paper } from "@mui/material";
import { CartItemContext } from "../app";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Item_drawer from "./item_drawer";

function Cart_Drawer() {
  //const [isOpen, setIsOpen] = React.useState(false);
  const cartItemContext = React.useContext(CartItemContext);

  return (
    <div>
      <Drawer
        variant="persistent"
        open={cartItemContext.cartItemState.length ? true : false}
        sx={{ width: "250px", overflow: "scroll" }}
        anchor="right"
      >
        <Toolbar />
        <Paper elevation={3} sx={{ marginBottom: "10px" }}>
          <Typography align="center" variant="h4">
            {" "}
            <ShoppingCartIcon />
            Cart
          </Typography>
        </Paper>
        {cartItemContext.cartItemState.map((data) => (
          <Item_drawer data={data} key={data.id} />
        ))}
      </Drawer>
    </div>
  );
}

export default Cart_Drawer;
