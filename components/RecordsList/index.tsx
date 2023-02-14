import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

import { RecordListProps } from "./types";
import { RecordField } from "./components/RecordField";

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
                bg={"secondary.500"}
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
                    mb={[8]}
                  >
                    <Flex
                      justifyContent={"center"}
                      borderBottom={["1px", "1px", "1px", "0px"]}
                      borderColor={["#fff", "#fff", "#fff"]}
                      mt={[0, 0, 0, 2]}
                      py={[2, 2, 2, 0]}
                      align="center"
                    >
                      <RecordField
                        topLabel="Categoria"
                        title={category}
                        bottomLabel={platform}
                        type="box"
                        darken
                      />
                      <RecordField
                        topLabel="Campeonato"
                        title={championship}
                        bottomLabel={year}
                        type="box"
                      />
                    </Flex>

                    <Flex direction={"column"}>
                      <RecordField
                        topLabel="Pole Position"
                        title={driverPole}
                        bottomLabel={timePole}
                        type="row"
                        darken
                      />
                      <RecordField
                        topLabel="VMR"
                        title={driverVMR}
                        bottomLabel={timeVMR}
                        type="row"
                      />
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
