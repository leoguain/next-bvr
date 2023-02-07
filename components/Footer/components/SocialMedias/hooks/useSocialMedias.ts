import { useMemo } from "react";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export const useSocialMedias = () => {
  const socialMedias = useMemo(
    () => [
      {
        id: "facebook",
        title: "Siga-nos no Facebook.",
        href: "https://facebook.com/ligabvr",
        icon: FaFacebookSquare,
      },
      {
        id: "instagram",
        title: "Siga-nos no Instagram.",
        href: "https://instagram.com/ligabvr",
        icon: FaInstagramSquare,
      },
      {
        id: "whatsapp",
        title: "Entrar em contato por WhatsApp",
        text: "WHATSAPP!",
        subtext: "(11) 96618-1605",
        href: "https://chat.whatsapp.com/IzSEu4iFeq2DxmauUrfebh",
        icon: FaWhatsapp,
      },
      {
        id: "youtube",
        title: "Acompanhe nosso canal no Youtube.",
        href: "https://youtube.com/c/bvgtv",
        icon: FaYoutube,
      },
    ],
    []
  );

  return {
    socialMedias,
  };
};
