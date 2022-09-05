
const Menu = require("../models/menu");
const repo = require("../repositories/menu");

exports.add = async (req, res)=>{
    const menu = new Menu(req.body);
    const result = await repo.add(menu);
    if(result){
        res.status(200).send("Data added")
    }else{
        res.status(503).send("Data not added");
    }
}
