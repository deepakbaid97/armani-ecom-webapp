import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { UserLoggedInContext } from "../../app";

function getRandomString(length) {
  var randomChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var result = "";
  for (var i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
}

const CreateAddress = () => {
  const userLoggedinContext = React.useContext(UserLoggedInContext);
  const initialErrorState = { AddressName: "", PinCode: "", City: "" };
  const [errorState, setErrorState] = React.useState(initialErrorState);

  const [AddressName, SetAddressName] = useState("");
  const [AddressLineOne, SetAddressLineOne] = useState("");
  const [AddressLineTwo, SetAddressLIneTwo] = useState("");
  const [PinCode, SetPinCode] = useState("");
  const [City, SetCity] = useState("");

  const addAddress = () => {
    const newAddress = {
      key: getRandomString(10),
      addressName: AddressName,
      addressLineOne: AddressLineOne,
      addressLineTwo: AddressLineTwo,
      pincode: PinCode,
      city: City,
    };
    console.log(newAddress);

    userLoggedinContext.dispatch({ type: "add_address", payload: newAddress });
  };

  return (
    <>
      <TextField
        id="address Name"
        label="Address Name"
        variant="filled"
        autoFocus={true}
        type="text"
        value={AddressName}
        onChange={(e) => SetAddressName(e.target.value)}
        required
        placeholder="E.g.: Home"
      />
      <br />
      <br />
      <TextField
        id="address-line-1"
        label="Address Line One"
        variant="filled"
        type="text"
        value={AddressLineOne}
        onChange={(e) => SetAddressLineOne(e.target.value)}
      />
      <br />
      <br />
      <TextField
        id="address-line-2"
        label="Address Line Two"
        variant="filled"
        value={AddressLineTwo}
        onChange={(e) => SetAddressLIneTwo(e.target.value)}
      />
      <TextField
        id="Pin Code"
        label="Pin Code"
        variant="filled"
        type="number"
        required
        value={PinCode}
        onChange={(e) => SetPinCode(e.target.value)}
      />
      <TextField
        id="City"
        label="City"
        variant="filled"
        required
        value={City}
        onChange={(e) => SetCity(e.target.value)}
      />
      <br />
      <Button onClick={() => addAddress()} variant="contained">
        {" "}
        Add Address
      </Button>
    </>
  );
};

export default CreateAddress;
