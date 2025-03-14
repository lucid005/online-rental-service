const express = require("express");
const connectDB = require("./config/dbcon");
require("dotenv").config();

const app = express();

connectDB();

app.get("/", (req, res) => {
    res.send("Hello World");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}/`);
})
