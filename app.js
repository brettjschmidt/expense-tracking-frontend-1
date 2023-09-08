import express from "express";
import http from "http";
import path from "path";

const app = express();
app.use(express.static(path.join(__dirname, "build")));

const port = process.env.PORT || "8080";
app.set("port", port);
const server = http.createServer(app);
server.listen(port);