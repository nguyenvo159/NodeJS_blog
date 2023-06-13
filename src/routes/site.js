const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');


//Truong hop /.. ngoai le
router.use('/search', siteController.search);

// Truong hop / dau tien
router.use('/', siteController.index);


module.exports = router;