const giftItem = require('../../models/giftItem');

//Malith   Get all gift items by category
const getAllGiftItems = async(req,res)=>{
    const category = req.query.cat;
    const pUpper = req.query.pUpper;
    const pLower = req.query.pLower;
    console.log(category);
    try{
        let items;
        if(category && pUpper && pLower ){
            
                items = await giftItem.find({category, wholesalePrice : { $gt: pLower, $lt:pUpper }});

       
        }
        else if(pUpper && pLower) {

             items = await giftItem.find({wholesalePrice : { $gt: pLower, $lt:pUpper }});

                

        }
        else if(category){
            items = await giftItem.find({category});
        }
        else{
            items = await giftItem.find();
        }
        
        
        res.status(200).json(items);
       
    }catch(err){
        res.status(500).json(err);

    }
}



const getSpecialDeals = async(req,res)=>{
    try{
        const items = await giftItem.find().sort({_id:-1}).limit(6);   
        res.status(200).json(items);
    }catch(err){
        res.status(500).json(err);

    }
}

const getNewArrivals = async(req,res)=>{
    try{
        const items = await giftItem.find().sort({_id:1}).limit(6);   
        res.status(200).json(items);
    }catch(err){
        res.status(500).json(err);

    }
}


//Malith

module.exports={
    getAllGiftItems,
    getSpecialDeals,
    getNewArrivals
};