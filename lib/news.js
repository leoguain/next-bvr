import { google } from "googleapis"

export default function getNews_GS() {

  try {
    const client = new google.auth.JWT(
      "bvr-datareader@bvr-data.iam.gserviceaccount.com", 
      null, 
      "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC54OetRuUx7mv/\nDX5F/VclR8I+R/MCNjxBR4ZG6B90aObETkys1MDdBVGe8RtquVRsUJ9fCHYvxvLw\nYnuE9cnNhYwmOvzyoJh0ybq8r0gAXmukheiwOy4BDTK6nHU2WPdw34mclLAQy3hO\nlfrZMyt/jxxb6yzguu0LY07iCVsKsWjSKSEj3Idgl4UzsRb1nWRSSSGV79v3kj2R\nhpD6VIIipDFZhXBozQqn61jsxWIcVbH4s8tfYDUSg2v63+MEPE6pJu3GVoNXMimh\n5301XXub7SOd27Pj4Sbn6cOn4So4kwKAEjwMfUUVM0Q+nGgvi7Xsq7vbkMNsPWyS\neACPPCVHAgMBAAECggEAA9PXQXCryIbtz18yQfOxBzH+lHS70shWHkwAPlaKS0Xb\ntqAcIRTycbqpzxmM5HozfFV+qqDMejhhCUUl4PuEr8g3thPR4Jcg/Iqo3zjGxUcs\ndUNSospdLKVebYxKN5fGZJsdxM0lAPuHmyqocy+EDkjenx/tGSWQOwNM/QePSd2L\nWhmJAa+6WoUEQyoMMBehaCvcJEwNDir6SGIRf76RFXvq9LBsRAMQ/QQjiSNQ3Tyb\n1jQasnGJ5/q1XjajhyBbgIuz/ZSKl/XMjzxEulv8gflnYQe+XyiLR8lBOS+RaNEr\nHPvAD7bk1SCyt6TKB+pJg1ro+kpuhpLrMRfBmREIDQKBgQDkt2y9IZkJ+5qlGiFD\nOvux34W3ZwjjWc+lMEesoW2rI3JRfG96qG2cVJrMQ0eOPSvgq8woNI7+2E2zF+VR\nWYpC1v3C/b0917+JQIEjqyMFhECKHaAipoznHONEK/wW3Pz958Iq1xlePY1AqC94\nkeDiuVqC0r3kK1mO1iHgpSuiawKBgQDQDUni+Itg5H2gzPWIxWJWYve2aawxMzzF\ndcLyCosOwk0DUTSCnbCHEMz7lYGfB8Omdr6uWbkmAS7sBovVVt6yNMQM2iPQc+V8\nbQEOlZHX4+cmXZbU4tu03r9b1OdVfW7DZ32uefmpL5GOSckY1jt8Gel9GT/7/e/E\nUE/sWX0XlQKBgQDE1FXwLgnWXYEotOQLR6dz3DjnLPSpM5FPR81m80W+EjM/jScj\nF++8qdLOFthtwJcSMsbvksu85cl4ZwgiijxCaWLZfCRwJEvhgnGgkJcDGF2yfuxg\n5ZQ9EM9Ey9WWl3fhyqF+3L4oLDBzhEnWKTSv6XPLQjHJOsVH92AQRBTZIQKBgQCO\ncJqmd23NX4IXRlvQUPsbk9RuofiPErpHonFejxNXfnWFkOI3jsieIEWG9XvyKjms\nTV4NNkaJm4PJek3gOQJs1a1n8y1T+RUj0+lGV+aq/VBzNt4eUFcFhP9UWvYq1J6x\nz7f/bWkdiQDJfwDcLUg6le8Cg/gHiXrPWADwGvCG5QKBgQCYJRcxHTvScfBkQQA0\nPH0VQZiu6a2gRezVXrqyX4LYwiqUaZi6z5puru1STX+zZFfASwd1ckHV3GLNb1QG\nalk8tvMjPst+GZRixvXtreUnAzx6DLQMcP6R3/Gk5MQ+ouYNY8DIHDx25IhXvYdm\nQqk1/J9k12vIqNLD6AVHXPJj6Q==\n-----END PRIVATE KEY-----\n", 
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    client.authorize(async function (err, tokens) {
      if(err){
        return res.status(400).send(JSON.stringify({error:true}))
      }

      const gsapi = google.sheets({version:"v4", auth:client})
      const opt = {
        spreadsheetId: "1HlxiNHOn4As6Qrdy_EkYEsbNdAxa-Fy9KspHEuk6QUw",
        range: "news!A2:F900"
      }

      let data = await gsapi.spreadsheets.values.get(opt)
      return res.status(400).send(JSON.stringify({error: false, data: data.data.values}))
    })
  } catch (e) {
    return res.status(400).send(JSON.stringify({error:true, message: e.message}))
  }
}