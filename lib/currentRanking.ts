const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("../config/bvr-data-0c17de47c963.json");
const doc = new GoogleSpreadsheet(
  "1HlxiNHOn4As6Qrdy_EkYEsbNdAxa-Fy9KspHEuk6QUw"
);

import { RankingProps, GS_CRProps } from "@/components/CurrentRanking/types";

export async function getCurrentRanking() {
  try {
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();

    const sheetRace = doc.sheetsByTitle["lastRace"];
    const sheetGeral = doc.sheetsByTitle["currentRanking"];
    const sheetInfo = doc.sheetsByTitle["currentInfo"];

    const rowsRace: GS_CRProps[] = await sheetRace.getRows();
    const rowsGeral = await sheetGeral.getRows();

    var orderPrincipal = [...rowsRace];
    orderPrincipal.sort((a: any, b: any) => a.posMain - b.posMain);

    const principal = orderPrincipal.map((row: any) => {
      return {
        pos: row.posMain || "",
        driver: row.driver || "",
        idPsn: row.id || "",
        team: "",
        penal: row.penalMain || 0,
        total: row.pointsMain || "",
      };
    });

    var orderSprint = [...rowsRace];
    orderSprint.sort((a: any, b: any) => a.posSprint - b.posSprint);

    const sprint = orderSprint.map((row: any) => {
      return {
        pos: row.posSprint || "",
        driver: row.driver || "",
        idPsn: row.id || "",
        team: "",
        penal: row.penalSprint || 0,
        total: row.pointsSprint || "",
      };
    });

    const geral = rowsGeral.map((row: any) => {
      return {
        pos: row.pos || "",
        driver: row.driver || "",
        idPsn: row.id || "",
        team: "",
        penal: 0,
        total: row.total || "",
      };
    });

    await sheetInfo.loadCells("A1:B11");

    const cRanking: RankingProps[] = [
      {
        championship: sheetInfo.getCellByA1("B1").value || "",
        year: sheetInfo.getCellByA1("B2").value || "",
        logo: sheetInfo.getCellByA1("B3").value || "",
        colors: {
          bkg: sheetInfo.getCellByA1("B4").value || "",
          head: sheetInfo.getCellByA1("B5").value || "",
          row: sheetInfo.getCellByA1("B6").value || "",
          txt: sheetInfo.getCellByA1("B7").value || "",
        },
        geral: geral,
        principal: principal,
        sprint: sprint,
        status: sheetInfo.getCellByA1("B10").value || "",
        date: sheetInfo.getCellByA1("B9").value || "",
        numberRace: sheetInfo.getCellByA1("B8").value || "",
      },
    ];

    return cRanking;
  } catch (error) {
    console.log(error);
  }
}
