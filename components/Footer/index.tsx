import React from "react";
import { Box } from "@chakra-ui/react";

import { SocialMedias } from "./components/SocialMedias";
import { BottomBar } from "./components/BottomBar";

export const Footer = () => {
  return (
    <React.Fragment>
      <Box bg={"#181818"} mx="auto" my={4} px={[4]} w="100%" maxWidth={"7xl"}>
        <SocialMedias />
      </Box>
      <BottomBar />
    </React.Fragment>
  );
};
