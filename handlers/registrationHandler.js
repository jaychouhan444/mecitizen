const userSchema = require('../schema/userSchema');
const biz = require('../biz/biz');
const logger = require('../utils/logger');
module.exports = {
    find:(req,res)=>{
        res.send({statuscode:200,message:'Hii jay..!!'});
    },
    insertdata :(req, res)=>{
       
        console.log('i m in handler')
        logger.info('fuck me hard..!!');
        var a= JSON.stringify(req.body);
        logger.info(a);

        console.log( req.body.surname)
        console.log(  req.body.firstname)
     console.log( req.body.mobile)
     console.log( req.body.email)
      console.log(req.body.dob)
      console.log(req.body.gender)
      console.log(req.body.password)
    biz.hello(req,res);
     
    //   userSchema.create({
    //       firstname:req.body.firstname,
    //       surname:req.body.surname,
    //       mobile:req.body.mobile,
    //       email:req.body.email,
    //       dob:req.body.dob,
    //       gender:req.body.gender,
    //       password:req.body.password
    //   },(err,doc)=>{
    //       if(err){
    //           throw err
    //       }
    //       if(doc){
    //           res.send({statuscode:200,doc,message:'Success'})
    //       }
    //       else{
    //           res.send({statuscode:201,message:'Fail'})
    //       }
    //   })
    },
    // getMovies : function(req, res){
    //    //do something
    // },
    // postMovie : function(req, res){
    //    //do something
    // }
}