import React from "react";
import { Flex, Text } from "@chakra-ui/react";

import { RegistrationsProps } from "./types";
import { EventBox } from "./components/EventBox";

export const Registrations = ({ registrations }: RegistrationsProps) => {
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
        Confira os campeonatos disponíveis para inscrição, na Liga BVR.
      </Text>
      <Flex
        alignSelf={"center"}
        maxH={["none", "none", "2xl", "2xl", "lg"]}
        direction={"column"}
        flexFlow="column wrap"
        justifyContent="center"
        mt={12}
        gap={4}
      >
        {registrations.map((registration) => (
          <EventBox key={registration.id} {...registration} />
        ))}
      </Flex>
    </Flex>
  );
};

/*

<Text color={"#fff"} fontSize="xl">
        Não há nenhum campeonato disponível para inscrição no momento :(
      </Text>
      <Text color={"#fff"} fontSize="lg">
        Mas continue ligado com a gente para saber quando começam os próximos
        campeonatos!
      </Text>

<Text
        align={"center"}
        color={"primary.500"}
        fontSize={["md", "lg"]}
        mt={2}
        pb={4}
        borderBottom="2px"
      >
        Confira os campeonatos disponíveis para inscrição, na Liga BVR.
      </Text>
      <Flex
        alignSelf={"center"}
        maxH={["none", "none", "2xl", "2xl", "lg"]}
        direction={"column"}
        flexFlow="column wrap"
        justifyContent="center"
        mt={12}
        gap={4}
      >
        {registrations.map((registration) => (
          <EventBox key={registration.id} {...registration} />
        ))}
      </Flex>

      */
