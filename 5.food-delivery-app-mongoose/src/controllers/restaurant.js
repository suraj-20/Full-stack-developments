
const Restaurant = require("../models/restaurant");
const repo = require("../repositories/restaurant");

exports.add = async (req, res)=>{
    const newRestaurant = new Restaurant(req.body);
    const result = await repo.add(newRestaurant);
    if(result){
        res.status(200).send("Data added")
    }else{
        res.status(503).send("Data not added");
    }
}

exports.get = async (req, res)=>{
    const page = req.params.page;
    const result = await repo.get(page);
    if(result){
        res.status(200).send(result);
    }else{
        res.status(503).send("Data can't be pulled");
    }
}

exports.update = async (req, res)=>{
    const newRestaurant = new Restaurant(req.body);
    const result = await repo.update(newRestaurant);
    if(result){
        res.status(200).send("Data updated")
    }else{
        res.status(503).send("Data not updated");
    }
}

exports.delete = async (req, res)=>{
    const id = req.params.id;
    const result = await repo.delete(id);
    if(result){
        res.status(200).send("Data deleted")
    }else{
        res.status(503).send("Data not deleted");
    }
}