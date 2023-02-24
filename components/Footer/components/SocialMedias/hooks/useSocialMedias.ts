import { useMemo } from "react";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsapp,
  FaYoutube,
  FaTwitter,
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
        id: "twitter",
        title: "Siga-nos no Twitter.",
        href: "https://twitter.com/LigaBVR_Oficial",
        icon: FaTwitter,
      },
      {
        id: "whatsapp",
        title: "Entrar em contato por WhatsApp",
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
