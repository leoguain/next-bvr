import React from "react";

import { Box, Flex } from "@chakra-ui/react";

import { ColumnsProps } from "../../types";
import { PageConstructor } from "../..";

export const Columns = ({ columns }: ColumnsProps) => {
  return (
    <Flex
      maxWidth={"7xl"}
      mx="auto"
      my={2}
      gap={[2, 4, 4, 4, 8]}
      flexDirection={["column", "column", "column", "row"]}
      align={["center", "center", "center", "start"]}
      justifyContent="center"
    >
      {columns.map(({ id, texts }) => (
        <React.Fragment key={id}>
          <Box flex={1}>
            <PageConstructor text={texts} />
          </Box>
        </React.Fragment>
      ))}
    </Flex>
  );
};
