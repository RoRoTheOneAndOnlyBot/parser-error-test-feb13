const express = require("express");
const app = express();
app.get("/", (req, res) => res.json({message: "Hello from parser-error-test-feb13!", time: new Date()}));
app.listen(3000, () => console.log("Live on 3000"));