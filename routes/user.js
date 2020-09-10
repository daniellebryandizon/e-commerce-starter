const express = require('express');
const router = express.Router();

const { sayHi } = require('../controllers/users');

router.post('/', (req, res) => {
    res.send('get');
})

router.post('/post', (req, res) => {
    res.send('post');
})

router.put('/put', (req, res) => {
    res.send('put');
})

router.delete('/delete', (req, res) => {
    res.send('delete');
})


module.exports = router;