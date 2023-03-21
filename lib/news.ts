const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("../config/bvr-data-0c17de47c963.json");
const doc = new GoogleSpreadsheet(
  "1HlxiNHOn4As6Qrdy_EkYEsbNdAxa-Fy9KspHEuk6QUw"
);

import { NewsProps } from "@/components/News/types";

export async function getNews() {
  try {
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle["news"];

    const rows: NewsProps[] = await sheet.getRows();
    const allNews: NewsProps[] = rows.map((row: any) => {
      return {
        id: row.id || "",
        title: row.title || "",
        date: row.date || "",
        text: row.text || "",
        image: row.image || "",
        url: row.url || "",
      };
    });

    return allNews;
  } catch (error) {
    console.log(error);
  }
}
