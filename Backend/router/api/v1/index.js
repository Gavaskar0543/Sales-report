const express = require('express');
const router = express.Router();
const transactionController = require('../../../controller/api/v1');
//server status
router.get('/status',(req,res)=>{
    return res.send("Server Up!")
})
// Define a GET route for '/sales/:month'
router.get('/sales/:month', transactionController.combinedData);

// The 'transactionController.combinedData' function will be executed when a GET request is made to '/sales/:month'
// The ':month' parameter in the route will be available as 'req.params.month' in the 'transactionController.combinedData' function

module.exports = router;