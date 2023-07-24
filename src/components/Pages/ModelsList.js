import React from "react";
import WithSubnavigation from "../navbar";
import LargeWithLogoCentered from "../Footer";
import { Box } from "@chakra-ui/react";

import Companies from "../Companies";
import DealerCard from "../Admin/DealerCard";

export default function ModelsList() {
  return (
    <Box>
      <WithSubnavigation />
      <DealerCard />
      <LargeWithLogoCentered />
    </Box>
  );
}
