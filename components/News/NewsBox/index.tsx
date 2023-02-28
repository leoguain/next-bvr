import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

import { NewsProps } from "../types";

export const NewsBox = ({ id, title, date, text, url }: NewsProps) => {
  return (
    <Flex m={2} maxW="sm" direction="column" justifyContent={"center"} key={id}>
      <Flex
        bg={"secondary.700"}
        color="primary.500"
        justifyContent={"center"}
        maxWidth={40}
        borderTopRadius="md"
      >
        {date}
      </Flex>
      <Box bg={"secondary.500"} borderBottomRadius="xl" maxWidth={80}>
        <Text
          color="primary.500"
          align={"center"}
          borderBottom={"1px"}
          py={2}
          borderColor="primary.500"
        >
          {title}
        </Text>
        <Text bg={"#505050"} color="primary.500" p={2}>
          {text}
        </Text>
        <Link href={url} target="_blank" rel="noreferrer">
          <Text
            h={8}
            borderBottomRadius="xl"
            bg={"secondary.500"}
            color="primary.500"
            align={"center"}
            _hover={{ bg: "secondary.700" }}
          >
            Veja mais
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};
