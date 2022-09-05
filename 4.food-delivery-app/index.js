
// Step 1: Import express.
const express = require("express");
const userRoutes = require("./src/user/routes/user");
const restuarantRoutes = require("./src/restaurant/routes/restaurant");
const mongodb = require("./config/mongodb");
const bodyParser = require("body-parser");
const auth = require("./src/middlewares/auth");
const cors = require("cors");

// Step 2: Create server and listen.
const server = express();
server.listen(4400);
server.use(cors())

// Connect to Database.
mongodb.connect();

// Configure Routes.
server.use(bodyParser.json());
server.use("/api/user", userRoutes);
server.use("/api/restaurant", restuarantRoutes);

// Step 3: Create default response.
server.get("/", (req, res)=>{
    res.end("Hello world from express");
});

console.log("Server is listen on 4400");