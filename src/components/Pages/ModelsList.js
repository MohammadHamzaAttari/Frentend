import React from "react";

import { Box } from "@chakra-ui/react";

import DealerCard from "../Admin/DealerCard";
import WithSubnavigation from "../navbar";
import LargeWithLogoCentered from "../Footer";

export default function ModelsList() {
  return (
    <Box>
      <WithSubnavigation />
      <DealerCard />
      <LargeWithLogoCentered />
    </Box>
  );
}
