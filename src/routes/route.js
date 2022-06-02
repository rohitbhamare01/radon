const express = require('express');
const demo = require('../logger/logger')
const rohit = require("../util/helper.js")
const rohit1 = require("../validator/formatter.js")
const router = express.Router();

router.get('/test-me', function(req, res) {
    demo.welcome()
    rohit.printDate()
    rohit.getBatchInfo()
    rohit.printMonth()
    console.log(rohit1.case1)
    console.log(rohit1.case2)
    console.log(rohit1.case3)

    res.send('My first ever api!')
});



module.exports = router;
// adding this comment for no reason