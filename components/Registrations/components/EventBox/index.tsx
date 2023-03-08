import React from "react";
import { Flex, Text, Image, Link, Button } from "@chakra-ui/react";
import { FaFilePdf, FaWhatsapp } from "react-icons/fa";
import { IconContext } from "react-icons";

import { RegistrationProps } from "../../types";

export const EventBox = ({
  id,
  championship,
  date,
  time,
  rounds,
  game,
  platform,
  logo,
  statute,
  urlRegistration,
  urlWhatsApp,
}: RegistrationProps) => {
  return (
    <Flex
      bg={"rgba(18, 18, 18, 0.7)"}
      key={id}
      m={1}
      align="center"
      gap={[4, 4, 8]}
      p={4}
      direction={["column", "column", "column", "row"]}
    >
      <Image alt="logo do campeonato" src={logo} width="75px" />
      <Flex px={2} gap={[2, 2, 4]}>
        <Flex
          direction={"column"}
          align={["center", "center", "center", "start"]}
        >
          <Text color="#fff" fontWeight={"semibold"}>
            {championship}
          </Text>
          <Text color="#fff">{game}</Text>
          <Text color="#fff">{platform}</Text>
        </Flex>
      </Flex>

      <Flex
        direction={"column"}
        align={["center", "center", "center", "start"]}
      >
        <Text color="#fff">Início: {date}</Text>
        <Text color="#fff">Horário: {time}</Text>
        <Text color="#fff">{rounds} etapas</Text>
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
          <IconContext.Provider value={{ color: "#fff", size: "2em" }}>
            <FaFilePdf />
          </IconContext.Provider>
        </Link>
      </Flex>
      <Flex direction={"column"} align="center" gap={2}>
        <Text color="#fff" align={"center"} fontSize={["sm"]}>
          Grupo do campeonato:
        </Text>
        <Link
          textDecoration={"none"}
          href={urlWhatsApp}
          _hover={{ textDecoration: "none" }}
          isExternal
        >
          <IconContext.Provider value={{ color: "#fff", size: "2em" }}>
            <FaWhatsapp />
          </IconContext.Provider>
        </Link>
      </Flex>
      <Flex direction={"column"} align="center" py={4}>
        <Link
          textDecoration={"none"}
          href={urlRegistration}
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
  );
};
