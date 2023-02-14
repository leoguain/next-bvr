import React from "react";
import { Flex, Text } from "@chakra-ui/react";

import { RecordFieldProps } from "../../types";

import { When } from "../../../../components/shared/When";

export const RecordField = ({
  topLabel,
  title,
  bottomLabel,
  type,
  darken,
}: RecordFieldProps) => {
  const bkgColor = darken ? "rgba(18, 18, 18, 0.4)" : "transparent";
  const border = darken ? "1px" : "none";
  return (
    <React.Fragment>
      <When value={type === "box"}>
        <Flex direction={"column"} w={["8em", "12em"]} bg={bkgColor} p={2}>
          <Text color="#fff" fontSize={["xs", "sm"]}>
            {topLabel}
          </Text>
          <Text color="#fff" fontSize={["sm", "md"]} fontWeight={"semibold"}>
            {title}
          </Text>
          <Text color="#fff" fontSize={["xs", "sm"]}>
            {bottomLabel}
          </Text>
        </Flex>
      </When>

      <When value={type === "row"}>
        <Flex
          gap={[1, 2]}
          borderBottom={border}
          borderColor={"#fff"}
          p={2}
          bg={bkgColor}
          align="center"
        >
          <Text w={["5em", "7em"]} color="#fff" fontSize={["xs", "sm"]}>
            {topLabel}
          </Text>
          <Text w={["6.5em", "10em"]} color="#fff" fontSize={["xs", "md"]}>
            {title}
          </Text>
          <Text
            w={["4em", "4em"]}
            color="#f13beb"
            fontSize={["xs", "md"]}
            fontWeight="semibold"
            align={"center"}
          >
            {bottomLabel}
          </Text>
        </Flex>
      </When>
    </React.Fragment>
  );
};
