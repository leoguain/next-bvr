import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

import { RankingHeader } from "../RankingHeader";
import { CurrentRankingsBoxProps } from "../../types";

export const DataRanking = ({
  rankingType,
  ranking,
}: CurrentRankingsBoxProps) => {
  console.log(ranking);
  const colorHead = ranking[0].colors.head;
  const colorRow = ranking[0].colors.row;
  const colorText = ranking[0].colors.txt;

  const headerLabel: string =
    rankingType === "Geral"
      ? "RANKING GERAL"
      : rankingType === "Sprint"
      ? "2º ETAPA - SPRINT"
      : "2º ETAPA - PRINCIPAL";

  const dataRanking =
    rankingType === "Geral"
      ? ranking[0].geral
      : rankingType === "Sprint"
      ? ranking[0].sprint
      : ranking[0].principal;

  return (
    <Flex direction={"column"} align="center">
      <RankingHeader
        titleCup={ranking[0].championship}
        logoCup={ranking[0].logo}
        typeRace={headerLabel}
      />

      <Box gap={4} mt={2}>
        {dataRanking.map(({ pos, driver, total }) => (
          <Flex key={driver} m={1} justifyContent="space-between">
            <Flex w={8} bg={colorHead} px={2} justifyContent="center">
              <Text color="#fff">{pos}</Text>
            </Flex>

            <Flex w={56} bg={colorRow} px={2} justifyContent="start">
              <Text color={colorText}>{driver}</Text>
            </Flex>

            <Flex w={8} bg={colorHead} px={2} justifyContent="center">
              <Text color={colorText}>{total}</Text>
            </Flex>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
};
