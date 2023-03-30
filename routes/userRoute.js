const authController = require('../controllers/authController');
const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router();

router.route('/signup').post(authController.createUser);
router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.logoutUser);
router.route('/dashboard').get(authMiddleware, authController.getDashboardPage); //http:localhost:3003/users/dashboard


module.exports = router;
