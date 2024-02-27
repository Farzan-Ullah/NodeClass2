const express = require("express");
const app = express();
var bodyParser = require("body-parser");
// bodyParser.urlencoded({ extended: false });

const isLoggedIn = (req, res, next) => {
  let loggedIn = true;
  if (loggedIn) {
    next();
  } else {
    res.json({ message: "You`ve not logged in! please login" });
  }
};

const isPremium = (req, res, next) => {
  let premium = true;
  if (premium) {
    next();
  } else {
    res.json({
      message: "You`re not a premium user. please upgrade your plan",
    });
  }
};

app.use(bodyParser.urlencoded());
// app.use(isLoggedIn);

app.get("/", (req, res) => {
  res.send("New Express Server");
});

app.get("/api/users", (req, res) => {
  const users = [
    {
      name: "John",
    },
    {
      name: "Mary",
    },
    {
      name: "Peter",
    },
  ];
  res.json(users);
});

app.get("/register", isLoggedIn, isPremium, (req, res) => {
  res.sendFile(__dirname + "/register.html");
});

app.get("/register/success", (req, res) => {
  res.send("You have Registered Successfully");
});

app.post("/process-form", (req, res) => {
  // res.sendFile(__dirname + "/register.html");
  console.log(req.body);
  res.redirect("/register/success");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

/*
  Response Methods
  - send()
  - json()
  - sendFile()
*/

/*
  HTTP Methods:
  - GET (Read)
  - POST (Create)
  - PUT (Updating)
  - DELETE (Deleting)
*/

/*
  - Node.js Server:
  const http = require('node:http');

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('Our first Node.js Server!!');
  });

  server.listen(3000, () => {
    console.log('Server running successfully :)');
  });

  - Node.js Frameworks: Express.js, Hapi.js, fastify, etc

  - Express.js: Fast, unopinionated, minimalist web framework for Node.js

  - Client Server Architecture
    https://darvishdarab.github.io/cs421_f20/assets/images/client-server-1-d85a93ea16590c10bed340dd78294d0d.png
  - Middleware: https://miro.medium.com/v2/resize:fit:720/format:webp/1*RgPEcCE3mHSGR-fS5lXTCQ.png

  - npm init -y: Initialize Node Application
*/
