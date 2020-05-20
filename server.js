"use strict";

require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
// Import Routes
const todoRouter = require("./routes/todo-router");

// Middleware
app.use(cors());
app.use(express.json());
// Routes //
app.use("/todos", todoRouter);

app.listen(PORT, () => console.log(`Server started on port, ${PORT}.`));