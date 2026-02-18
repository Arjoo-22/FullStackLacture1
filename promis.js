const fs = require("fs").promises;

fs.readFile("file.txt", "utf-8")
  .then((data) => {
    console.log("File content:", data);
    return data.toUpperCase();
  })
  .then((uppercaseData) => {
    console.log("Uppercase content:", uppercaseData);
    return `Length: ${uppercaseData.length}`;
  })
  .then((lengthInfo) => {
    console.log(lengthInfo);
  })
  .catch((err) => {
    console.log("Error:", err.message);
  });
