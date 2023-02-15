import React from "react";
import { Box, Flex, Tooltip, Text, Link } from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";

import { ChampionshipProps } from "../../types";

import { useTableHeader } from "../../hooks/useTableHeader";
import { DataHeader } from "../DataHeader";

export const ChampionshipDataMobile = ({
  title,
  logo,
  colors,
  tracks,
  results,
}: ChampionshipProps) => {
  const { header } = useTableHeader();

  return (
    <Flex
      direction={"column"}
      bg={"rgba(18, 18, 18, 0.7)"}
      m={4}
      p={8}
      justifyContent="center"
      align={"center"}
      maxW={["sm", "md", "lg", "xl"]}
    >
      <DataHeader titleCup={title} logoCup={logo} />

      <Flex
        direction={"column"}
        mt={8}
        align="center"
        justifyContent={"center"}
      >
        {results.map(
          ({ pos, driver, idPsn, penal, discard, total, points }) => (
            <React.Fragment key={pos}>
              <Flex align="center" justifyContent={"center"}>
                {header.map(({ id, name, mWidth }) => (
                  <Box key={id} bg={colors.head} w={mWidth} py={2}>
                    <Text align={"center"} color={"primary.500"} fontSize="sm">
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
                  <Box w="45px" justifyContent={"center"}>
                    <Text align={"center"} color={colors.txt} fontSize="sm">
                      {pos}
                    </Text>
                  </Box>

                  <Box w="140px" justifyContent={"center"}>
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

                  <Box w="55px" p={2}>
                    <Text align={"center"} color={colors.txt} fontSize="sm">
                      {penal}
                    </Text>
                  </Box>
                  <Box w="75px" p={2}>
                    <Text align={"center"} color={colors.txt} fontSize="sm">
                      {discard}
                    </Text>
                  </Box>
                  <Box w="55px" p={2}>
                    <Text align={"center"} color={colors.txt} fontSize="md">
                      {total}
                    </Text>
                  </Box>
                </Flex>
                <Flex>
                  <Flex direction={"column"}>
                    {tracks.map(({ race, name, url }) => (
                      <Tooltip
                        hasArrow
                        key={race}
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
                            w="220px"
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
                    ))}
                  </Flex>
                  <Flex direction={"column"} align={"center"}>
                    {points.map(({ et, pt }) => (
                      <Flex
                        key={et}
                        bg={colors.row}
                        my={1}
                        p={2}
                        w="150px"
                        align={"center"}
                        justifyContent="center"
                      >
                        <Text color={colors.txt} fontSize="xs">
                          {pt}
                        </Text>
                      </Flex>
                    ))}
                  </Flex>
                </Flex>
              </Flex>
            </React.Fragment>
          )
        )}
      </Flex>
    </Flex>
  );
};
