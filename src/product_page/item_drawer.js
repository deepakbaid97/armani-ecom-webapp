import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  Drawer,
  Toolbar,
  Typography,
  CardContent,
} from "@mui/material";
import axios from "axios";

function Item_drawer(props) {
  const [itemData, setitemData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${props.data.id}`)
      .then((data) => {
        setitemData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [action, setAction] = React.useState("");
  return (
    <Card
      onMouseEnter={() => setAction(`${itemData.title}`)}
      onMouseLeave={() => setAction("")}
      sx={{
        margin: "5px 0",
        width: "200px",
        overflow: "visible",
      }}
    >
      <CardActionArea>
        <CardActions>
          <CardMedia
            component="img"
            height="140"
            width="140"
            image={itemData.image}
            alt="stock image"
          />
        </CardActions>
        <CardContent>
          <Typography variant="p">{action}</Typography>
          <Typography>Units: {props.data.count}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Item_drawer;
