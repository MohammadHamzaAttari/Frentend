import React from "react";

import { Box } from "@chakra-ui/react";
import ModelsDetails from "../ModelsDetails";
import WithSubnavigation from "../navbar";
import LargeWithLogoCentered from "../Footer";

export default function MDetails(props) {
  return (
    <Box>
      <WithSubnavigation />
      <ModelsDetails />
      <LargeWithLogoCentered />
    </Box>
  );
}
