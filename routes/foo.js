 var express = require('express')
var router = express.Router()
const userSchema = require('../schema/userSchema');
const controller = require('../handlers/registrationHandler');

/**
 * @swagger
 * definition:
 *   users:
 *     properties:
 *        firstname:
 *            type: string
 *        surname:
 *            type: string
 *        mobile:
 *            type: number
 *            minimum: 10
 *            maximum: 10
 *        email:
 *            type: string
 *        dob:
 *            type: string
 *        gender:
 *            type: string
 *        password:
 *            type: string
 */
/**
 * @swagger
 * /foo/products:
 *   post:
 *     tags:
 *       - users
 *     description: Creates a new user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/users'
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "This api will be used to create user / Register user"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/users"
 * 
 */
router.route('/products').post(controller.insertdata)





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

module.exports = router