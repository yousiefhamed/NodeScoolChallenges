"use strict";
const fs = require("fs");
let testFileBuf = fs.readFile(process.argv[2], (err, res) => {
  if (err) return err;
  console.log(res.toString().split("\n").length - 1);
});
