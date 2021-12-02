import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { UserLoggedInContext } from "../../app";

function Purchases() {
  const userLoggedInContext = React.useContext(UserLoggedInContext);
  const [itemPurchased, setItemPurchased] = React.useState([]);
  React.useEffect(async () => {
    if (
      localStorage.getItem(`${userLoggedInContext.state.email} purchase data`)
    ) {
      const purched = JSON.parse(
        localStorage.getItem(`${userLoggedInContext.state.email} purchase data`)
      );
      console.log(purched, "purchased");
      const data = [];
      for (let i = 0; i < purched.length; i++) {
        await axios
          .get(`https://fakestoreapi.com/products/${purched[i].id}`)
          .then((res) => {
            res.data.count = purched[i].count;
            data.push(res.data);
            //console.log(data);
          });
      }
      setItemPurchased(data);
    }
  }, []);

  return (
    <TableContainer component="paper">
      <Table sx={{ maxWidth: 700 }} aria-label="addresses table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {itemPurchased.map((item) => {
            //console.log(item, "item");
            return (
              <TableRow key={item.id} sx={{ border: 1 }}>
                <TableCell>
                  <img src={item.image} width="100" />{" "}
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.count}</TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Purchases;
