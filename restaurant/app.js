const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const resRoutes = require("./src/Routes/Restaurant");  // importing the routes

const app = express();
app.listen(8900);

app.use(cors());
app.use(bodyParser.json());  // Initializing the body-parser as middleware
app.use("/api", resRoutes);  // registering the routes

// starting the server using the get function on specific port
app.get("/", (req, res) => {
    res.end("Hello world from express");
});
console.log("App is listening on 8900");