import React from "react";
import { Flex, VStack } from "@chakra-ui/react";

export const CurrentRanking = () => {
  return (
    <Flex
      bg={"#222222"}
      maxH={"xs"}
      px={4}
      direction="column"
      overflow={"auto"}
      mb={4}
      borderRadius="lg"
      css={{
        "&::-webkit-scrollbar": {
          width: "14px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#868686",
          width: "10px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#181818",
          borderRadius: "8px",
        },
      }}
    >
      <VStack gap={[2, 4]}>Text</VStack>
    </Flex>
  );
};

/*

 {news.map(({ id, title, data, texto, image, url }) => (
          <React.Fragment key={id}>
            Text
          </React.Fragment>
        ))}
        
        */
