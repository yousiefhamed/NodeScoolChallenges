"use strict";
const http = require("http");

http
  .get(process.argv[2], (res) => {
    res.setEncoding("utf8");
    let body = "";
    res.on("error", (err) => console.error(err));
    res.on("data", (chunk) => {
      body += chunk;
      console.log(chunk);
    });
    res.on("end", () => {
      return body;
    });
  })
  .on("error", (err) => {
    console.error(err);
  });
