
const express = require('express');
const { getCourses, postInquiry } = require('../controllers/courseController');
const router = express.Router();


router.get('/', getCourses);


router.post('/inquire', postInquiry);

module.exports = router;
