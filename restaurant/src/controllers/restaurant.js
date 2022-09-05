const Restaurant = require("../Models/Restaurant.json");  // importing the Restaurant JSON data
const Menu = require("../models/menu.json")
const fs = require('fs')

// getAllRestaurants function to return all restaurants
exports.getAllRestaurants = (req, res) => {
    res.status(200).json(
        {
            message: "Restaurant Fetched Sucessfully", restaurant: Restaurant
        }
    )
}


// getRestaurantByCity function to return restaurants by city
exports.getRestaurantByCityName = (req, res) => {
    const cityName = req.params.cityname;
    const result = Restaurant.filter(item => item.city_name == cityName)
    res.status(200).json(
        {
            message: "Restaurant Fetched Sucessfully", restaurant: result
        }
    )
}


// getRestaurantDetails function to return details of restaurant
exports.getAllRestaurantDetails = (req, res) => {
    const name = req.params.name;
    const result = Restaurant.filter(item => item.name == name)
    res.status(200).json(
        {
            message: "Restaurant Details", restaurant : result
        }
    )
}


// filter function to filter the data based on multiple params
exports.filterSearch = (req, res, next) => {
    const filter={}

    if(req.body.city_id){
        filter.city= req.body.city_id
    }

    if(req.body.cuisine && req.body.cuisine.length >0 ){
       filter['Cuisine.name']={ $in : req.body.cuisine }
    }
    
    if(req.body.lcost && req.body.hcost){
        if(req.body.lcost==0){
            filter.cost ={
                $lte :req.body.hcost
            }
        }
        else{
           filter.cost= {
               $lt: req.body.hcost,
               $gt: req.body.lcost
           } 
        }
    }

    let sort=1;
    if(req.body.sort){
        sort:req.body.sort
    }
   //logic of pagination achieved through limit and skip 
   Restaurant.find(filter).limit(2).skip(2*(req.body.pageNo-1)).sort({"cost":sort}).then(
       result=>{
           res.status(200).json({ message:"data fetched successfully" , data:result })
       }
   ).catch(error=>{
           res.status(500).json({ message:"Error in database" , error:error })
   })
}