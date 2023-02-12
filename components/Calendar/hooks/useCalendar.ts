import { useMemo } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export const useCalendar = () => {
  const calendar = useMemo(
    () => [
      {
        id: 1,
        date: "16/02/2023",
        start: "21h00",
        title: "3ª Etapa - JGTC 90s",
        text: "Suzuka Circuit",
        icon: FaYoutube,
      },
      {
        id: 2,
        date: "23/02/2023",
        start: "21h00",
        title: "4ª Etapa - JGTC 90s",
        text: "Dragon Trail Jardins",
        icon: FaYoutube,
      },
      {
        id: 3,
        date: "02/03/2023",
        start: "21h00",
        title: "5ª Etapa - JGTC 90s",
        text: "Autopolis International",
        icon: FaYoutube,
      },
      {
        id: 4,
        date: "09/03/2023",
        start: "21h00",
        title: "6ª Etapa - JGTC 90s",
        text: "Red Bull Ring",
        icon: FaYoutube,
      },
      {
        id: 5,
        date: "16/03/2023",
        start: "21h00",
        title: "7ª Etapa - JGTC 90s",
        text: "Autopolis International",
        icon: FaYoutube,
      },
      {
        id: 6,
        date: "23/03/2023",
        start: "21h00",
        title: "8ª Etapa - JGTC 90s",
        text: "Spa-francorchamps",
        icon: FaYoutube,
      },
    ],
    []
  );

  return {
    calendar,
  };
};
