// https://www.youtube.com/watch?v=32M1al-Y6Ag&list=PLatJ6sSqHbPfGFwiZFgnyDf80rAo9PCH8&index=22     57'

import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT;

//Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  try {
    //check if GET request
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not Found");
      }

      const data = await fs.readFile(filePath);
      res.setHeader("Content-type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("<h1>Blad serwera</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`serwer hula na porcie ${PORT}`);
});
