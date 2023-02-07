import React from "react";
import NextLink from "next/link";

import {
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

import { RxHamburgerMenu } from "react-icons/rx";

import { When } from "../../../shared/When";

import { MenuProps } from "../../types";

export const MobileMenu = ({ items }: MenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <React.Fragment>
      <IconButton
        aria-label="Main menu"
        icon={<RxHamburgerMenu size={28} />}
        bg="secondary.500"
        color="primary.500"
        onClick={onOpen}
        size="lg"
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        returnFocusOnClose={false}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent bg="#181818">
          <DrawerCloseButton bg="secondary.500" color="#fff" />
          <DrawerHeader mb={4} />
          <DrawerBody display="flex" flexDir="column">
            <Accordion allowMultiple>
              {items.map(({ id, href, subItems }) => (
                <React.Fragment key={id}>
                  <When value={!!subItems.length}>
                    <AccordionItem borderColor={"secondary.500"}>
                      {({ isExpanded }) => (
                        <React.Fragment>
                          <AccordionButton
                            flex="1"
                            textAlign="left"
                            justifyContent={"space-between"}
                            color="secondary.500"
                            _hover={{
                              color: "primary.500",
                            }}
                          >
                            {id}
                            {isExpanded ? (
                              <CloseIcon color="secondary.500" />
                            ) : (
                              <AddIcon color="secondary.500" />
                            )}
                          </AccordionButton>

                          <AccordionPanel pb={4}>
                            {subItems.map(({ id, href }) => (
                              <NextLink
                                key={id}
                                href={href}
                                passHref
                                scroll={false}
                              >
                                <AccordionButton
                                  as="span"
                                  flex="1"
                                  textAlign="left"
                                  color={"secondary.500"}
                                  _hover={{
                                    color: "primary.500",
                                    cursor: "pointer",
                                  }}
                                  onClick={onClose}
                                >
                                  {id}
                                </AccordionButton>
                              </NextLink>
                            ))}
                          </AccordionPanel>
                        </React.Fragment>
                      )}
                    </AccordionItem>
                  </When>

                  <When value={!subItems.length}>
                    <NextLink key={id} href={href} passHref scroll={false}>
                      <AccordionItem borderColor={"secondary.500"}>
                        <AccordionButton
                          as="span"
                          flex="1"
                          textAlign="left"
                          color="secondary.500"
                          _hover={{ color: "primary.500" }}
                          onClick={onClose}
                        >
                          {id}
                        </AccordionButton>
                      </AccordionItem>
                    </NextLink>
                  </When>
                </React.Fragment>
              ))}
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};
