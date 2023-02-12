import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

import { DriverListProps } from "./types";
import { DriverBox } from "./components/DriverBox";

export const DriversList = ({ drivers }: DriverListProps) => {
  return (
    <Box bg={"rgba(18, 18, 18, 0.7)"} gap={4} mt={2}>
      <Box p={8}>
        <Text
          align={"center"}
          color={"primary.500"}
          fontSize={["md", "lg"]}
          mt={2}
        >
          Conheça os pilotos na Liga BVR. Aqui você conhece cada piloto, e suas
          principais estatísticas.
        </Text>
        <Text
          align={"center"}
          color={"primary.500"}
          fontSize={["xs", "md"]}
          pb={4}
          borderBottom="2px"
        >
          Última atualização em 01/01/2023.
        </Text>

        <Flex
          alignSelf={"center"}
          flexFlow="row wrap"
          justifyContent="center"
          mt={12}
          gap={2}
        >
          {drivers.map(
            (
              {
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
              },
              index
            ) => (
              <React.Fragment key={idDriver}>
                <DriverBox
                  idDriver={idDriver}
                  driver={driver}
                  idPsn={idPsn}
                  team={team}
                  birthDate={birthDate}
                  license={license}
                  image={image}
                  validPoints={validPoints}
                  countP1={countP1}
                  countPoles={countPoles}
                  countVMR={countVMR}
                  countRaces={countRaces}
                  index={index}
                />
              </React.Fragment>
            )
          )}
        </Flex>
      </Box>
    </Box>
  );
};
