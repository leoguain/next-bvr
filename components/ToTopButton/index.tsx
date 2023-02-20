import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Flex, Tooltip } from "@chakra-ui/react";
import { lighten } from "polished";

const ToTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Flex
      position={"fixed"}
      bottom={["20px", "60px", "60px", "80px"]}
      right={["20px", "20px", "40px", "40px"]}
      zIndex="20"
    >
      {showTopBtn && (
        <IconContext.Provider value={{ color: lighten(0.2, "#149b49") }}>
          <Tooltip label="Voltar ao topo">
            <FaArrowCircleUp cursor={"pointer"} onClick={goToTop} size="3em" />
          </Tooltip>
        </IconContext.Provider>
      )}
    </Flex>
  );
};
export default ToTopButton;
