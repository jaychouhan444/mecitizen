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
 *     parameters:
 *       - name:
 *         description: user object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/user'
 *     responses:
 *       200:
 *         description: Successfully created
 */
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

module.exports = router