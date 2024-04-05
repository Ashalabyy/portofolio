const path = require('path');

const express = require('express');


//
const HomeControllers = require('../controller/home_controller');

const router = express.Router();

router.get('/', HomeControllers.getindex);

module.exports = router;