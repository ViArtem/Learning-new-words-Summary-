const {Schema, model } = require('mongoose')
const schema = new Schema({
    Uaword:{
        type: String,

    },
    Ukwords:{
        type: String
    }
})

module.exports = model("Word", schema)