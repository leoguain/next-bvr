import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { TitleProps } from "./types";

export const PageTitle = ({ pageTitle, pageUrl }: TitleProps) => {
  return (
    <Flex
      bg={"rgba(18, 18, 18, 0.7)"}
      justifyContent={["center", "center", "space-between"]}
      flexDirection={["column-reverse", "column-reverse", "row"]}
      px={4}
    >
      <Text
        align={"center"}
        color={"primary.500"}
        fontSize={["xl", "2xl"]}
        my={4}
      >
        {pageTitle}
      </Text>
    </Flex>
  );
};
