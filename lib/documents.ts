const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("../config/bvr-data-0c17de47c963.json");
const doc = new GoogleSpreadsheet(
  "1HlxiNHOn4As6Qrdy_EkYEsbNdAxa-Fy9KspHEuk6QUw"
);

import { DocumentProps } from "@/components/DocumentsList/types";

export async function getDocuments() {
  try {
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle["documents"];

    const rows: DocumentProps[] = await sheet.getRows();
    const allDocs: DocumentProps[] = rows.map((row: any) => {
      return {
        idDoc: row.idDoc || "",
        title: row.title || "",
        type: row.type || "",
        logo: row.logo || "",
        url: row.url || "",
      };
    });

    return allDocs;
  } catch (error) {
    console.log(error);
  }
}
