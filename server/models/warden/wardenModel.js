const mongoose = require('mongoose');

const wardenSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: String,
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    phone: {
        type: Number,
        required:true
    },
    profileImageUrl: String,
});

const Warden = mongoose.model('Warden', wardenSchema);
module.exports = Warden;
