import React from "react";

import { Box } from "@chakra-ui/react";
import Modelshero from "../Modelshero";
import WithSubnavigation from "../navbar";
import LargeWithLogoCentered from "../Footer";

export default function Models(props) {
  const data = props.dataId;

  return (
    <Box>
      <WithSubnavigation />
      <Modelshero fetch={data} />
      <LargeWithLogoCentered />
    </Box>
  );
}
