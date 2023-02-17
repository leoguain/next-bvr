import React from "react";
import { Flex, Box, Text, Image, Link, Button } from "@chakra-ui/react";
import { FaFilePdf } from "react-icons/fa";
import { IconContext } from "react-icons";

import { RegistrationsProps } from "./types";

export const Registrations = ({ registrations }: RegistrationsProps) => {
  return (
    <Flex
      direction={"column"}
      bg={"rgba(18, 18, 18, 0.7)"}
      gap={4}
      mt={2}
      p={8}
    >
      <Text
        align={"center"}
        color={"primary.500"}
        fontSize={["md", "lg"]}
        mt={2}
        pb={4}
        borderBottom="2px"
      >
        Confira os campeonatos disponíveis para inscrição, na Liga BVR.
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
        <Text color={"#fff"} fontSize="xl">
          Não há nenhum campeonato disponível para inscrição no momento :(
        </Text>
        <Text color={"#fff"} fontSize="lg">
          Mas continue ligado com a gente para saber quando começam os próximos
          campeonatos!
        </Text>
      </Flex>
    </Flex>
  );
};

/*

{registrations.map(
          ({
            id,
            championship,
            date,
            time,
            rounds,
            game,
            platform,
            logo,
            statute,
          }) => (
            <Flex key={id} m={1} align="center" direction={"column"}>
              <Flex
                bg={"rgba(18, 18, 18, 0.7)"}
                key={id}
                m={1}
                align="center"
                gap={8}
                p={4}
              >
                <Image alt="logo do campeonato" src={logo} width="75px" />
                <Flex px={2} gap={4}>
                  <Flex direction={"column"}>
                    <Text
                      color="#fff"
                      fontWeight={"semibold"}
                      fontSize={["sm", "sm", "sm", "md"]}
                    >
                      {championship}
                    </Text>
                    <Text color="#fff">{game}</Text>
                    <Text color="#fff">{platform}</Text>
                  </Flex>
                </Flex>
                <Flex direction={"column"} align="flex-start">
                  <Text color="#fff" fontSize={["sm"]}>
                    Início: {date}
                  </Text>
                  <Text color="#fff" fontSize={["sm"]}>
                    Horário: {time}
                  </Text>
                  <Text color="#fff" fontSize={["sm"]}>
                    {rounds} etapas
                  </Text>
                </Flex>
                <Flex direction={"column"} align="center" gap={2}>
                  <Text color="#fff" fontSize={["sm"]}>
                    Regulamento:
                  </Text>
                  <Link
                    textDecoration={"none"}
                    href={statute}
                    _hover={{ textDecoration: "none" }}
                    isExternal
                  >
                    <IconContext.Provider
                      value={{ color: "#fff", size: "2em" }}
                    >
                      <FaFilePdf />
                    </IconContext.Provider>
                  </Link>
                </Flex>
                <Flex direction={"column"} align="center" gap={2}>
                  <Link
                    textDecoration={"none"}
                    href={statute}
                    _hover={{ textDecoration: "none" }}
                    isExternal
                  >
                    <Button
                      bg={"secondary.500"}
                      color="#fff"
                      _hover={{ bg: "#fff", color: "secondary.500" }}
                    >
                      Inscreva-se aqui
                    </Button>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          )
        )}

        */
