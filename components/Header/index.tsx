import React from "react";
import { Flex, HStack, Image } from "@chakra-ui/react";

import Link from "next/link";
import { useHeader } from "./hooks/useHeader";

import { When } from "../shared/When";
import { MobileMenu } from "./components/MobileMenu";
import { DesktopMenu } from "./components/DesktopMenu";
import { AnimatedWheel } from "./components/AnimatedWheel";

export const Header = () => {
  const { menuItems, isMobile } = useHeader();

  return (
    <React.Fragment>
      <Flex
        position="sticky"
        top="0"
        left="0"
        right="0"
        zIndex="5"
        bg={"#181818"}
        w="100%"
        mx="auto"
        maxW={"7xl"}
        px={[4, 6, 6, 6, 14]}
        py={6}
        gap={[0, 2, 8]}
        justifyContent={["space-between"]}
        align="center"
        opacity={"0.8"}
        _hover={{ opacity: "1" }}
      >
        <Link href="/">
          <HStack>
            {" "}
            <AnimatedWheel />
            <Image src="/liga_bvr_gt_branco.png" alt="logo BVR" width={"28"} />
          </HStack>
        </Link>

        <Flex alignSelf="right">
          <When value={isMobile}>
            <MobileMenu items={menuItems} />
          </When>
          <When value={!isMobile}>
            <DesktopMenu items={menuItems} />
          </When>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};
