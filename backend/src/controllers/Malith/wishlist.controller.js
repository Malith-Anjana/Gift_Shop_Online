const wishlist = require ("../../models/Malith/wishlist.model");

const addWishlistItems = async(req, res) => {
    if (req.body) {
        await wishlist.findOne({"productId":req.body.productId}, function(err,procId){
            if(procId){
                res.status(200).json("Already Added");
            }

            else{

                const wishItem = new wishlist(req.body);
            wishItem.save()
                .then(data => {
                    res.status(200).json("Added");
                })
                .catch(error => {
                    console.log("Somethin went wrong!");
                });
            }
        });
            
           
    }
}
  


const getAllWishlistItems = async(req, res) => {
    await wishlist.find({}).sort({_id:-1})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });

}



const deletWishlistItem= async (req, res) => {
    try {
        const post = await wishlist.findById(req.params.id);
 
        try {
           await post.delete()
           res.status(200).json("item has been deleted");
        } catch (err) {
            res.status(200).json(err);
        }

        
    } catch (err) {
        
    }
}





module.exports = {
    addWishlistItems,
    getAllWishlistItems,
    deletWishlistItem
}