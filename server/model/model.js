const mongo = require('mongoose');

const Schema = mongo.Schema;


const stepSchema = new Schema({
    "step" : 
    {
        type: String,
        required: true
    }
    })


const Step = mongo.model('Step', stepSchema);

module.exports = Step;