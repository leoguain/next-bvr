import { useMemo } from "react";

import { MOBILE_BREAKPOINT } from "../../../lib/constants";

import { useWindowSize } from "../../../hooks/useWindowsSize";

export const useHeader = () => {
  const { width } = useWindowSize();

  const menuItems = useMemo(
    () => [
      {
        id: "Campeonatos",
        href: "/campeonatos",
        subItems: [],
      },
      {
        id: "Documentos",
        href: "/documentos",
        subItems: [],
      },
      {
        id: "Inscrições",
        href: "/inscricoes",
        subItems: [],
      },
      {
        id: "Notícias",
        href: "/noticias",
        subItems: [],
      },
      {
        id: "Pilotos",
        href: "#pilotos",
        subItems: [
          {
            id: "Carteiras",
            href: "/carteiras",
          },
          {
            id: "Estatísticas",
            href: "/pilotos",
          },
          {
            id: "Hall da Fama",
            href: "/hall-da-fama",
          },
        ],
      },
      {
        id: "Quem somos",
        href: "/quem-somos",
        subItems: [],
      },
      {
        id: "Recordes",
        href: "/recordes",
        subItems: [],
      },
    ],
    []
  );

  const isMobile = width < MOBILE_BREAKPOINT;

  return {
    menuItems,
    isMobile,
  };
};
