import React from "react";
import { Flex } from "@chakra-ui/react";

import { UniqueRecordProps } from "../../types";
import { RecordField } from "../RecordField";

export const RecordBox = ({ record }: UniqueRecordProps) => {
  return (
    <Flex
      key={record.championship}
      gap={2}
      align="center"
      borderBottom="2px"
      borderColor={"#fff"}
      direction={["column", "column", "column", "row"]}
      mb={[8]}
    >
      <Flex
        justifyContent={"center"}
        borderBottom={["1px", "1px", "1px", "0px"]}
        borderColor={["#fff", "#fff", "#fff"]}
        mt={[0, 0, 0, 2]}
        py={[2, 2, 2, 0]}
        align="center"
      >
        <RecordField
          topLabel="Categoria"
          title={record.category}
          bottomLabel={record.platform}
          type="box"
          darken
        />
        <RecordField
          topLabel="Campeonato"
          title={record.championship}
          bottomLabel={record.year}
          type="box"
        />
      </Flex>

      <Flex direction={"column"}>
        <RecordField
          topLabel="Pole Position"
          title={record.driverPole}
          bottomLabel={record.timePole}
          type="row"
          darken
        />
        <RecordField
          topLabel="VMR"
          title={record.driverVMR}
          bottomLabel={record.timeVMR}
          type="row"
        />
      </Flex>
    </Flex>
  );
};
