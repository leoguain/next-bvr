import React from "react";
import ToTopButton from "../ToTopButton";
import { Flex, FlexProps } from "@chakra-ui/react";
import AdsComponent from "../AdsComponent";

export const Content = ({ children, ...rest }: FlexProps) => {
  return (
    <Flex
      backgroundImage={"/bkg/bkg_02.jpg"}
      backgroundAttachment="fixed"
      backgroundPosition={"center"}
      backgroundSize="cover"
      direction="column"
    >
      <Flex
        w="100%"
        maxWidth={"7xl"}
        mx="auto"
        px={4}
        direction="column"
        minH={"md"}
        {...rest}
      >
        <React.Fragment>
          <ToTopButton />
          {children}
        </React.Fragment>
      </Flex>

      <Flex w="100%" maxWidth={"7xl"} mx="auto" px={4}>
        <AdsComponent dataAdSlot="8734328966" />
      </Flex>
    </Flex>
  );
};
