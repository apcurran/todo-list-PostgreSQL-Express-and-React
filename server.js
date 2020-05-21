"use strict";

require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
// Import Routes
const todoRouter = require("./routes/todo-router");
const path = require("path");

// Middleware
// Serve static files from React app
app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json());
// Routes //
app.use("/todos", todoRouter);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(PORT, () => console.log(`Server started on port, ${PORT}.`));