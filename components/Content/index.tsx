import React from "react";
import ToTopButton from "../ToTopButton";
import { Flex, FlexProps } from "@chakra-ui/react";

export const Content = ({ children, ...rest }: FlexProps) => {
  return (
    <Flex
      backgroundImage={"/bkg/bkg_02.jpg"}
      backgroundAttachment="fixed"
      backgroundSize="cover"
      backgroundPosition={"center"}
    >
      <Flex
        w="100%"
        maxWidth={"7xl"}
        mx="auto"
        px={4}
        direction="column"
        {...rest}
      >
        <React.Fragment>
          <ToTopButton />
          {children}
        </React.Fragment>
      </Flex>
    </Flex>
  );
};
