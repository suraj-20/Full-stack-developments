
// Conect to mongodb database.
const mongodb = require("mongodb");

const mongodbClient = mongodb.MongoClient;

const url = "mongodb+srv://sura_j20:s8u2r8a7j@cluster0.dtydm.mongodb.net/foodDeliveryAppDB?retryWrites=true&w=majority"

var client;

exports.connect = async()=>{

    try{
        client = await mongodbClient.connect(url);
        console.log("DB is connected")
    }catch(err){
        console.log(err);
    }
}

exports.getCollection = (collectionName)=>{
    return client.db("foodDeliveryAppDB").collection(collectionName);
}