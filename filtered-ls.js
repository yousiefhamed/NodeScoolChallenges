"use strict";
const fs = require("fs");
const path = require("path");

fs.readdir(process.argv[2], (err, list) => {
  if (err) throw err;
  for (const file of list) {
    let fileExt = path.extname(file);

    if (fileExt.toLowerCase() === `.${process.argv[3].toLowerCase()}`) {
      console.log(file);
    }
  }
});
