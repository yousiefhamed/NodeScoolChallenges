"use strict";
const fs = require("fs");
const path = require("path");

function getFiles(dir, ext, cb) {
  fs.readdir(dir, (err, list) => {
    if (err) return cb(err);
    let data = list.filter(
      (file) => path.extname(file).toLowerCase() === `.${ext.toLowerCase()}`
    );
    return cb(null, data);
  });
}

module.exports = getFiles;
