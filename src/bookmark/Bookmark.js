import { Button, Grid, Tooltip, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import { BookmarkedItemsContext, UserLoggedInContext } from "../app";
import ProductCard from "../product_page/productCard";

function Bookmark() {
  const bookmarkedItemsContext = React.useContext(BookmarkedItemsContext);
  const userLoggedInContext = React.useContext(UserLoggedInContext);
  const [itemData, setItemData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [tooltipText, setTooltipText] = React.useState("click to copy");
  const { name, id } = useParams();

  const handleOpen = () => {
    console.log("open");
    setOpen(true);
    setTooltipText("click to copy");
  };

  const handleClose = () => {
    console.log("close");
    setOpen(false);
  };

  React.useEffect(async () => {
    let ids = bookmarkedItemsContext.state;
    if (id) {
      ids = JSON.parse(id);
      setIsEnabled(true);
    }
    console.log(ids, "ids");
    const data = [];
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      await axios.get(`https://fakestoreapi.com/products/${id}`).then((d) => {
        data.push(d.data);
      });
    }
    console.log(data, "data from line 19");
    setItemData(data);
  }, []);

  const shareBookmark = () => {
    let linkdata = "";
    // const len = bookmarkedItemsContext.state.length;
    // for (let i = 0; i < len; i++) {
    //   linkdata += `${bookmarkedItemsContext.state[i]}+`;
    // }
    linkdata = JSON.stringify(bookmarkedItemsContext.state);
    navigator.clipboard.writeText(
      `http://localhost:3000/bookmark/${userLoggedInContext.state.firstName}/${linkdata}`
    );
    setTooltipText("link copied");
  };

  return (
    <Grid container direction="column" sx={{ marginTop: 10 }} spacing={2}>
      <BookmarkedItemsContext.Consumer>
        {(value) => {
          console.log(value);
        }}
      </BookmarkedItemsContext.Consumer>
      <Grid
        container
        item
        alignItems="center"
        justifyContent="space-around"
        spacing={3}
      >
        <Grid item>
          <Typography variant="h2">
            {name ? `${name}'s` : ""} Bookmark Page
          </Typography>
        </Grid>
        <Grid item>
          <Tooltip
            title={tooltipText}
            placement="top"
            arrow
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
          >
            <Button
              disabled={isEnabled}
              variant="contained"
              onClick={() => shareBookmark()}
            >
              Share bookmark
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid
        item
        container
        spacing={2}
        justifyContent="space-evenly"
        direction="row"
      >
        {itemData.map((data) => {
          console.log(data, "Data");
          return (
            <Grid item>
              <ProductCard key={data.id} product={data} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default Bookmark;
