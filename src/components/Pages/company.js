import React from "react";

import { Box } from "@chakra-ui/react";

import Companies from "../Companies";
import WithSubnavigation from "../navbar";
import LargeWithLogoCentered from "../Footer";

export default function Company() {
  return (
    <Box>
      <WithSubnavigation />
      <Companies />
      <LargeWithLogoCentered />
    </Box>
  );
}
