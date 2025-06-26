const express = require("express");

const app = express();

const port = 7777;

app.use("/test", (req, res) => {
    res.send("Hello World from TEST route!!!");
});

app.use("/hello", (req, res) => {
    res.send("Hello Hello Hello");
});

app.use("/", (req, res) => {
    res.send("Hello World !!!");
});

app.listen(port, () => {
    console.log("App is successfully run on port =>", port);
});

//Routing sequence matters
//app.use handles every request it might be get, post, put, patch etc.

