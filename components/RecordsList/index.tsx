import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

import { RecordListProps, RecordProps } from "./types";
import { RecordBox } from "./components/RecordBox";

export const RecordsList = ({ tracks }: RecordListProps) => {
  function groupBy(list: any, keyGetter: any) {
    const map = new Map();
    list.forEach((item: any) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }

  var tracksArray: any[] = new Array();
  const grouped = groupBy(tracks, (track: any) => track.track);

  function logMapElements(value: RecordProps, key: any) {
    tracksArray.push({ key });
  }

  grouped.forEach(logMapElements);

  return (
    <Flex
      direction={"column"}
      bg={"rgba(18, 18, 18, 0.7)"}
      gap={4}
      mt={2}
      p={8}
    >
      <Text
        align={"center"}
        color={"primary.500"}
        fontSize={["md", "lg"]}
        mt={2}
        pb={4}
        borderBottom="2px"
      >
        Confira os recordes de pole position e VMR dos nossos campeonatos.
      </Text>
      <Flex
        alignSelf={"center"}
        direction={"column"}
        justifyContent="center"
        mt={12}
        gap={4}
      >
        {tracksArray.map((track) => (
          <Flex key={track.key} m={2} align="center" justifyContent={"center"}>
            <Box px={2}>
              <Text
                bg={"secondary.500"}
                px={2}
                color="#fff"
                fontSize={["md", "md", "md", "xl"]}
              >
                {track.key}
              </Text>

              {grouped.get(track.key).map((row: any) => (
                <RecordBox
                  key={row.records[0].championship}
                  record={row.records[0]}
                />
              ))}
            </Box>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
