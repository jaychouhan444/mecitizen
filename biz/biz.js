const userSchema = require('../schema/userSchema');
module.exports = {
    hello(req,res){
        console.log('i m in business logic')
          userSchema.create({
          firstname:req.body.firstname,
          surname:req.body.surname,
          mobile:req.body.mobile,
          email:req.body.email,
          dob:req.body.dob,
          gender:req.body.gender,
          password:req.body.password
      },(err,doc)=>{
          if(err){
              throw err
          }
          if(doc){
              res.send({statuscode:200,doc,message:'Success'})
          }
          else{
              res.send({statuscode:201,message:'Fail'})
          }
      })
    }
}