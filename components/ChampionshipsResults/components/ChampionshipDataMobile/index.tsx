import React from "react";
import { Box, Flex, Tooltip, Text, Link } from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";

import { ChampionshipProps } from "../../types";

import { useTableHeader } from "../../hooks/useTableHeader";
import { DataHeader } from "../DataHeader";

export const ChampionshipDataMobile = ({
  id,
  title,
  logo,
  colors,
  tracks,
  results,
}: ChampionshipProps) => {
  const { header } = useTableHeader();

  return (
    <React.Fragment>
      <Box bg={"rgba(18, 18, 18, 0.7)"} m={4} p={8} justifyContent="center">
        <DataHeader titleCup={title} logoCup={logo} />

        <Box mt={8}>
          {results.map(
            ({ pos, driver, idPsn, penal, discard, total, points }) => (
              <React.Fragment key={pos}>
                <Flex align="center" justifyContent={"center"}>
                  {header.map(({ id, name, width }) => (
                    <Box key={id} bg={colors.head} w={width} p={2}>
                      <Text
                        align={"center"}
                        color={"primary.500"}
                        fontSize="sm"
                      >
                        {name}
                      </Text>
                    </Box>
                  ))}
                </Flex>
                <Flex
                  align="center"
                  justifyContent={"center"}
                  gap={1}
                  direction={["column"]}
                  mb={8}
                >
                  <Flex align={"center"} bg={colors.row}>
                    <Box w="45px" justifyContent={"center"} p={2}>
                      <Text align={"center"} color={colors.txt} fontSize="sm">
                        {pos}
                      </Text>
                    </Box>

                    <Box w="150px" justifyContent={"center"} p={2}>
                      <Text
                        color={colors.txt}
                        fontSize="sm"
                        fontWeight={"semibold"}
                      >
                        {driver}
                      </Text>
                      <Text
                        color={colors.txt}
                        fontSize="x-small"
                        fontWeight={"semibold"}
                      >
                        {idPsn}
                      </Text>
                    </Box>

                    <Box w="60px" p={2}>
                      <Text align={"center"} color={colors.txt} fontSize="sm">
                        {penal}
                      </Text>
                    </Box>
                    <Box w="75px" p={2}>
                      <Text align={"center"} color={colors.txt} fontSize="sm">
                        {discard}
                      </Text>
                    </Box>
                    <Box w="60px" p={2}>
                      <Text align={"center"} color={colors.txt} fontSize="md">
                        {total}
                      </Text>
                    </Box>
                  </Flex>
                  <Flex>
                    <Flex direction={"column"}>
                      {tracks.map(({ race, name, url }) => (
                        <React.Fragment key={race}>
                          <Tooltip
                            hasArrow
                            label={"Assista essa etapa no Youtube."}
                            placement="right-end"
                          >
                            <Link
                              textDecoration={"none"}
                              href={url}
                              _hover={{ textDecoration: "none" }}
                              isExternal
                            >
                              <Flex
                                w="60"
                                bg={colors.head}
                                my={1}
                                p={2}
                                align="center"
                                justifyContent="space-between"
                              >
                                <Box w="48" key={race}>
                                  <Text
                                    align={"center"}
                                    color={"primary.500"}
                                    fontSize="xs"
                                  >
                                    {name}
                                  </Text>
                                </Box>

                                <IconContext.Provider
                                  value={{ color: "#fff", size: "1em" }}
                                >
                                  <FaYoutube />
                                </IconContext.Provider>
                              </Flex>
                            </Link>
                          </Tooltip>
                        </React.Fragment>
                      ))}
                    </Flex>
                    <Flex direction={"column"} align={"center"}>
                      {points.map(({ et, pt }) => (
                        <React.Fragment key={et}>
                          <Box bg={colors.row} my={1} p={2} w="36">
                            <Text
                              align={"center"}
                              color={colors.txt}
                              fontSize="xs"
                            >
                              {pt}
                            </Text>
                          </Box>
                        </React.Fragment>
                      ))}
                    </Flex>
                  </Flex>
                </Flex>
              </React.Fragment>
            )
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
};

/*


 <Flex
            bg={colors.head}
            gap={2}
            align="center"
            display={["none", "none", "none", "none", "flex"]}
          >
            {tracks.map(({ race, name, url }) => (
              <Box key={race} w={"85px"} p={2}>
                <Text align={"center"} color={"primary.500"} fontSize="xs">
                  {name}
                </Text>
              </Box>
            ))}
          </Flex>

           <Flex align={"center"} bg={colors.row} gap={2}>
                  {points.map(({ et, pt }) => (
                    <Box key={et} w={"85px"} p={2}>
                      <Text align={"center"} color={colors.txt} fontSize="md">
                        {pt}
                      </Text>
                    </Box>
                  ))}
                </Flex>

          */
