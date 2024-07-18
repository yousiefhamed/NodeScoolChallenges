"use strict";
const http = require("http");

const servers = process.argv.slice(2);
const results = [];

for (let i = 0; i < servers.length; i++) {
  http
    .get(servers[i], (res) => {
      res.setEncoding("UTF-8");
      let body = "";
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("error", (err) => {
        console.error(err);
      });
      res.on("end", () => {
        results[i] = body;

        if (results.length === servers.length) {
          results.forEach((res) => console.log(res));
        }
      });
    })
    .on("error", (err) => console.error(err));
}
