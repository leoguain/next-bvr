import React from "react";
import { Box, Flex, Link, Text, Button } from "@chakra-ui/react";

import { NewsProps } from "../types";

export const NewsBox = ({ id, title, data, texto, image, url }: NewsProps) => {
  return (
    <Flex mt={4} maxW="sm" direction="column">
      <Box key={id}>
        <Flex
          bg={"secondary.500"}
          color="primary.500"
          justifyContent={"center"}
          maxWidth={40}
          borderTopRadius="md"
        >
          {data}
        </Flex>
        <Box bg={"#3f3f3f"} borderBottomRadius="xl">
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
            {texto}
          </Text>
          <Link href={url} target="_blank" rel="noreferrer">
            <Text
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
      </Box>
    </Flex>
  );
};
