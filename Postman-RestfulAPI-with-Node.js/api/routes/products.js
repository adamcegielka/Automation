const express = require('express');
const router = express.Router();

router.get('/', (reg, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    })
});

router.post('/', (reg, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /products'
    })
});

router.get('/:productId', (reg, res, next) => {
    const id = reg.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:productId', (reg, res, next) => {
    res.status(200).json({
        message: 'Update product'
    });
});

router.delete('/:productId', (reg, res, next) => {
    res.status(200).json({
        message: 'Deleted product'
    });
});

module.exports = router;