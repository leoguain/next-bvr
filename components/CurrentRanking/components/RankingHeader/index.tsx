import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { RankingHeaderProps } from "../../types";

export const RankingHeader = ({
  titleCup,
  logoCup,
  typeRace,
}: RankingHeaderProps) => {
  return (
    <Flex gap={[4]} align="center" justifyContent={"space between"}>
      <Image alt="logo do campeonato" src={logoCup} w="75px" />
      <Box w={32}>
        <Text align={"center"} color={"primary.500"} fontSize={["sm"]}>
          {titleCup}
        </Text>
        <Text align={"center"} color={"primary.500"} fontSize={["xs"]}>
          {typeRace}
        </Text>
      </Box>

      <Image
        alt="logo do campeonato"
        src="/bvg/BVG_logo_branco.png"
        w={["64px"]}
        h={["12px"]}
      />
    </Flex>
  );
};
