import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import { awsSES } from "./config/aws-config";
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, async (result: any) => {
      if (result instanceof Error) {
        reject({
          status: 500,
          message: "failed to getItem",
          error: result,
        });
      }
      try {
        const display = `
           <h2>Someone wants to contact you</h2>
        <p><strong>Name:</strong> ${req.body.fname} ${req.body.lname}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Phone:</strong> ${req.body.phone}</p>
        <p><strong>Message:</strong> ${req.body.message}</p>
         `;

        const params = {
          // Destination: {
          //   ToAddresses: [req.body.toEmail],
          // },
          Destination: {
            ToAddresses: ["thuvamathu618@gmail.com"],
          },
          Message: {
            Body: {
              Html: {
                Charset: "UTF-8",
                Data: display,
              },
              Text: {
                Charset: "UTF-8",
                Data: "Contact request",
              },
            },
            Subject: {
              Charset: "UTF-8",
              Data: "Contact request",
            },
          },
          Source: "no-replay@thuvarakan.info",
          //Source: "JNJFlooring@jnjflooring.com.au",
        };

        var sendPromise = awsSES.sendEmail(params).promise();
        sendPromise
          .then(function (data) {
            resolve({
              code: 200,
              status: "ok",
              message: "message send successfully",
            });
            console.log("message send successfully", data);
          })
          .catch(function (err) {
            reject({
              code: 500,
              status: "fail",
            });
            console.error(err, err.stack);
          });
      } catch (error) {
        console.log("failed to send message", error);
        reject({
          status: 500,
          message: "failed to get data",
        });
      }
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.json(error);
    });
}
