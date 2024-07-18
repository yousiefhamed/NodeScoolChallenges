"use strict";
const getFiles = require("./mymodule");

const dir = process.argv[2];
const ext = process.argv[3];

getFiles(dir, ext, (err, data) => {
  if (err) return console.log(err.message);
  for (const file of data) {
    console.log(file);
  }
});
