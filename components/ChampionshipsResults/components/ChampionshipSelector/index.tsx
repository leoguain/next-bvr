import React, { useState, useCallback, useRef } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { useChampionships } from "../../hooks/useChampionships";
import { ChampionshipProps } from "../../types";

import { ChampionshipData } from "../ChampionshipData";
import { ChampionshipDataMobile } from "../ChampionshipDataMobile";
import { When } from "../../../shared/When";

export const ChampionshipSelector = () => {
  const { championships, isMobile } = useChampionships();

  const ref = useRef<null | HTMLDivElement>(null);

  const [activeCup, setActiveCup] = useState(championships[0]);
  const handleCupClick = useCallback((championship: ChampionshipProps) => {
    setActiveCup(championship);

    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <React.Fragment>
      <Accordion allowToggle bg={"rgba(18, 18, 18, 0.7)"} borderColor="#000">
        <AccordionItem>
          <AccordionButton justifyContent={"space-between"}>
            <Text color={"primary.500"} fontSize="lg" mt={4}>
              Escolha o campeonato desejado:
            </Text>
            <AccordionIcon boxSize={8} color="#fff" />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Flex
              p={4}
              borderRadius="lg"
              gap={[2, 8]}
              justifyContent="center"
              flexFlow={"row wrap"}
            >
              {championships.map((championship) => (
                <React.Fragment key={championship.id}>
                  <Image
                    alt="logo do campeonato"
                    src={championship.logo}
                    borderRadius="lg"
                    border="2px"
                    borderColor={"transparent"}
                    cursor={"pointer"}
                    _hover={{ borderColor: "#fff" }}
                    onClick={() => {
                      handleCupClick(championship);
                    }}
                  />
                </React.Fragment>
              ))}
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Flex ref={ref} justifyContent="center" pt={16}>
        <When value={isMobile}>
          {activeCup && <ChampionshipDataMobile {...activeCup} />}
        </When>
        <When value={!isMobile}>
          {activeCup && <ChampionshipData {...activeCup} />}
        </When>
      </Flex>
    </React.Fragment>
  );
};

/*

<Box m={4} p={4} borderRadius="lg" justifyContent="center">
        <Text align={"center"} color={"primary.500"} fontSize="lg" mt={4}>
          Escolha o campeonato desejado:
        </Text>
        <Flex
          p={4}
          borderRadius="lg"
          gap={[2, 8]}
          justifyContent="center"
          flexFlow={"row wrap"}
        >
          {championships.map((championship) => (
            <React.Fragment key={championship.id}>
              <Image
                alt="logo do campeonato"
                src={championship.logo}
                borderRadius="lg"
                border="2px"
                borderColor={"transparent"}
                cursor={"pointer"}
                _hover={{ borderColor: "#fff" }}
                onClick={() => {
                  handleCupClick(championship);
                }}
              />
            </React.Fragment>
          ))}
        </Flex>
      </Box>


      */
