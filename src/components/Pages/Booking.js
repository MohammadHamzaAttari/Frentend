import React from "react";

import { Box } from "@chakra-ui/react";
import CreditCardForm from "../CreditCard";
import WithSubnavigation from "../navbar";
import LargeWithLogoCentered from "../Footer";
function Booking(props) {
  return (
    <Box>
      <WithSubnavigation />
      <CreditCardForm />
      <LargeWithLogoCentered />
    </Box>
  );
}

export default Booking;
