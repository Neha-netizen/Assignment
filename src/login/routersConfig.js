const express = require('express');
const router = express.Router();
const controller = require("./controller");

router.post('/insert', [
    controller.insert
]);

router.get('/find', [
    controller.find
]);

router.post('/update', [
    controller.update
]);

router.delete('/delete', [
    controller.delete
])

module.exports = router;