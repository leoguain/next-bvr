import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import { parse, differenceInYears } from "date-fns";

import { DriverBoxProps } from "../../types";

import { When } from "../../../shared/When";
import { DriverField } from "../DriverField";

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
          p={2}
          bg={"rgba(18, 18, 18, 0.4)"}
        >
          <When value={age !== 0}>
            <DriverField label="anos" value={age} size="sm" reverse />
          </When>

          <DriverField label="Equipe" value={team} size="sm" />
          <DriverField label="Carteira" value={license} size="sm" />
        </Flex>

        <Flex flexFlow={"wrap row"} gap={2} justifyContent="center" p={2}>
          <DriverField label="Pontos" value={validPoints} size="xs" reverse />
          <DriverField label="Corridas" value={countRaces} size="xs" reverse />
          <DriverField label="Vitórias" value={countP1} size="xs" reverse />
          <DriverField label="Poles" value={countPoles} size="xs" reverse />
          <DriverField label="VMR" value={countVMR} size="xs" reverse />
        </Flex>
      </Flex>
    </Flex>
  );
};
