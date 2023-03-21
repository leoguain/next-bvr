const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("../config/bvr-data-0c17de47c963.json");
const doc = new GoogleSpreadsheet(
  "1HlxiNHOn4As6Qrdy_EkYEsbNdAxa-Fy9KspHEuk6QUw"
);

import { ChampionProps } from "@/components/ChampionsList/types";

export async function getChampions() {
  try {
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle["champions"];

    const rows: ChampionProps[] = await sheet.getRows();
    const allChampions: ChampionProps[] = rows.map((row: any) => {
      return {
        idUrl: row.idUrl || 0,
        url: row.url || "",
      };
    });

    return allChampions;
  } catch (error) {
    console.log(error);
  }
}
