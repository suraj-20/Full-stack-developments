
const Restaurant = require("../models/restaurant");
const repo = require("../repositories/restaurant");
const url = require("url");

exports.add = async (req, res) => {
    const restaurant = new Restaurant(req.body.name, req.body.location, req.body.contact);
    const result = await repo.add(restaurant);
    if (result) {
        return res.send("Restaurant is added");
    } else {    
        return res.send("Restaurant failed to added");
    }
}

exports.get = async (req, res) => {
    const result = await repo.get();
    if (result == -1) {
        return res.send("Failed to get records")
    } else {
        return res.send(result);
    }
}

exports.getById = async (req, res) => {
    const result = await repo.getById(req.params.id);
    if(result == -1) {
        return res.send("Fialed to get Restaurant")
    }else{
        return res.send(result);
    }
}

exports.getByLocation = async (req, res) => {
    const result = await repo.getByLocation(req.params.city);
    if (result == -1) {
        return res.send("Failed to get restaurant")
    } else {
        return res.send(result);
    }
}

exports.update = async (req, res) => {
    const restaurant = new Restaurant(req.body.name, req.body.location, req.body.contact, req.body.id);
    const result = await repo.update(restaurant);
    if (result) {
        return res.send("Restaurant is updated");
    } else {
        return res.send("Failed to update restaurant");
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    const result = await repo.delete(id);
    if (result) {
        return res.send("Restaurant is deleted");
    } else {
        return res.send("Failed to delete restaurant");
    }
}

exports.filter = async (req, res) => {
    // Parse Query string.
    const params = url.parse(req.url, true).query;
    if (!params.name) {
        const result = await repo.getByLocation(params.location);
        if (result == -1) {
            return res.send("Failed to get restaurant")
        } else {
            return res.send(result);
        }
    } else {
        const result = await repo.filter(params.name, params.location);
        if (result == -1) {
            return res.send("Failed to get restaurant")
        } else {
            return res.send(result);
        }
    }
}