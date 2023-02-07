import React from "react";
import { Flex, VStack } from "@chakra-ui/react";

import { useNews } from "./hooks/useNews";
import { NewsBox } from "./NewsBox";

export const News = () => {
  const { news } = useNews();

  return (
    <Flex
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
      <VStack gap={[2, 4]}>
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
      </VStack>
    </Flex>
  );
};
