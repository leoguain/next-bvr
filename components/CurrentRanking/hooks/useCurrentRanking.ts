import { useMemo } from "react";

export const useCurrentRanking = () => {
  const currentRanking = useMemo(
    () => [
      {
        championship: "JGTC 90s 2023",
        year: "2023",
        logo: "/cupLogos/JGTClogo.png",
        colors: {
          bkg: "#000",
          head: "#bc0202",
          row: "#5b5b5b",
          txt: "white",
        },
        geral: [
          {
            pos: "1",
            driver: "José Luiz de O Neto",
            idPsn: "TBR_ZELUIZ87",
            total: 87,
          },
          {
            pos: "2",
            driver: "José Eduardo F Filho",
            idPsn: "Dudu_fiel10",
            total: 83,
          },
          {
            pos: "3",
            driver: "Luan Muniz",
            idPsn: "KMZ_Luan_Muniz89",
            total: 65,
          },
          {
            pos: "4",
            driver: "JP Facci",
            idPsn: "JPFACCI_SPEEDBR",
            total: 61,
          },
          {
            pos: "5",
            driver: "Marcelo Mendes",
            idPsn: "KMZ_MarceloMB",
            total: 60,
          },
          {
            pos: "6",
            driver: "Ednaldo Martins",
            idPsn: "KMZ_Naldo",
            total: 49,
          },
          {
            pos: "7",
            driver: "Rodrigo Dionizio",
            idPsn: "KmZRodrigo",
            total: 42,
          },
          {
            pos: "8",
            driver: "Gerson Garcia",
            idPsn: "Gersão Hamilton",
            total: 41,
          },
          {
            pos: "9",
            driver: "Fabiano Furini",
            idPsn: "FURINI_SPEEDBR",
            total: 18,
          },
          {
            pos: "10",
            driver: "Carlos Godoy",
            idPsn: "MF2_TattoBrown",
            total: 14,
          },
          {
            pos: "11",
            driver: "Rodrigo Furtile",
            idPsn: "Apex_Furtile",
            total: 13,
          },
          {
            pos: "12",
            driver: "Ricardo Pavanelli",
            idPsn: "MF2_Pava",
            total: 12,
          },
          {
            pos: "13",
            driver: "Cristiano Dutra",
            idPsn: "CCGTBR_Cristiano",
            total: 11,
          },
          {
            pos: "14",
            driver: "Paulo Tureck",
            idPsn: "TURECK_SPEEDBR",
            total: 9,
          },
        ],
        principal: [
          {
            pos: "1",
            driver: "José Eduardo F Filho",
            idPsn: "Dudu_fiel10",
            total: 40,
          },
          {
            pos: "2",
            driver: "José Luiz de O Neto",
            idPsn: "TBR_ZELUIZ87",
            total: 34,
          },
          {
            pos: "3",
            driver: "JP Facci",
            idPsn: "JPFACCI_SPEEDBR",
            total: 29,
          },
          {
            pos: "4",
            driver: "Marcelo Mendes",
            idPsn: "KMZ_MarceloMB",
            total: 25,
          },
          {
            pos: "5",
            driver: "Gerson Garcia",
            idPsn: "Gersão Hamilton",
            total: 22,
          },
          {
            pos: "6",
            driver: "Ednaldo Martins",
            idPsn: "KMZ_Naldo",
            total: 19,
          },
          {
            pos: "7",
            driver: "Rodrigo Dionizio",
            idPsn: "KmZRodrigo",
            total: 16,
          },
          {
            pos: "8",
            driver: "Luan Muniz",
            idPsn: "KMZ_Luan_Muniz89",
            total: 13,
          },
          {
            pos: "9",
            driver: "Fabiano Furini",
            idPsn: "FURINI_SPEEDBR",
            total: 10,
          },

          {
            pos: "10",
            driver: "Paulo Tureck",
            idPsn: "TURECK_SPEEDBR",
            total: 8,
          },
          {
            pos: "11",
            driver: "Carlos Godoy",
            idPsn: "MF2_TattoBrown",
            total: 6,
          },
          {
            pos: "12",
            driver: "Cristiano Dutra",
            idPsn: "CCGTBR_Cristiano",
            total: 4,
          },
          {
            pos: "NP",
            driver: "Rodrigo Furtile",
            idPsn: "Apex_Furtile",
            total: 0,
          },
          {
            pos: "NP",
            driver: "Ricardo Pavanelli",
            idPsn: "MF2_Pava",
            total: 0,
          },
        ],
        sprint: [
          {
            pos: "1",
            driver: "José Luiz de O Neto",
            idPsn: "TBR_ZELUIZ87",
            total: 10,
          },
          {
            pos: "2",
            driver: "Luan Muniz",
            idPsn: "KMZ_Luan_Muniz89",
            total: 9,
          },
          {
            pos: "3",
            driver: "JP Facci",
            idPsn: "JPFACCI_SPEEDBR",
            total: 8,
          },
          {
            pos: "4",
            driver: "Rodrigo Dionizio",
            idPsn: "KmZRodrigo",
            total: 7,
          },
          {
            pos: "5",
            driver: "Marcelo Mendes",
            idPsn: "KMZ_MarceloMB",
            total: 6,
          },
          {
            pos: "6",
            driver: "Fabiano Furini",
            idPsn: "FURINI_SPEEDBR",
            total: 5,
          },
          {
            pos: "7",
            driver: "José Eduardo F Filho",
            idPsn: "Dudu_fiel10",
            total: 4,
          },
          {
            pos: "8",
            driver: "Gerson Garcia",
            idPsn: "Gersão Hamilton",
            total: 3,
          },
          {
            pos: "9",
            driver: "Carlos Godoy",
            idPsn: "MF2_TattoBrown",
            total: 2,
          },

          {
            pos: "10",
            driver: "Cristiano Dutra",
            idPsn: "CCGTBR_Cristiano",
            total: 1,
          },
          {
            pos: "11",
            driver: "Ednaldo Martins",
            idPsn: "KMZ_Naldo",
            total: 0,
          },
          {
            pos: "NP",
            driver: "Paulo Tureck",
            idPsn: "TURECK_SPEEDBR",
            total: 0,
          },
          {
            pos: "NP",
            driver: "Rodrigo Furtile",
            idPsn: "Apex_Furtile",
            total: 0,
          },
          {
            pos: "NP",
            driver: "Ricardo Pavanelli",
            idPsn: "MF2_Pava",
            total: 0,
          },
        ],
      },
    ],
    []
  );

  return {
    currentRanking,
  };
};
