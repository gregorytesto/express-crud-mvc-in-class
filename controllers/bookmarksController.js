const express = require("express");
const bookmarkRoutes = express.Router();
const bookmarksArr = require("../models/bookmark.js");

// /bookmarks
bookmarkRoutes.get("/", (req, res)=>{
    res.json(bookmarksArr);
});

// /bookmarks/1
bookmarkRoutes.get("/:index", (req, res)=>{
    const { index } = req.params;
    if(bookmarksArr[index]){
        res.json(bookmarksArr[index]);
    } else {
        res.status(404).json({message: "Bookmark not found"});
    }
});

// /bookmarks
bookmarkRoutes.post("/", (req, res)=>{
    bookmarksArr.push(req.body);
    res.json(bookmarksArr[bookmarksArr.length-1]);
})

module.exports = bookmarkRoutes;