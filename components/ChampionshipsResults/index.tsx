import React, { useState, useCallback, useRef } from "react";
import {
  Flex,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { ChampionshipProps, ChampionshipsProps } from "./types";

import { ChampionshipData } from "./components/ChampionshipData";
import { ChampionshipDataMobile } from "./components/ChampionshipDataMobile";
import { When } from "../shared/When";

import { XL_BREAKPOINT } from "../../lib/constants";
import { useWindowSize } from "../../hooks/useWindowsSize";

export const ChampionshipResults = ({ championships }: ChampionshipsProps) => {
  const { width } = useWindowSize();
  const isMobile = width < XL_BREAKPOINT;

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
                <Image
                  key={championship.id}
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
