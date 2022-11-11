const express = require('express');
const report = require('./report');
const router = express.Router();


router.route('/:method').get(report);

module.exports = router;
