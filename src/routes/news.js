const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// newsController.index;

//Truong hop /.. ngoai le
router.get('/:slug', newsController.show);

// Truong hop / dau tien
router.get('/', newsController.index);

module.exports = router;
