import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

import { RankingHeader } from "../RankingHeader";
import { useCurrentRanking } from "../../hooks/useCurrentRanking";
import { TypeProps } from "../../types";

export const DataRanking = ({ rankingType }: TypeProps) => {
  const { currentRanking } = useCurrentRanking();
  const colorHead = currentRanking[0].colors.head;
  const colorRow = currentRanking[0].colors.row;
  const colorText = currentRanking[0].colors.txt;

  const headerLabel: string =
    rankingType === "Geral"
      ? "RANKING GERAL"
      : rankingType === "Sprint"
      ? "2º ETAPA - SPRINT"
      : "2º ETAPA - PRINCIPAL";

  const dataRanking =
    rankingType === "Geral"
      ? currentRanking[0].geral
      : rankingType === "Sprint"
      ? currentRanking[0].sprint
      : currentRanking[0].principal;

  return (
    <React.Fragment>
      <RankingHeader
        titleCup={currentRanking[0].championship}
        logoCup={currentRanking[0].logo}
        typeRace={headerLabel}
      />

      <Box gap={4} mt={2}>
        {dataRanking.map(({ pos, driver, idPsn, total }) => (
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
    </React.Fragment>
  );
};
