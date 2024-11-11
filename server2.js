//www.youtube.com/watch?v=32M1al-Y6Ag&list=PLatJ6sSqHbPfGFwiZFgnyDf80rAo9PCH8&index=23 1:03:31

import { createServer } from "http";
const PORT = process.env.PORT || 8000;

const users = [
  { id: 1, name: "Piotr Podgorski" },
  { id: 2, name: "Stefan Podgorski" },
  { id: 3, name: "Roch Podgorski" },
];

// Logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// JSON middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
  console.log("getUsersHandler called");
  res.write(JSON.stringify(users));
  res.end();
};

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
  console.log("GetUserByIdHandler");
  const id = req.url.split("/")[3];
  console.log("User ID:", id);
  const user = users.find((user) => user.id === parseInt(id));
  console.log("User found:", user);

  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "User not found" }));
  }
  res.end();
};

// NotFoundHandler
const NotFoundHandler = (req, res) => {
  console.log("NotFoundHandler called");
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "route not found" }));
  res.end();
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        console.log("Handling /api/users");
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        console.log("Handling /api/users/:id");
        getUserByIdHandler(req, res);
      } else {
        console.log("Route not found");
        NotFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`serwer hula na porcie ${PORT}`);
});
