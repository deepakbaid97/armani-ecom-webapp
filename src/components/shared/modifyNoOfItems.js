import { IconButton, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { CartItemContext } from "../../app";

function ModifyNoOfItems(props) {
  const id = props.id;
  const cartItemContext = React.useContext(CartItemContext);
  const index = cartItemContext.cartItemState.findIndex((d) => d.id === id);
  console.log(index, "index form modify");
  if (index === -1) return <></>;

  const itemCount = cartItemContext.cartItemState[index].count;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IconButton
        aria-label="reduce item"
        onClick={() => {
          cartItemContext.cartItemDispatch({
            type: "decrement_item",
            payload: id,
          });
        }}
      >
        <RemoveIcon />
      </IconButton>

      <CartItemContext.Consumer>
        {(value) => {
          //console.log(value, "value");
          return <Typography> {value.cartItemState[index].count}</Typography>;
        }}
      </CartItemContext.Consumer>

      <IconButton
        aria-label="add item"
        onClick={() => {
          cartItemContext.cartItemDispatch({
            type: "increment_item",
            payload: id,
          });
        }}
      >
        <AddIcon />{" "}
      </IconButton>
    </div>
  );
}

export default React.memo(ModifyNoOfItems);
