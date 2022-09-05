
const mongoose = require("mongoose");
const Restaurant = require("../models/restaurant");
const ObjectId = require("mongodb").ObjectId;

exports.add = async (restaurant)=>{
    try{
        const result = await Restaurant.create(restaurant);
        return result;
    }catch(err){
        console.log(err);
    }
}

exports.get = async (page)=>{
    try{
        const result = await Restaurant.aggregate(
            [
                {
                    $lookup:{
                        from: "menus",
                        localField: "_id",
                        foreignField: "restauratID",
                        pipeline:[
                            // {$match: {type: "Breakfast"}},
                            {$project: {restauratID:0}}
                        ],
                        as: "menus"
                    }
                },
                {$skip: (page-1)*5},
                {$limit: 5}
            ]
        );
        return result;
    }catch(err){
        console.log(err);
        return null;
    }
}

exports.update = async (restaurant)=>{
    try{
        // ObjectId converts string to ObjectId.
        const filter = {_id:ObjectId(restaurant._id)};
        // set operator tells mongodb to upadate these data items.
        const update = { $set: {name: restaurant.name, location: restaurant.location, contact: restaurant.contact}}; 
        const result = await Restaurant.findOneAndUpdate(filter, update);
        return result;
    }catch(err){
        console.log(err);
    }
}

exports.delete = async (id)=>{
    try{
        const result = await Restaurant.findByIdAndDelete(id);
        return result;
    }catch(err){
        console.log(err);
    }
}