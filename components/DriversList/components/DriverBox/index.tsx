import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import { parse, differenceInYears } from "date-fns";

import { DriverBoxProps } from "../../types";

export const DriverBox = ({
  idDriver,
  driver,
  idPsn,
  team,
  birthDate,
  license,
  image,
  countRaces,
  validPoints,
  countP1,
  countPoles,
  countVMR,
  index,
}: DriverBoxProps) => {
  const date = parse(birthDate, "dd/MM/yyyy", new Date());
  const age = differenceInYears(new Date(), date);

  return (
    <Flex
      key={idDriver}
      w={"17.5em"}
      direction={"column"}
      p={4}
      gap={2}
      transition="0.5s"
      _hover={{ bg: "secondary.500" }}
    >
      <Flex align={"center"} mb={2} bg={"rgba(18, 18, 18, 0.7)"}>
        <Image alt="logo do campeonato" src={image} w="100px" />
        <Flex direction={"column"} px={2}>
          <Text color="#fff">{index + 1}º no Ranking</Text>
          <Text color="#fff" fontWeight={"semibold"}>
            {driver}
          </Text>
          <Text color="#fff" fontSize={"xs"}>
            {idPsn}
          </Text>
        </Flex>
      </Flex>

      <Flex direction={"column"}>
        <Flex
          flexFlow={"wrap row"}
          gap={6}
          justifyContent="center"
          align={"center"}
          p={2}
          bg={"rgba(18, 18, 18, 0.4)"}
        >
          <Flex direction={"column"} align="center">
            <Text color="#fff" fontSize={"sm"} fontWeight={"semibold"}>
              {age}
            </Text>
            <Text color="#fff" fontSize={"sm"}>
              anos
            </Text>
          </Flex>
          <Flex direction={"column"} justifyContent="center" align="center">
            <Text color="#fff" fontSize={"sm"}>
              Equipe
            </Text>
            <Text color="#fff" fontSize={"sm"} fontWeight={"semibold"}>
              {team}
            </Text>
          </Flex>
          <Flex direction={"column"} justifyContent="center" align="center">
            <Text color="#fff" fontSize={"sm"}>
              Carteira
            </Text>
            <Text color="#fff" fontSize={"sm"} fontWeight={"semibold"}>
              {license}
            </Text>
          </Flex>
        </Flex>

        <Flex flexFlow={"wrap row"} gap={2} justifyContent="center" p={2}>
          <Flex direction={"column"} align="center">
            <Text color="#fff" fontSize={"xs"} fontWeight={"semibold"}>
              {validPoints}
            </Text>
            <Text color="#fff" fontSize={"xs"}>
              pontos
            </Text>
          </Flex>
          <Flex direction={"column"} justifyContent="center" align="center">
            <Text color="#fff" fontSize={"xs"} fontWeight={"semibold"}>
              {countRaces}
            </Text>
            <Text color="#fff" fontSize={"xs"}>
              Corridas
            </Text>
          </Flex>
          <Flex direction={"column"} justifyContent="center" align="center">
            <Text color="#fff" fontSize={"xs"} fontWeight={"semibold"}>
              {countP1}
            </Text>
            <Text color="#fff" fontSize={"xs"}>
              Vitórias
            </Text>
          </Flex>
          <Flex direction={"column"} justifyContent="center" align="center">
            <Text color="#fff" fontSize={"xs"} fontWeight={"semibold"}>
              {countPoles}
            </Text>
            <Text color="#fff" fontSize={"xs"}>
              Poles
            </Text>
          </Flex>
          <Flex direction={"column"} justifyContent="center" align="center">
            <Text color="#fff" fontSize={"xs"} fontWeight={"semibold"}>
              {countVMR}
            </Text>
            <Text color="#fff" fontSize={"xs"}>
              VMR
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
