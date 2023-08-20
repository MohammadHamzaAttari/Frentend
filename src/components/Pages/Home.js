import CallToActionWithVideo from "../Hero";

import React from "react";
import { Box, Divider } from "@chakra-ui/react";
import BasicStatistics from "../Static";
import WithSubnavigation from "../navbar";
import LargeWithLogoCentered from "../Footer";
export default function Home(props) {
  const handleData = (v) => {
    props.fetch(v);
  };
  return (
    <Box>
      <WithSubnavigation />
      <CallToActionWithVideo fetch={handleData} />
      <Divider />
      <BasicStatistics />
      <Divider />
      <LargeWithLogoCentered />
    </Box>
  );
}
