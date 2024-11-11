// import fs from "fs";
// import { writeFile } from "fs";
import fs from "fs/promises";

// readFile - callback
// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // readFileSync() - Synchronous version (can block code execution if large files)
// const data = fs.readFileSync("./test.txt", "utf8");
// console.log(data);

// //read.File() - Promise.then()
// fs.readFile("/.test/txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//read.File() - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "Hello, I'm writing to this file again");
    console.log("File written to...");
  } catch (err) {
    console.log(err);
  }
};

//appendFile()
const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nThis is appended text");
    console.log("File written to...");
  } catch (err) {
    console.log(err);
  }
};

const main = async () => {
  await writeFile();
  await appendFile();
  await readFile();
};

main();
