import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { darken, lighten } from "polished";

import { LicenseListProps } from "./types";

export const LicensesList = ({ licenses }: LicenseListProps) => {
  return (
    <Flex
      direction={"column"}
      justifyContent="center"
      bg={"rgba(18, 18, 18, 0.7)"}
      mt={2}
      p={8}
    >
      <Text
        align={"center"}
        color={"primary.500"}
        fontSize={["md", "lg"]}
        mt={2}
      >
        Acompanhe o nível de carteira de cada piloto na Liga BVR.
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
        justifyContent="center"
        align={["center", "start"]}
        direction={["column", "row"]}
        flexFlow="row wrap"
        mt={12}
        gap={4}
      >
        {licenses.map(({ idLicense, color, drivers }) => (
          <Flex
            key={idLicense}
            border="4px"
            borderColor={color}
            bg={"rgba(18, 18, 18, 0.5)"}
            w={"17em"}
            p={4}
            direction="column"
            maxH={"25em"}
          >
            <Text align={"center"} color="#fff" fontWeight={"semibold"}>
              Carteira {idLicense}
            </Text>
            <Flex
              direction={"column"}
              overflow={"auto"}
              css={{
                "&::-webkit-scrollbar": {
                  width: "5px",
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "#868686",
                  width: "10px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: darken(0.2, color),
                  borderRadius: "2px",
                },
              }}
            >
              {drivers.map(({ id, name, idPsn }) => (
                <Flex
                  key={id}
                  justifyContent="space-between"
                  p={2}
                  borderBottom="2px"
                  borderColor={lighten(0.4, color)}
                  direction="column"
                >
                  <Text color="#fff" fontSize={"md"}>
                    {name}
                  </Text>
                  <Text color="#fff" fontSize={"xs"}>
                    {idPsn}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
