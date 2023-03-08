import React from "react";
import { Flex, Text, Link, Tooltip, Image } from "@chakra-ui/react";

import { IconContext } from "react-icons";
import { FaYoutube } from "react-icons/fa";

export const CardBvg = () => {
  return (
    <Flex
      gap={2}
      p={4}
      align="center"
      bg={"rgba(18, 18, 18, 0.9)"}
      maxH="xs"
      maxW={"sm"}
      direction="column"
    >
      <Flex align="center" gap={2}>
        <Image
          alt="logo do campeonato"
          src="/bvg/BVG_logo_branco.png"
          w="9.3em"
        />
        <Text
          align={"end"}
          color={"primary.500"}
          fontSize={["sm", "sm", "sm", "sm", "md"]}
          w="12em"
        >
          Todas as nossas corridas são transmitidas pela BVGtv, no Youtube.
        </Text>
      </Flex>

      <Flex align="center" justifyContent={"center"} gap={2}>
        <Text
          align={"center"}
          color={"primary.500"}
          fontSize={["sm", "sm", "sm", "sm", "lg"]}
          w="14em"
        >
          Se inscreva no canal e não perca nossas corridas!
        </Text>
        <IconContext.Provider value={{ color: "#FF0000" }}>
          <Tooltip label="Se inscreva no canal!">
            <Link href="https://youtube.com/c/bvgtv" isExternal>
              <FaYoutube size={"5em"} />
            </Link>
          </Tooltip>
        </IconContext.Provider>
      </Flex>
    </Flex>
  );
};
