import React, { useState, useCallback } from "react";
import { Flex, Box, Button } from "@chakra-ui/react";

import { useButtonsJGTC } from "./hooks/useButtonsJGTC";
import { DataRanking } from "./components/DataRanking";

import { CurrentRankingProps } from "./types";

export const CurrentRanking = ({ ranking }: CurrentRankingProps) => {
  const { buttonsJGTC } = useButtonsJGTC();

  const [rankingType, setRankingType] = useState("Geral");
  const handleCupClick = useCallback((rankingType: string) => {
    setRankingType(rankingType);
  }, []);

  return (
    <Box bg={"rgba(18, 18, 18, 0.9)"} mx={4} p={8} justifyContent="center">
      {rankingType && (
        <DataRanking rankingType={rankingType} ranking={ranking} />
      )}

      <Flex gap={4} justifyContent="center" mt={4}>
        {buttonsJGTC.map(({ text, bkgColor, txtColor }) => (
          <Button
            h={8}
            key={text}
            bg={bkgColor}
            color={txtColor}
            _hover={{ bg: txtColor, color: bkgColor }}
            onClick={() => {
              handleCupClick(text);
            }}
          >
            {text}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};
