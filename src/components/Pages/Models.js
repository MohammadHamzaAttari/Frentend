import React from "react";

import { Box } from "@chakra-ui/react";
import Modelshero from "../Modelshero";

export default function Models(props) {
  const data = props.dataId;

  return (
    <Box>
      <Modelshero fetch={data} />
    </Box>
  );
}
