const express = require("express");
const mongoose = require("mongoose");
//we will put all of out api routes into routes folder.
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, function() {
    console.log("Your server is now running on PORT:", PORT);
});