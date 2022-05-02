const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json())
app.use(cors())

const users = require("./users");
app.use("/", users);

const port = process.env.PORT || 4000;
app.listen(port,() => console.log(`server start on port ${port}`));
