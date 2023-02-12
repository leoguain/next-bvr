import React from "react";
import { Box, Flex, Tooltip, Text, Link } from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";

import { ChampionshipProps } from "../../types";

import { useTableHeader } from "../../hooks/useTableHeader";
import { DataHeader } from "../DataHeader";

export const ChampionshipData = ({
  id,
  title,
  logo,
  colors,
  tracks,
  results,
}: ChampionshipProps) => {
  const { header } = useTableHeader();

  return (
    <Box bg={"rgba(18, 18, 18, 0.7)"} m={4} p={8} justifyContent="center">
      <DataHeader titleCup={title} logoCup={logo} />

      <Flex gap={4} mt={8}>
        <Flex bg={colors.head} align="center" justifyContent={"center"}>
          {header.map(({ id, name, width }) => (
            <Box key={id} w={width} p={2}>
              <Text align={"center"} color={"primary.500"} fontSize="sm">
                {name}
              </Text>
            </Box>
          ))}
        </Flex>
        <Flex bg={colors.head} gap={2}>
          {tracks.map(({ race, name, url }) => (
            <Tooltip
              hasArrow
              label={"Assista essa etapa no Youtube."}
              placement="top-start"
              key={race}
            >
              <Link
                textDecoration={"none"}
                href={url}
                _hover={{ textDecoration: "none" }}
                isExternal
              >
                <Box w={"6em"} px={1} py={2}>
                  <Flex h="2.5em" alignItems="center" justifyContent={"center"}>
                    <Text align={"center"} color={"primary.500"} fontSize="xs">
                      {name}
                    </Text>
                  </Flex>

                  <Flex justifyContent={"center"}>
                    <IconContext.Provider
                      value={{ color: "#fff", size: "1em" }}
                    >
                      <FaYoutube />
                    </IconContext.Provider>
                  </Flex>
                </Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
      </Flex>

      <Box>
        {results.map(
          ({ pos, driver, idPsn, penal, discard, total, points }) => (
            <Flex key={pos} mb={1} gap={4}>
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

              <Flex align={"center"} bg={colors.row} gap={2}>
                {points.map(({ et, pt }) => (
                  <Box key={et} w={"6em"} px={1} py={2}>
                    <Text align={"center"} color={colors.txt} fontSize="md">
                      {pt}
                    </Text>
                  </Box>
                ))}
              </Flex>
            </Flex>
          )
        )}
      </Box>
    </Box>
  );
};
