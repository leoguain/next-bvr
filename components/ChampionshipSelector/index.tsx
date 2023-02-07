import React from "react";
import { Flex, Image } from "@chakra-ui/react";

import { useChampionship } from "./hooks/useChampionship";

import { useState, useCallback, useRef } from "react";
import { border } from "polished";

export const ChampionshipSelector = () => {
  const { championships } = useChampionship();

  const ref = useRef(null);

  const [activeCup, setActiveCup] = useState(championships[0]);

  return (
    <React.Fragment>
      <Flex
        bg={"#000"}
        m={4}
        p={4}
        borderRadius="lg"
        gap={[2, 8]}
        justifyContent="center"
        flexFlow={"row wrap"}
      >
        {championships.map(({ id, title, logo, colors, tracks }) => (
          <React.Fragment key={id}>
            <Image
              alt="logo do campeonato"
              src={logo}
              bg={"#181818"}
              borderRadius="lg"
              border="2px"
              borderColor={"transparent"}
              cursor={"pointer"}
              _hover={{ borderColor: "#fff" }}
            />
          </React.Fragment>
        ))}
      </Flex>
    </React.Fragment>
  );
};

/*

            w="3xl"
            h={"28"}
            bg={"#181818"}
            backgroundImage={logo}
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundSize="cover"
            cursor="pointer"
            _hover={{
              backgroundImage: { logo },
              border: "4px",
              borderColor: "secondary.500",
            }}

            */
