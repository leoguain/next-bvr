const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("../config/bvr-data-0c17de47c963.json");
const doc = new GoogleSpreadsheet(
  "1HlxiNHOn4As6Qrdy_EkYEsbNdAxa-Fy9KspHEuk6QUw"
);

import { RankingProps } from "@/components/CurrentRanking/types";

export async function getCurrentRanking() {
  try {
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();

    const sheetRace = doc.sheetsByIndex[5];
    const sheetGeral = doc.sheetsByIndex[6];

    //const statusRace = await sheetRace.getRange("O2").getValue();

    const rowsRace = await sheetRace.getRows();
    const rowsGeral = await sheetGeral.getRows();

    var orderPrincipal = [...rowsRace];
    orderPrincipal.sort((a, b) => a.posMain - b.posMain);

    const principal = orderPrincipal.map((row: any) => {
      return {
        pos: row.posMain || "",
        driver: row.driver || "",
        idPsn: row.id || "",
        team: "",
        total: row.pointsMain || "",
      };
    });

    var orderSprint = [...rowsRace];
    orderSprint.sort((a, b) => a.posSprint - b.posSprint);

    const sprint = orderSprint.map((row: any) => {
      return {
        pos: row.posSprint || "",
        driver: row.driver || "",
        idPsn: row.id || "",
        team: "",
        total: row.pointsSprint || "",
      };
    });

    const geral = rowsGeral.map((row: any) => {
      return {
        pos: row.pos || "",
        driver: row.driver || "",
        idPsn: row.id || "",
        team: "",
        total: row.total || "",
      };
    });

    const cRanking: RankingProps[] = [
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
        geral: geral,
        principal: principal,
        sprint: sprint,
        status: "ok",
        date: "06/03/2023",
        numberRace: "5",
      },
    ];

    return cRanking;
  } catch (error) {
    console.log(error);
  }
}
