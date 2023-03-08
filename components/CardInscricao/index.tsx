import React from "react";
import { Flex, Link, Image } from "@chakra-ui/react";

export const CardInscricao = () => {
  return (
    <Flex align="center" maxW={"sm"} direction="column">
      <Link href="/inscricoes" rel="noreferrer">
        <Image alt="logo do campeonato" src="/misc/bannerInscricao.jpg" />
      </Link>
    </Flex>
  );
};
