const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("../config/bvr-data-0c17de47c963.json");
const doc = new GoogleSpreadsheet(
  "1HlxiNHOn4As6Qrdy_EkYEsbNdAxa-Fy9KspHEuk6QUw"
);

import { GS_LicenseProps } from "@/components/LicensesList_GSData/types";

export async function getLicenses() {
  try {
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle["licenses"];

    const rows: GS_LicenseProps[] = await sheet.getRows();
    const driversLicenses: GS_LicenseProps[] = rows.map((row: any) => {
      return {
        idLicense: row.idLicense || "",
        color: row.color || "",
        id: row.id || "",
        name: row.name || "",
        idPsn: row.idPsn || "",
      };
    });

    return driversLicenses;
  } catch (error) {
    console.log(error);
  }
}
