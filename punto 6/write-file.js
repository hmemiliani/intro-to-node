const fs = require("fs");

fs.writeFile("example.txt", "Hello, World! 2", (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("File written successfully");
});