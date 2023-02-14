import React from "react";

import { Flex, Text, Image, Link } from "@chakra-ui/react";

export const YoutubePlaylist = ({ data }: any) => {
  return (
    <Flex
      direction={"column"}
      bg={"rgba(18, 18, 18, 0.7)"}
      gap={4}
      mt={2}
      p={8}
    >
      <Text align={"center"} color="#fff">
        {" "}
        O vídeo para esta etapa não está disponível, mas você pode acompanhar
        nosso campeonato corrente na playlist abaixo, diretamente no canal da
        BVGtv!
      </Text>
      <Flex justifyContent={"center"} gap={4} flexFlow="wrap" my={4}>
        {data.items.map((item: any) => (
          <Flex key={item.id}>
            <Link
              color="secondary.500"
              fontWeight="normal"
              href={`https://youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
            >
              <Image
                height={item.snippet.thumbnails.medium.height}
                width={item.snippet.thumbnails.medium.width}
                src={item.snippet.thumbnails.medium.url}
                alt=""
              />
              <Text
                fontSize={"sm"}
                width={item.snippet.thumbnails.medium.width}
                color={"#fff"}
              >
                {item.snippet.title}
              </Text>
            </Link>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
