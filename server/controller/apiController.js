const model = require('../model/model.js');

const getAllSteps =  (req, res) => {
}
const addNewStep = async (req, res) => {
    const step = req.body;
    console.log(step)
    // const newStep = new model({
    //     step: step
    // })

    // try
    // {
    //     const data = await newStep.save();
    //     res.status(200).json(data);
    // }
    // catch(err)
    // {
    //     res.status(400).send(err);
    // }

    // return "hello"
}




module.exports = {
    getAllSteps,addNewStep
}