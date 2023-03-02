const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("../config/bvr-data-0c17de47c963.json");
const doc = new GoogleSpreadsheet(
  "1HlxiNHOn4As6Qrdy_EkYEsbNdAxa-Fy9KspHEuk6QUw"
);

import { EventProps } from "@/components/Calendar/types";

export async function getCalendar() {
  try {
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[1];

    const rows: EventProps[] = await sheet.getRows();
    const schedule: EventProps[] = rows.map((row: any) => {
      return {
        id: row.id || "",
        date: row.date || "",
        start: row.start || "",
        title: row.title || "",
        text: row.text || "",
        icon: row.icon || "",
        status: row.status || "",
      };
    });

    return schedule;
  } catch (error) {
    console.log(error);
  }
}
