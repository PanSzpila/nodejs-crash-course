import { createServer } from "http";
const PORT = process.env.PORT;

const users = [
  { id: 1, name: "Piotr Podgorski" },
  { id: 2, name: "Stefan Podgorski" },
  { id: 3, name: "Roch Podgorski" },
];

const server = createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(user));
      res.end();
    } else {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "User not found" }));
      res.end();
    }
  } else {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "route not found" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`serwer hula na porcie ${PORT}`);
});
