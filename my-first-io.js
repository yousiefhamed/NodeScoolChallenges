const fs = require("fs");
let testFileBuf = fs.readFileSync(process.argv[2]);
console.log(testFileBuf.toString().split("\n").length - 1);
