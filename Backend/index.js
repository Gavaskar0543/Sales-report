const express = require('express');
const port = 8000;
const server = express();
const cors = require('cors');
//database stup
const db = require('./config/Database');
//controller to seed database
const products = require('./controller/api/v1');
/**for seeding database from thirdparty URL */
//products.products_transactions();

//url body parser
server.use(express.urlencoded({extended:true}));
//json body parser
server.use(express.json());
const corsOptions = {
    origin: '*'
};


server.use(cors(corsOptions));
//router middleware
server.use('/',require('./router'));

server.listen(port,(err)=>{
    if(err){
        console.log("Error in creating server",err.message);
        return;
    }
    console.log(`Server upon port:${port}`);
});