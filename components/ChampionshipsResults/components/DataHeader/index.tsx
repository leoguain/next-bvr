import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { DataHeaderProps } from "../../types";

export const DataHeader = ({ titleCup, logoCup }: DataHeaderProps) => {
  return (
    <Flex gap={[2, 4, 8, 16]} align="center" justifyContent={"center"}>
      <Image alt="logo do campeonato" src={logoCup} width="auto" />
      <Text color={"primary.500"} fontSize={["sm", "md", "lg", "2xl"]}>
        {titleCup}
      </Text>
      <Image
        alt="logo do campeonato"
        src="/bvg/BVG_logo_branco.png"
        w={["86px", "86px", "86px", "172px"]}
        h={["16px", "16px", "16px", "32px"]}
      />
    </Flex>
  );
};
