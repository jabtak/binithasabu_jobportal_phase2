const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee');
var {Alumni} = require('../models/alumni');

// => localhost:3000/employees/
router.get('/', (req, res) => {
    Alumni.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
   
   
    Alumni.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.post('/', (req, res) => {
    var alum = new Alumni({
        fname: req.body.fname,
        lname: req.body.lname,
        contact: req.body.contact,
        gender: req.body.gender,
        dob: req.body.dob,
        message: req.body.message,
        city: req.body.city,
        pincode: req.body.pincode,
        state: req.body.state,
        district: req.body.district,
        password: req.body.password,
        email: req.body.email,
        qualification: "",
        skill: "",
        experience: "",
        resumeName: "",
        profileUpdated:"no",
        profilePicName:""

    });
    alum.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Alumni Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/login', (req,payload, res)=>{
 
    var alum = new Alumni({
       

        email: req.body.email

    });
     Alumni.findOne({email : payload.uname });
     if (!ObjectId.isValid(req.params.uname))
        return res.status(400).send(`No record with given id : ${req.params.uname}`);
    
    
});

router.put('/:id', (req, res) => {
    var findid= req.params.id;
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var alum = new Alumni({
            fname: req.body.fname,
            lname: req.body.lname,
            contact: req.body.contact,
            gender: req.body.gender,
            dob: req.body.dob,
            message: req.body.message,
            city: req.body.city,
            pincode: req.body.pincode,
            state: req.body.state,
            district: req.body.district,
            password: req.body.password,
            email: req.body.email
           
        });
        delete alum['_id'];
    Alumni.findByIdAndUpdate(findid, 
        {
            fname: req.body.fname,
            lname: req.body.lname,
            contact: req.body.contact,
            gender: req.body.gender,
            dob: req.body.dob,
            message: req.body.message,
            city: req.body.city,
            pincode: req.body.pincode,
            state: req.body.state,
            district: req.body.district,
            password: req.body.password,
            email: req.body.email,
            skill: req.body.skill,
            qualification: req.body.qualification,
            experience: req.body.experience,
            resumeName: req.body.resumeName,
            profileUpdated: "yes",
            profilePicName:  req.body.profilePicName
           
        }
        , (err, doc) => {
        if (!err) { res.send(doc); }
        else { 
            console.log(alum);
            console.log('Error in Alumni Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;