const express = require("express");

// importing all the controllers components 
const cityController = require("../Controllers/location");
const mealTypeController = require("../Controllers/MealType");
const restaurantController = require("../Controllers/Restaurant");

// Initializing the express router
const router = express.Router();

// registering of all the routes

router.get("/restaurants", restaurantController.getAllRestaurants);

router.get("/restaurantDetails/:name", restaurantController.getAllRestaurantDetails)

router.post('/restaurantfilter', restaurantController.filterSearch);

// API for Restaurant location Drop Down list.
router.get("/cityList", cityController.getCityList);

// Get City name (Example:Delhi) as params in the URL and find restaurant data with respect to the city name.
router.get("/getRestaurantByCityName/:cityname", restaurantController.getRestaurantByCityName);

// API for Restaurants Widget List drop-down.
router.get("/widget", mealTypeController.getMealType);

module.exports = router;  // export the router