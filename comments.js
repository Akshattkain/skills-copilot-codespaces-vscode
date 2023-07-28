// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

//Handle requests
router.get('/', (req, res) => {
    res.send('Comments page'),
    console.log('Comments page'),
    res.end(),
    console.log('End of comments page'),
    res.status(200),
    console.log('Status 200')
});


// Export module
module.exports = router;


