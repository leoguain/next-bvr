import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

import { RecordListProps } from "./types";

export const RecordsList = ({ tracks }: RecordListProps) => {
  return (
    <Box bg={"rgba(18, 18, 18, 0.7)"} gap={4} mt={2} p={8}>
      <Text
        align={"center"}
        color={"primary.500"}
        fontSize={["md", "lg"]}
        mt={2}
        pb={4}
        borderBottom="2px"
      >
        Confira os recordes de pole position e VMR dos nossos campeonatos.
      </Text>
      <Flex
        alignSelf={"center"}
        direction={"column"}
        justifyContent="center"
        mt={12}
        gap={4}
      >
        {tracks.map(({ idRecord, track, records }) => (
          <Flex key={idRecord} m={2} align="center" justifyContent={"center"}>
            <Box px={2}>
              <Text
                bg={"rgba(18, 18, 18, 0.7)"}
                px={2}
                color="#fff"
                fontSize={["md", "md", "md", "xl"]}
              >
                {track}
              </Text>
              {records.map(
                ({
                  championship,
                  year,
                  platform,
                  category,
                  driverPole,
                  timePole,
                  driverVMR,
                  timeVMR,
                }) => (
                  <Flex
                    key={championship}
                    gap={2}
                    align="center"
                    borderBottom="2px"
                    borderColor={"#fff"}
                    direction={["column", "column", "column", "row"]}
                    mb={4}
                  >
                    <Flex
                      justifyContent={"center"}
                      borderBottom={["1px", "1px", "1px", "0px"]}
                      borderColor={["#fff", "#fff", "#fff"]}
                      py={[4, 4, 4, 2]}
                    >
                      <Flex
                        direction={["column"]}
                        w={"12em"}
                        bg={"rgba(18, 18, 18, 0.4)"}
                        p={2}
                      >
                        <Text color="#fff" fontSize={"sm"}>
                          Categoria
                        </Text>
                        <Text color="#fff" fontWeight={"semibold"}>
                          {category}
                        </Text>
                        <Text color="#fff" fontSize={"sm"}>
                          {platform}
                        </Text>
                      </Flex>
                      <Flex direction={["column"]} w={"12em"} p={2}>
                        <Text color="#fff" fontSize={"sm"}>
                          Campeonato
                        </Text>
                        <Text color="#fff" fontWeight={"semibold"}>
                          {championship}
                        </Text>
                        <Text color="#fff" fontSize={"sm"}>
                          {year}
                        </Text>
                      </Flex>
                    </Flex>

                    <Flex direction={"column"}>
                      <Flex
                        gap={2}
                        borderBottom="1px"
                        borderColor={"#fff"}
                        p={2}
                        bg={"rgba(18, 18, 18, 0.4)"}
                      >
                        <Text w={"7em"} color="#fff" fontSize={"sm"}>
                          Pole Position
                        </Text>
                        <Text w={"10em"} color="#fff">
                          {driverPole}
                        </Text>
                        <Text color="#f13beb" fontWeight="semibold">
                          {timePole}
                        </Text>
                      </Flex>
                      <Flex gap={2} p={2}>
                        <Text w={"7em"} color="#fff" fontSize={"sm"}>
                          VMR
                        </Text>
                        <Text w={"10em"} color="#fff">
                          {driverVMR}
                        </Text>
                        <Text color="#f13beb" fontWeight="semibold">
                          {timeVMR}
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                )
              )}
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};
