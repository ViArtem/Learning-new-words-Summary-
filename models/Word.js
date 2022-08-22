const {Schema, model } = require('mongoose')
const schema = new Schema({
    Uawords:{
        type: String,
      

    },
    Ukwords:{
        type: String
    }
})

module.exports = model("Word", schema)