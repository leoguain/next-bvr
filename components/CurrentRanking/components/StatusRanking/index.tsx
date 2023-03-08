import React from "react";
import { Flex, Text } from "@chakra-ui/react";

import { StatusRankingProps } from "../../types";

export const StatusRanking = ({ status, date }: StatusRankingProps) => {
  const colorBanner: string = status === "ok" ? "secondary.500" : "darkorange";
  const textBanner: string =
    status === "ok"
      ? "Resultado oficial " + date
      : status === "open"
      ? "Resultado não oficial."
      : "Resultado não oficial. Lances em análise.";

  return (
    <Flex bg={colorBanner} justifyContent="center">
      <Text align={"center"}>{textBanner}</Text>
    </Flex>
  );
};
