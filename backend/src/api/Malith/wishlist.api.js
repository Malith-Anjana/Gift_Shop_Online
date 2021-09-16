const express = require('express');
const router = express.Router();
const controller = require('../../controllers/Malith/wishlist.controller');

module.exports = function() {
    router.post('/addwishlistitem', controller.addWishlistItems);
    router.get('/getwishlistitem', controller.getAllWishlistItems);
    router.delete('/deletewishlistitem/:id', controller.deletWishlistItem);
  

    return router;
}