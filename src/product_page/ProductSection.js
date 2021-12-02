import React from "react";
import ProductCard from "../product_page/productCard";
import axios from "axios";
import { Grid } from "@mui/material";

const individualProduct = (props) => {
  //console.log(props.id);
  return (
    <Grid item>
      <ProductCard product={props} key={props.id} />
    </Grid>
  );
};

const ProductSection = (props) => {
  console.log(props, "props");
  const [product, setproduct] = React.useState([]);

  const getProduct = (category) => {};

  React.useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${props.category}`)
      .then((data) => {
        const products = data.data;
        //console.log(products, "products");
        setproduct(products);
        //console.log(product, "from product state");
      })
      .catch((err) =>
        console.log(
          err,
          "could not fetch product from the category",
          props.category
        )
      );
  }, [props.category]);

  return (
    <Grid
      container
      spacing={2}
      sx={{ marginTop: 10 }}
      justifyContent="space-evenly"
    >
      {product.map((data) => individualProduct(data))}
    </Grid>
  );
};

export default ProductSection;
