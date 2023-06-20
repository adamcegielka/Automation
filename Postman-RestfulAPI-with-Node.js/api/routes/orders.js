const express = require('express');
const router = express.Router();

router.get('/', (reg, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

router.post('/', (reg, res, next) => {
    res.status(201).json({
        message: 'Orders was created'
    });
});

router.get('/:orderId', (reg, res, next) => {
    res.status(200).json({
        message: 'Orders details',
        orderId: reg.params.orderId
    });
});

router.delete('/:orderId', (reg, res, next) => {
    res.status(200).json({
        message: 'Order delete',
        orderId: reg.params.orderId
    });
});

module.exports = router;