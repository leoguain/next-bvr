import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

import { ChampionsProps } from "./types";

export const ChampionsList = ({ champions }: ChampionsProps) => {
  return (
    <Flex
      direction={"column"}
      bg={"rgba(18, 18, 18, 0.7)"}
      gap={4}
      mt={2}
      p={8}
    >
      <Text
        align={"center"}
        color={"primary.500"}
        fontSize={["md", "lg"]}
        mt={2}
        pb={4}
        borderBottom="2px"
      >
        Conheça os campeões da Liga BVR, desde a temporada 2021.
      </Text>
      <Flex
        alignSelf={"center"}
        direction={"column"}
        flexFlow="row wrap"
        justifyContent="center"
        mt={12}
        gap={4}
      >
        {champions.map(({ idUrl, url }) => (
          <Flex key={idUrl} m={1} align="center">
            <Image
              alt="logo do campeonato"
              src={url}
              width={["300px", "300px", "300px", "180px", "180px"]}
              _hover={{ width: "300px" }}
              transition="0.5s"
            />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
