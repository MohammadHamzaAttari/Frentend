import CallToActionWithVideo from "../Hero";

import React from "react";
import { Box, Divider } from "@chakra-ui/react";
import BasicStatistics from "../Static";
export default function Home(props) {
  const handleData = (v) => {
    props.fetch(v);
  };
  return (
    <Box>
      <CallToActionWithVideo fetch={handleData} />
      <Divider />
      <BasicStatistics />
      <Divider />
    </Box>
  );
}
