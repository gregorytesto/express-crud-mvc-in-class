const express = require("express");
const app = express();

const bookmarksController = require("./controllers/bookmarksController.js");


app.get("/", (req, res)=>{
    res.send("Welcome to our bookmarks app");
});

app.use("/bookmarks", bookmarksController);


app.get("*", (req, res)=>{
    res.status(404).json({ error: "Page not found" });
})

module.exports = app;