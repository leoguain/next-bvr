import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { When } from "../../../../components/shared/When";

import { Box, List, ListItem, ListIcon } from "@chakra-ui/react";

import { ListProps } from "../../types";

import { CompoundParagraph } from "../CompoundParagraph";

export const IconTextList = ({ list }: ListProps) => {
  return (
    <Box>
      <List>
        {list.map(({ id, type, text, texts }) => (
          <React.Fragment key={id}>
            <When value={type === "cParagraph"}>
              <ListItem>
                <ListIcon as={HiChevronRight} />
                <CompoundParagraph paragraphs={texts} />
              </ListItem>
            </When>

            <When value={type === "paragraph"}>
              <ListItem>
                <ListIcon as={HiChevronRight} />
                {text}
              </ListItem>
            </When>

            <When value={type === "paragraphN"}>
              <ListItem fontWeight={"bold"}>
                <ListIcon as={HiChevronRight} />
                {text}
              </ListItem>
            </When>

            <When value={type === "cParagraph-1"}>
              <ListItem pl={4}>
                <ListIcon as={HiChevronRight} />
                <CompoundParagraph paragraphs={texts} />
              </ListItem>
            </When>

            <When value={type === "paragraph-1"}>
              <ListItem pl={4}>
                <ListIcon as={HiChevronRight} />
                {text}
              </ListItem>
            </When>

            <When value={type === "listItem"}>
              <ListItem>
                <ListIcon as={HiChevronRight} />
                {text}
              </ListItem>
            </When>

            <When value={type === "listItem-1"}>
              <ListItem pl={4}>
                <ListIcon as={HiChevronRight} />
                {text}
              </ListItem>
            </When>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};
