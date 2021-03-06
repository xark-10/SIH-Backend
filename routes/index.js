// Required dependencies:
const express = require('express')
const router = express.Router()
const authActions = require('../controllers/authController')
const sellerActions = require('../controllers/sellerController')
const auth = require("../middleware/auth");

/*
 * Ping route
 * @route GET /
 */
router.get("/", authActions.pingRoute);

/*
 * Landing Page Route - Home/Welcome
 * @route GET /home
 */
router.get("/home", auth, authActions.homePageRoute);

/*
 * logout an active user
 * @route GET /logoutUser
 */
router.get("/logoutUser",auth, authActions.logoutUser);

/*
 * Registering a new customer
 * @route POST /registerCustomer
 */
router.post("/registerCustomer", authActions.registerNewCustomer);

/*
 * Registering a new Hotel
 * @route POST /registerHotel
 */
router.post("/registerSeller", sellerActions.registerSeller);

/*
 * Authenticate and login an existing customer
 * @route POST /loginCustomer
 */
router.post("/loginCustomer", authActions.loginExistingCustomer);

/*
 * Authenticate and login an existing hotel
 * @route POST /loginHotel
 */
router.post("/loginSeller", sellerActions.loginSeller);

/*
 * Provide and Update new access token
 * @route POST /renewAccessToken
 */
router.post("/renewAccessToken", authActions.renewAccessToken);

/*
 * Navigating to the error page
 * This should be the last route else any after it won't work
 */
router.all("*", authActions.errorPageRoute);

module.exports = router

