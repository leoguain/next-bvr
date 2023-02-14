import React from "react";
import { Flex, Text } from "@chakra-ui/react";

import { IconContext } from "react-icons";
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";

import { When } from "../shared/When";

import { CalendarProps } from "./types";

export const Calendar = ({ calendar }: CalendarProps) => {
  return (
    <React.Fragment>
      <Flex
        justifyContent="space-between"
        flexDirection={["column"]}
        gap={2}
        py={4}
        align="center"
        bg={"rgba(18, 18, 18, 0.9)"}
        maxH="xs"
        maxW={"sm"}
        mb={4}
      >
        <Text color={"primary.500"} borderBottom="2px" mb={4}>
          Próximos eventos
        </Text>

        <Flex
          direction={"column"}
          gap={4}
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
          <IconContext.Provider value={{ color: "#fff" }}>
            {calendar.map(({ id, date, start, title, text, icon }) => (
              <Flex key={id} align="center" gap={6} px={2}>
                <Flex direction={"column"} align="center">
                  <Text color={"primary.500"}>{date}</Text>
                  <Text color={"primary.500"} fontSize="sm">
                    {start}
                  </Text>
                </Flex>
                <Flex direction={"column"}>
                  <Text color={"primary.500"}>{title}</Text>
                  <Text color={"primary.500"} fontSize="sm">
                    {text}
                  </Text>
                </Flex>

                <When value={icon === "youtube"}>
                  <FaYoutube size={"1.5em"} />
                </When>
                <When value={icon === "instagram"}>
                  <FaInstagramSquare size={"1.5em"} />
                </When>
              </Flex>
            ))}
          </IconContext.Provider>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};
