import React from "react";
import { Flex, Box, Text, Image, Link } from "@chakra-ui/react";
import { FaFilePdf } from "react-icons/fa";
import { IconContext } from "react-icons";

import { DocumentsProps } from "./types";

export const DocumentsList = ({ documents }: DocumentsProps) => {
  return (
    <Box bg={"rgba(18, 18, 18, 0.7)"} gap={4} mt={2} p={8}>
      <Text
        align={"center"}
        color={"primary.500"}
        fontSize={["md", "lg"]}
        mt={2}
        pb={4}
        borderBottom="2px"
      >
        Confira o estatuto oficial da Liga BVR, e também todos os regulamentos
        desde a temporada 2021.
      </Text>
      <Flex
        alignSelf={"center"}
        maxH={["none", "none", "2xl", "2xl", "lg"]}
        direction={"column"}
        flexFlow="column wrap"
        justifyContent="center"
        mt={12}
        gap={4}
      >
        {documents.map(({ idDoc, title, type, logo, url }) => (
          <Flex key={idDoc} m={1} align="center">
            <Image alt="logo do campeonato" src={logo} width="75px" />
            <Box px={2}>
              <Text color="#fff">{type}</Text>
              <Text
                color="#fff"
                fontWeight={"semibold"}
                fontSize={["sm", "sm", "sm", "md"]}
              >
                {title}
              </Text>
            </Box>
            <Link
              textDecoration={"none"}
              href={url}
              _hover={{ textDecoration: "none" }}
              isExternal
            >
              <IconContext.Provider value={{ color: "#fff", size: "2em" }}>
                <FaFilePdf />
              </IconContext.Provider>
            </Link>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};
