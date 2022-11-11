const express = require('express');
const report = require('../controllers/report');
const router = express.Router();

router.route('/:method').get(report);

module.exports = router;
