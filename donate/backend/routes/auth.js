const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { registerValidation,loginValidation } = require('../validation');







router.post('/register',  (req,res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser)=>{
        if(error){
            console.log(error)
        } else {
            let payload = { subject: registeredUser._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    })
})

//login

router.post('/login',  (req,res) => {
    let userData = req.body

    //checking if the email exists
    User.findOne({email: userData.email}, (error, user)=>{
        if(error){
            console.log(error)
        } else {
            if(!user) {
                res.status(401).send('Invalid email')
            } else
            if ( user.password !== userData.password){
                res.status(401).send('Invalid password')
            } else {
                let payload = { subject: user._id}
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token})
            }
        }
    });

})




/*
router.post('/register', async (req,res) => {

    //lets validate the data 
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    //checking if the user is already in the database
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('email already exists');

    //hash  passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);


    //create new user
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashedPassword,
        number: req.body.number
    });

    try{
        const savedUser = await user.save(); 
        res.send({ user: user._id });
       
    }catch(err){
        res.status(400).send(err);
    }
});



//******login*******

router.post('/login', async (req,res) => {
//lets validate the data 
const {error} = loginValidation(req.body);
if(error) return res.status(400).send(error.details[0].message);

//checking if the email exists
const user = await User.findOne({email: req.body.email});
if(!user) return res.status(400).send('email is not found');

//password is correct
const validPass = await bcrypt.compare(req.body.password, user.password);
if(!validPass) return res.status(400).send('invalid password');

//create and assign a token
const token = jwt.sign({_id: user._id},'ehdzjaqksrgtg'); //hatyt string toul ly yji f .env fi3oudh process.env.TOKEN_SECRET
res.header('auth-token', token).send(token);

});
*/

module.exports = router;