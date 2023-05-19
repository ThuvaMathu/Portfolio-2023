import AWS from "aws-sdk";

const config = {
  region: "ap-southeast-2",
  accessKeyId: process.env.MY_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_SECRET_ACCESS_KEY,
};
AWS.config.update(config);

export const awsS3 = new AWS.S3({
  accessKeyId: process.env.MY_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_SECRET_ACCESS_KEY,
  apiVersion: "2006-03-01",
});
export const awsDynamoDb = new AWS.DynamoDB({
  accessKeyId: process.env.MY_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_SECRET_ACCESS_KEY,
  apiVersion: "2012-08-10",
  region: "ap-southeast-2",
});
export const awsSES = new AWS.SES({
  apiVersion: "2010-12-01",
  accessKeyId: process.env.MY_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
export const historyBucketName = "jnj-flooring-work-history";
export const galleryBucketName = "jnj-flooring-gallery";
export const workGalleryBucketName = "jnj-flooring-work-gallery";
