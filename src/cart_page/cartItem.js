import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { CartItemContext } from "../app";
import { Button } from "@mui/material";
import ModifyNoOfItems from "../components/shared/modifyNoOfItems";

function CartItem(props) {
  const cartItemContext = useContext(CartItemContext);
  //const index = cartItemContext.cartItemState.findIndex(d => d === props.id);

  const [itemData, setitemData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${props.id}`)
      .then((data) => {
        setitemData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);
  return (
    <div>
      <Card
        sx={{
          display: "flex",
          width: "100vh",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {itemData.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Price: $ {itemData.price}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <ModifyNoOfItems id={props.id} key={props.id} />
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={() => {
                cartItemContext.cartItemDispatch({
                  type: "delete_item",
                  payload: props.id,
                });
              }}
            >
              Remove Item
            </Button>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151, height: 200 }}
          image={itemData.image}
          alt="Live from space album cover"
        />
      </Card>
    </div>
  );
}

export default CartItem;
