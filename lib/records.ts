const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("../config/bvr-data-0c17de47c963.json");
const doc = new GoogleSpreadsheet(
  "1HlxiNHOn4As6Qrdy_EkYEsbNdAxa-Fy9KspHEuk6QUw"
);

import { TrackProps, GS_Props } from "@/components/RecordsList/types";

export async function getRecords() {
  try {
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle["records"];

    const rows: GS_Props[] = await sheet.getRows();
    const allRecords: TrackProps[] = rows.map((row: any) => {
      return {
        idRecord: row.id,
        track: row.track,
        records: [
          {
            championship: row.championship || "",
            year: row.year || "",
            platform: row.platform || "",
            category: row.category || "",
            date: row.date || "",
            idDriverPole: row.idPole || "",
            driverPole: row.driverPole || "",
            timePole: row.timePole || "",
            idDriverVMR: row.idVMR || "",
            driverVMR: row.driverVMR || "",
            timeVMR: row.timeVMR || "",
          },
        ],
      };
    });

    return allRecords;
  } catch (error) {
    console.log(error);
  }
}
