const express = require("express");
const app = express();

app.get("/",(req, res)=>{
    res.send("This is my work ha ha!!!")
});

app.listen(4000)