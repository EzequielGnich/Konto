const express = require("express");

const UserController = require("./controllers/UserController");

const routes = express.Router();

routes.get("/user/:id", UserController.index);
routes.delete("/user/:id", UserController.delete);
routes.post("/user", UserController.store);

module.exports = routes;
