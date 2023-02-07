import React from "react";
import { When } from "../../../../components/shared/When";
import { Link, Text } from "@chakra-ui/react";

import { CPProps } from "../../types";

export const CompoundParagraph = ({ paragraphs }: CPProps) => {
  return (
    <React.Fragment>
      {paragraphs.map(({ id, type, text, path }) => (
        <React.Fragment key={id}>
          <When value={type === "paragraph"}>
            <Text as="span" color={"#000"} fontSize={["md"]}>
              {text}
            </Text>
          </When>

          <When value={type === "paragraphN"}>
            <Text as="b" color={"#000"} fontSize={["md"]}>
              {text}
            </Text>
          </When>

          <When value={type === "paragraphI"}>
            <Text as="i" color={"#000"} fontSize={["md"]}>
              {text}
            </Text>
          </When>

          <When value={type === "paragraphU"}>
            <Text as="u" color={"#000"} fontSize={["md"]}>
              {text}
            </Text>
          </When>

          <When value={type === "link"}>
            <Link color="secondary.500" fontWeight="normal" href={path}>
              {text}
            </Link>
          </When>

          <When value={type === "linkEx"}>
            <Link
              color="secondary.500"
              fontWeight="normal"
              href={path}
              isExternal
            >
              {text}
            </Link>
          </When>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};
