import AWS from "aws-sdk";

const config = {
  region: "ap-southeast-2",
  accessKeyId: process.env.MY_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_SECRET_ACCESS_KEY,
};
AWS.config.update(config);

export const awsSES = new AWS.SES({
  apiVersion: "2010-12-01",
  accessKeyId: process.env.MY_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
