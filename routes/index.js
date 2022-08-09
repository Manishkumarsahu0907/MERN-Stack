const express = require('express');

const router = express.Router();
const homeController = require('../Controller/home_controller')

console.log('router loaded');

router.get('/', homeController.home);

module.exports = router;