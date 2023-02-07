import React from "react";
import { Box, Image, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

const animationKeyframes = keyframes`
  0% { transform: rotate(0); }
  50% { transform:  rotate(180deg);  }
  100% { transform:  rotate(360deg);  }
`;

const animation = `${animationKeyframes} 4s linear infinite`;

export const AnimatedWheel = () => {
  return (
    <Box as={motion.div} animation={animation}>
      <Image src="/misc/gt3.png" alt="wheel" width={"12"} />
    </Box>
  );
};
