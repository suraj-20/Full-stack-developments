
const mongoose = require("mongoose");

const url = "mongodb+srv://sura_j20:s8u2r8a7j@cluster0.dtydm.mongodb.net/mongooseFDDB?retryWrites=true&w=majority";

exports.mongooseConnect = async()=>{

    try{
        client = await mongoose.connect(url);
        console.log("Connected using database");
    }catch(err){
        console.log(err);
    }
}
