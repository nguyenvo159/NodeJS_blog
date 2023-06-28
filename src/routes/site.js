const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

//Truong hop /.. ngoai le
router.get('/search', siteController.search);

// Truong hop / dau tien
router.get('/', siteController.index);

module.exports = router;
