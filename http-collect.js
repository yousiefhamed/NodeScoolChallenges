"use strict";
const http = require("http");

http
  .get(process.argv[2], (res) => {
    res.setEncoding("UTF-8");
    let body = "";
    res.on("data", (chunk) => {
      body += chunk;
    });
    res.on("error", (err) => {
      console.error(err);
    });
    res.on("end", () => {
      console.log(body.length);
      console.log(body);
    });
  })
  .on("error", (err) => console.error(err));
