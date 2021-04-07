const mongoose = require('mongoose')

const Schema = mongoose.Schema


const MemberSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        required: true,
    },
    // chiefAdmin: {
    //     type: Boolean,
    //     required: true,
    //     default: false,
    // },
})


module.exports = MemberSchema
