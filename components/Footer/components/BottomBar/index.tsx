import { Text, Box } from "@chakra-ui/react";

export const BottomBar = () => {
  return (
    <Box bg="secondary.500" w="100%" mx="auto" my="auto">
      <Text color="primary.500" fontSize={["sm"]} py={4} align="center">
        © 2023 Brasil Virtual Racing - LG Team | Todos os direitos reservados
      </Text>
    </Box>
  );
};
