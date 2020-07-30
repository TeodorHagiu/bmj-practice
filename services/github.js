import https from "https";
import { githubApiBaseUrl, githubApiHost, githubAuthToken } from "../constants";

const githubGet = (path) =>
  new Promise((resolve, reject) => {
    https
      .get(
        {
          hostname: githubApiHost,
          path,
          headers: {
            "user-agent": "bmj-practice",
            authorization: `token ${githubAuthToken}`,
          },
        },
        (res) => {
          const { statusCode } = res;
          const contentType = res.headers["content-type"];

          let error;
          // Any 2xx status code signals a successful response but
          // here we're only checking for 200.
          if (statusCode !== 200) {
            error = new Error(
              "Request Failed.\n" + `Status Code: ${statusCode}`
            );
          } else if (!/^application\/json/.test(contentType)) {
            error = new Error(
              "Invalid content-type.\n" +
                `Expected application/json but received ${contentType}`
            );
          }
          if (error) {
            console.error(error.message);
            // Consume response data to free up memory
            res.resume();
            return reject(error);
          }

          res.setEncoding("utf8");
          let rawData = "";
          res.on("data", (chunk) => {
            rawData += chunk;
          });
          res.on("end", () => {
            try {
              const parsedData = JSON.parse(rawData);
              // console.log(parsedData);
              return resolve(parsedData);
            } catch (e) {
              console.error(e.message);
              return reject(e);
            }
          });
        }
      )
      .on("error", (e) => {
        console.error(`Got error: ${e.message}`);
        return reject(e);
      });
  });

export const getUserByUsername = (username) =>
  githubGet(`${githubApiBaseUrl}/users/${username}`);

export const getOrgsByUsername = (username) =>
  githubGet(`${githubApiBaseUrl}/users/${username}/orgs`);
