var express = require('express')
var router = express.Router()
const userSchema = require('../schema/userSchema');
const controller = require('../handlers/registrationHandler');


// GET /foo
// router.get('/', function (req, res, next) {
//   res.send('this is the index for foo')
// })
router.route('/products').post(controller.insertdata)
//=============Main
/**
 * @swagger
 * /foo/productsfind:
 *    get:
 *      description: This should return all users
 */
//===========



/**
 * @swagger
 * /foo/productsfind:
 *   get:
 *     tags:
 *       - users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/users'
 */
router.route('/productsfind').get(controller.find)
// router.route('/products').post(function (req, res) {
//     console.log(  req.body.firstname)
//      console.log( req.body.surname)
//      console.log( req.body.mobile)
//      console.log( req.body.email)
//       console.log(req.body.dob)
//       console.log(req.body.gender)
//       console.log(req.body.password)
     
     
//       userSchema.create({
//           firstname:req.body.firstname,
//           surname:req.body.surname,
//           mobile:req.body.mobile,
//           email:req.body.email,
//           dob:req.body.dob,
//           gender:req.body.gender,
//           password:req.body.password
//       },(err,doc)=>{
//           if(err){
//               throw err
//           }
//           if(doc){
//               res.send({statuscode:200,doc,message:'Success'})
//           }
//           else{
//               res.send({statuscode:201,message:'Fail'})
//           }
//       })
//      //res.send({message:'Hii '+ req.body.username})
//   });

module.exports = router