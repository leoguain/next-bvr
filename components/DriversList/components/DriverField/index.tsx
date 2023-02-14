import React from "react";
import { Flex, Text } from "@chakra-ui/react";

import { DriverFieldProps } from "../../types";

export const DriverField = ({
  label,
  value,
  size,
  reverse,
}: DriverFieldProps) => {
  const direction = reverse ? "column-reverse" : "column";

  return (
    <Flex direction={direction} justifyContent="center" align="center">
      <Text color="#fff" fontSize={size}>
        {label}
      </Text>
      <Text color="#fff" fontSize={size} fontWeight={"semibold"}>
        {value}
      </Text>
    </Flex>
  );
};
