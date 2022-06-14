const express = require("express");

const { httpGetInteractions } = require("./interactions.controller");

const interactionRouter = express.Router();

interactionRouter.get("/", httpGetInteractions);

module.exports = interactionRouter;
