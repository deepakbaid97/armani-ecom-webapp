import {
  Typography,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
import WatchIcon from "@mui/icons-material/Watch";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import PregnantWomanIcon from "@mui/icons-material/PregnantWoman";
import React from "react";

import Cart_Drawer from "./cart_Drawer";
import { Link, Outlet } from "react-router-dom";

const Productpage = () => {
  const category = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const categoryIcon = [
    <WatchIcon />,
    <AcUnitIcon />,
    <AccessibilityIcon />,
    <PregnantWomanIcon />,
  ];

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Drawer variant="permanent" open sx={{ width: "250px" }}>
          <Toolbar />
          <Typography variant="h4" align="center" sx={{ padding: "10px" }}>
            Categories
          </Typography>
          <Divider />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {category.map((text, index) => (
                <Link
                  to={`/products/${category[index]}`}
                  style={{
                    textDecoration: "none",
                    color: "#232323",
                  }}
                >
                  <ListItem button key={text}>
                    <ListItemIcon>{categoryIcon[index]}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
          <Outlet />
        </Box>
        <Cart_Drawer />
      </Box>
    </div>
  );
};

export default Productpage;
