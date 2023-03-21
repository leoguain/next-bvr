const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("../config/bvr-data-0c17de47c963.json");
const doc = new GoogleSpreadsheet(
  "1HlxiNHOn4As6Qrdy_EkYEsbNdAxa-Fy9KspHEuk6QUw"
);

import { RegistrationProps } from "@/components/Registrations/types";

export async function getRegistrations() {
  try {
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle["inscricoes"];

    const rows: RegistrationProps[] = await sheet.getRows();
    const allRegistrations: RegistrationProps[] = rows.map((row: any) => {
      return {
        id: row.id || "",
        championship: row.championship || "",
        date: row.date || "",
        time: row.time || "",
        rounds: row.rounds || "",
        game: row.game || "",
        platform: row.platform || "",
        logo: row.logo || "",
        statute: row.statute || "",
        urlRegistration: row.urlRegistration || "",
        urlWhatsApp: row.urlWhatsApp || "",
      };
    });

    return allRegistrations;
  } catch (error) {
    console.log(error);
  }
}
