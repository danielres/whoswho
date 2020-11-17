import fs from "fs";
import request from "request";
import * as config from "../config";

const uploadSchema = async () => {
  const url = config.fauna.graphql.import.endpoint;
  const token = config.fauna.keys.admin;
  const file = config.fauna.graphql.schema.path;

  try {
    console.log("Uploading Graphql Schema...\n");
    const response = await streamUpload(url, token, file);
    console.log(response);
  } catch (error) {
    console.log(`Error during schema import`);
    console.log(error);
    process.exit(1);
  }
};

uploadSchema();

function streamUpload(url: string, token: string, file: string) {
  return new Promise((resolve, reject) => {
    fs.createReadStream(file).pipe(
      request.post(
        url,
        { headers: { Authorization: `Bearer ${token}` } },
        (err, res, body) => {
          if (err) reject(err);
          resolve(body);
        }
      )
    );
  });
}
