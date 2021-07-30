
const mongoose = require('mongoose');

var Alumni = mongoose.model('Alumni', {
    fname: { type: String },
    lname: { type: String },
    contact: { type: String },
    gender: { type: String },
    dob: { type: String },
    message: { type: String },
    city: { type: String },
    pincode: { type: String },
    state: { type: String },
    password:{ type: String},
    email:{ type: String},
    qualification:{ type: String},
    skill:{ type: String},
    experience:{ type: String},
    profilePicName: { type: String},
    profileUpdated: { type: String},
    resumeName: { type: String}
    
},'AlumniData');


module.exports = { Alumni };