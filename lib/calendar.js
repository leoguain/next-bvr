const { GoogleSpreadsheet } = require("google-spreadsheet");
// credentials you have generated when creating the service account. TIP: DO NOT check this into your Git repo and it to your .gitignore file
const creds = require("../config/bvr-data-0c17de47c963.json");

// Create a document object using the ID of the spreadsheet - obtained from its URL.
const doc = new GoogleSpreadsheet("1HlxiNHOn4As6Qrdy_EkYEsbNdAxa-Fy9KspHEuk6QUw");

export async function getCalendar() {
  try {
    // google sheets
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[1]; // or use doc.sheetsById[id] -- get first sheet in the document

    const rows = await sheet.getRows(); // return the rows from the 1st sheet
    const allNews = rows.map((row) => {
      // return the data for each video (or whatever each row is in your sheet)
      return {
        id: row.id,
        date: row.date,
        start: row.start,
        title: row.title,
        text: row.text,
        icon: row.icon,
        status: row.status,
      };
    });
    // this returns the videos
    return allNews;
  } catch (error) {
    //   log any errors to the console
    console.log(error);
  }
}