import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { darken, lighten } from "polished";

import { LicenseListProps, DriverProps } from "./types";

type arrayType = {
  id: string;
  color: string;
  drivers: DriverProps[];
};

export const LicensesList = ({ licenses }: LicenseListProps) => {
  /*function groupBy(list: any, keyGetter: any) {
    let arrayX: any[] = new Array();

    const map = new Map();
    list.forEach((item: any) => {
      const key = keyGetter(item);

      const collection = map.get(key);
      if (!collection) {
        arrayX.push([key, item.color]);
        map.set(key, [item]);
      }
    });
    return arrayX;
  }

  var licensesArray: any[] = new Array();
  const grouped = groupBy(licenses, (license: any) => license.idLicense);

  console.log(grouped);

  function logMapElements(value: DriverProps, key: any) {
    licensesArray.push({ key });
  }

  grouped.forEach(logMapElements);
  */

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

/*
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

        */
