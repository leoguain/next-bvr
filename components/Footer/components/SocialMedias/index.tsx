import React from "react";
import { Flex, Box, Text, Link, Icon, Tooltip } from "@chakra-ui/react";

import { IconContext } from "react-icons";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

import { useSocialMedias } from "./hooks/useSocialMedias";

export const SocialMedias = () => {
  const { socialMedias } = useSocialMedias();

  return (
    <React.Fragment>
      <Flex
        justifyContent="space-between"
        flexDirection={["column"]}
        gap={2}
        my={4}
        align="center"
        color={"secondary.500"}
      >
        <Text color={"secondary.500"}>Conheça a Brasil Virtual Racing</Text>

        <Flex gap={8}>
          <IconContext.Provider value={{ color: "secondary.500" }}>
            {socialMedias.map(({ id, title, href, icon }) => (
              <React.Fragment key={id}>
                <Tooltip label={title}>
                  <Link href={href} isExternal>
                    <Icon as={icon} boxSize={"3em"} />
                  </Link>
                </Tooltip>
              </React.Fragment>
            ))}
          </IconContext.Provider>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};
