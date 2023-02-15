import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

import { DataHeaderProps } from "../../types";

export const DataHeader = ({ titleCup, logoCup }: DataHeaderProps) => {
  return (
    <Flex gap={[4, 8]} align="center" justifyContent={"center"}>
      <Image
        alt="logo do campeonato"
        src={logoCup}
        w={["75px", "75px", "107px"]}
        h={["55px", "55px", "82px"]}
      />
      <Text
        align={"center"}
        color={"primary.500"}
        fontSize={["sm", "md", "lg", "2xl"]}
      >
        {titleCup}
      </Text>
      <Image
        alt="logo do campeonato"
        src="/bvg/BVG_logo_branco.png"
        w={["86px", "86px", "86px", "129px"]}
        h={["16px", "16px", "16px", "24px"]}
      />
    </Flex>
  );
};
