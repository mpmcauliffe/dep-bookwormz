const mongoose = require('mongoose')


const ClubSchema = new mongoose.Schema({ 
    clubName: {
        type: String,
        required: true,
    },
    chiefAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref 'User',
        required: true,
    },
    visibility: {
        type: String,
        default: 'public',
        enum: ['public', 'private'],
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
})