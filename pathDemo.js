import path from "path";
import url from "url";

const filePath = "./dir1/dir2/test.txt";

// console.log(path.basename(filePath)); //filename

// console.log(path.dirname(filePath)); //direcory

// console.log(path.extname(filePath)); //file extention

// console.log(path.parse(filePath)); //objet with path info (all above +)

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__filename, __dirname);

const filePath2 = path.join(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath2);

//resolve()
const filePath3 = path.resolve(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath3);
