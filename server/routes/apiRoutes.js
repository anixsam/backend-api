const { getAllSteps,addNewStep } = require('../controller/apiController.js');


const express = require('express');
const router = express.Router();


router.get('/', getAllSteps);

router.get('/steps', (req, res) => {
    res.send('Steps').status(200);
});

router.get('/steps/:id', (req, res) => {
    res.send(`Step ${req.params.id}`).status(200);
})

router.post('/steps/add', addNewStep);

router.put('/steps/:id', (req, res) => {
    res.send(`Update Step ${req.params.id}`).status(200);
});

router.delete('/steps/:id', (req, res) => {
    res.send(`Delete Step ${req.params.id}`).status(200);
});

module.exports = router;