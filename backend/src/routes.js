const express = require("express");

const UserController = require("./controllers/UserController");
const SalesmanController = require("./controllers/SalesmanController");
const ClientController = require("./controllers/ClientController");

const routes = express.Router();

routes.get("/user/:id", UserController.index);
routes.delete("/user/:id", UserController.delete);
routes.post("/user", UserController.store);

routes.get("/salesman/:id", SalesmanController.index);
routes.delete("/salesman/:id", SalesmanController.delete);
routes.post("/salesman", SalesmanController.store);

routes.get("/client/:id", ClientController.index);
routes.post("/client", ClientController.store);
routes.put("/client/:id", ClientController.change);
routes.delete("/client/:id", ClientController.delete);

module.exports = routes;
