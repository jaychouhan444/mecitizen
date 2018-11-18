const userSchema = require('../schema/userSchema');
const biz = require('../biz/biz');
const logger = require('../utils/logger');
module.exports = {
    find:(req,res)=>{
        //logger.debug('a');
        res.send({statuscode:200,message:'Hii jay..!!'});
    },
    insertdata :(req, res)=>{
      
        var a= JSON.stringify(req.body);
        //logger.info(a);

    biz.hello(req,res);
     
    
    },
    
}