import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { BookmarkedItemsContext, CartItemContext } from "../app";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import ModifyNoOfItems from "../components/shared/modifyNoOfItems";

const ProductCard = (props) => {
  const cartItemContext = React.useContext(CartItemContext);
  const bookmarkedItemsContext = React.useContext(BookmarkedItemsContext);
  const [isAdded, setIsAdded] = React.useState(false);
  console.log(props);
  useEffect(() => {
    const index = bookmarkedItemsContext.state.findIndex(
      (d) => d === props.product.id
    );
    if (index !== -1) {
      setBookmarkStyle({
        variant: "outlined",
        text: "Bookmarked",
        icon: <BookmarkAddedIcon />,
      });
    }

    const cartItemIndex = cartItemContext.cartItemState.findIndex(
      (s) => s.id === props.product.id
    );
    if (cartItemIndex !== -1) setIsAdded(true);
  }, []);

  //Button Style
  const initialButtonStyle = {
    text: "Add to cart",
    buttonVariant: "contained",
    modifyFunction: "",
  };

  const initialBookmarkStyle = {
    text: "Bookmark Item",
    variant: "outlined",
    icon: <BookmarkBorderIcon />,
  };
  const [buttonStyle, setButtonStyle] = React.useState(initialButtonStyle);
  const [bookmarkStyle, setBookmarkStyle] =
    React.useState(initialBookmarkStyle);

  //Adding or deleting number of items

  return (
    <Card
      sx={{
        maxWidth: 400,
        height: "100%",
        display: "flex",
        flexFlow: "column wrap",
      }}
    >
      <CardMedia
        component="img"
        height="300"
        width="300"
        image={props.product.image}
        alt="green iguana"
      />
      <CardContent sx={{ flex: 1, minHeight: "100px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {props.product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant={buttonStyle.buttonVariant}
          onClick={() => {
            setButtonStyle({
              text: "Added",
              buttonVariant: "outlined",
              modifyFunction: "",
            });

            if (isAdded === false) {
              cartItemContext.cartItemDispatch({
                type: "add_item",
                payload: { id: props.product.id, price: props.product.price },
              });
            }
            setIsAdded(true);
          }}
        >
          {buttonStyle.text}
        </Button>
        <Button
          variant={bookmarkStyle.variant}
          endIcon={bookmarkStyle.icon}
          onClick={() => {
            bookmarkedItemsContext.dispatch({
              type: "add",
              id: props.product.id,
            });
            setBookmarkStyle({
              variant: "outlined",
              text: "Bookmarked",
              icon: <BookmarkAddedIcon />,
            });
          }}
        >
          {bookmarkStyle.text}
        </Button>
        <Box sx={{ width: 10 }} />
        {isAdded ? (
          <ModifyNoOfItems id={props.product.id} key={props.product.id} />
        ) : (
          <></>
        )}
      </CardActions>
    </Card>
  );
};

export default React.memo(ProductCard);
