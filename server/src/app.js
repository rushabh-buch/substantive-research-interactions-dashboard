const express = require("express");

const path = require("path");

const cors = require("cors");

const interactionRouter = require("./routes/interaction.router");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

// app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/interactions", interactionRouter);

module.exports = app;
