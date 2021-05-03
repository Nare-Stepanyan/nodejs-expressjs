const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

//Sync

const first = readFileSync("./files/first.txt", "utf-8");
const second = readFileSync("./files/second.txt", "utf-8");

// writeFileSync("./files/third.txt", "This is the third txt file", { flag: "a" });

// const third = readFileSync("./files/third.txt", "utf-8");

// console.log(first);
// console.log(second);
// console.log(third);

//Async

readFile("./files/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err.message);
  }
  const first = result;
  readFile("./files/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err.message);
    }
    const second = result;
    writeFile(
      "./files/reult.txt",
      `${first}, ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err.message);
        }
        console.log(result);
      }
    );
  });
});
