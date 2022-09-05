
const mongodbConfig = require("../../../config/mongodb")
const ObjectId = require("mongodb").ObjectId;

module.exports.add = async (restaurant)=>{
    const collection = mongodbConfig.getCollection("Restaurant");
    try{
    await collection.insertOne({name:restaurant.name, location:restaurant.location, contact:restaurant.contact});
    }catch(err){
        console.log(err);
        return false;
    }
    return true;
}

exports.get = async(req, res)=>{
    const collection = mongodbConfig.getCollection("Restaurant");
    try{
        const result = await collection.find().toArray();
        return result;
    }catch(err){
        console.log(err);
        return -1;
    }
}

exports.getById = async(id)=>{
    const collection = mongodbConfig.getCollection("Restaurant");
    try{
        const filter = {_id:ObjectId(id)}
        const result = await collection.find(filter).toArray();
        console.log(result);
        return result;
    }catch{
        console.log(err)
        return -1;
    }
}

exports.getByLocation = async(_location)=>{
    const collection = mongodbConfig.getCollection("Restaurant");
    try{
        const filterExpression = {location:_location}
        const result = await collection.find(filterExpression).toArray();
        console.log(result);
        return result;
    }catch(err){
        console.log(err);
        return -1;
    }
}

module.exports.update = async (restaurant)=>{
    const collection = mongodbConfig.getCollection("Restaurant");
    try{
        // ObjectId converts string to ObjectId.
        const filter = {_id:ObjectId(restaurant._id)};
        // set operator tells mongodb to upadate these data items.
        const update = { $set: {name: restaurant.name, location: restaurant.location, contact: restaurant.contact}}; 
        await collection.findOneAndUpdate(filter, update);
    }catch(err){
        console.log(err);
        return false;
    }
    return true;
}

module.exports.delete = async (id)=>{
    const collection = mongodbConfig.getCollection("Restaurant");
    try{
        const filter = {_id:ObjectId(id)}
        await collection.findOneAndDelete(filter);
    }catch(err){
        console.log(err);
        return false;
    }
    return true;
}

exports.filter = async (name, location)=>{
    const collection = mongodbConfig.getCollection("Restaurant");
    const results =  await collection.find({
        $and: [
            {name: {$regex: name}},
            {location: location}
        ]
    }).toArray();
    return results;
}