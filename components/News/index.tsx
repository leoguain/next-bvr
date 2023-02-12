import React from "react";
import { Flex, VStack, Text, Box } from "@chakra-ui/react";

import { useNews } from "./hooks/useNews";
import { NewsBox } from "./NewsBox";

import { NewsContainerProps } from "./types";

export const News = ({ type }: NewsContainerProps) => {
  const { news } = useNews();

  if (type === "Box") {
    return (
      <Flex
        justifyContent="space-between"
        flexDirection={["column"]}
        gap={2}
        py={4}
        align="center"
        bg={"rgba(18, 18, 18, 0.9)"}
        maxH="xs"
        mb={4}
        maxW={["sm"]}
      >
        <Text color={"primary.500"} borderBottom="2px" mb={4}>
          Últimas notícias
        </Text>

        <Flex
          direction={"column"}
          gap={8}
          px={4}
          overflow={"auto"}
          css={{
            "&::-webkit-scrollbar": {
              width: "14px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#868686",
              width: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#149b49",
              borderRadius: "2px",
            },
          }}
        >
          {news.map(({ id, title, data, texto, image, url }) => (
            <React.Fragment key={id}>
              <NewsBox
                id={id}
                title={title}
                data={data}
                texto={texto}
                image={image}
                url={url}
              />
            </React.Fragment>
          ))}
        </Flex>
      </Flex>
    );
  } else {
    return (
      <Box p={8} bg={"rgba(18, 18, 18, 0.7)"} gap={4} mt={2}>
        <Text
          align={"center"}
          color={"primary.500"}
          fontSize={["md", "lg"]}
          mt={2}
          pb={4}
          borderBottom="2px"
        >
          Confira todas as notícias postadas no site.
        </Text>

        <Flex
          maxH={"xl"}
          flexFlow="row wrap"
          mt={12}
          gap={2}
          overflow="auto"
          justifyContent={"center"}
          css={{
            "&::-webkit-scrollbar": {
              width: "14px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#868686",
              width: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#149b49",
              borderRadius: "2px",
            },
          }}
        >
          {news.map(({ id, title, data, texto, image, url }) => (
            <Flex key={id} m={1} align="center">
              <NewsBox
                id={id}
                title={title}
                data={data}
                texto={texto}
                image={image}
                url={url}
              />
            </Flex>
          ))}
        </Flex>
      </Box>
    );
  }
};
