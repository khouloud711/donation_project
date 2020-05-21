const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const verify = require('./verifyToken');
const { registerValidation,loginValidation } = require('../validation');




/********* */
router.get('/currentUser',(req,res)=>{
    try{
      const user= User.findOne(
        {
          _id:req.body.id
        }
      );
      res.json(user);

    }catch (err){
      res.json({message:err});
      console.log(err);
    }
})
/********* */


router.post('/register',  async (req,res) => {

    
    //checking if the user is already in the database
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('email already exists');

    //hash  passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    let userData =  new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashedPassword,
        number: req.body.number
    });
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
/************ 
//login

router.post('/login',  (req,res) => {
    let userData = req.body
 
  
    //checking if the email exists
    User.findOne({email: userData.email},async (error, user)=>{
        const validPass = await bcrypt.compare(userData.password, user.password);

        if(error){
            console.log(error)
        } else {
            if(!user) {
                res.status(401).send('Invalid email')
            } else
            if(!validPass) return res.status(401).send('invalid password');

            else {
                let payload = { subject: user._id}
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token})
            }
        }
    });

})
*/
router.post("/login", (req, res, next) => {
    let getUser;
    User.findOne({
        email: req.body.email
    }).then(user => {
        if (!user) {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
        getUser = user;
        return bcrypt.compare(req.body.password, user.password);
    }).then(response => {
        if (!response) {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
        let jwtToken = jwt.sign({
            email: getUser.email,
            userId: getUser._id
        }, "secretKey", {
            expiresIn: "1h"
        });
        res.status(200).json({
            token: jwtToken,
            expiresIn: 3600,
            _id: getUser._id
        });
    }).catch(err => {
        return res.status(401).json({
            message: "Authentication failed"
        });
    });
});


/*** */
// Get Users
router.route('/').get((req, res) => {
    User.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})
// Get Single User
router.route('/user-profile/:id').get(/*verify,*/ (req, res, next) => {
    User.findById(req.params.id, (error, data) => {
       
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

// Update User
/*router.route('/update-user/:id').put((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            //res.json(data)
            res.send('user details updated')
            console.log('User successfully updated!')
        }
    })
})*/
/*router.put('/update-user/:id', function(req, res){
    console.log('Update a user');
    User.findByIdAndUpdate(req.params.id,
    {
        $set: req.body
    },
    {
        new: true
    },
    function(err, updatedUser){
        if(err){
            res.send("Error updating user");
        }else{
            res.json(updatedUser);
        }
    }
  
    );
  });*/
/********************************************** */
// Update user
/*router.route('/update-user/:id').put((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Data updated successfully')
      }
    })
  })*/
  
  /*firstname update */
  router.route('/update-firstname/:id').put((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, {
      $set:{ firstname: req.body.firstname}
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('firstname updated successfully')
      }
    })
  })
  /*lastname update */
  router.route('/update-lastname/:id').put((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, {
      $set:{ lastname: req.body.lastname}
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('lastname updated successfully')
      }
    })
  })
  /*email update */
  router.route('/update-email/:id').put((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, {
      $set:{ email: req.body.email}
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('email updated successfully')
      }
    })
  })
  /*numero update */
  router.route('/update-number/:id').put((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, {
      $set:{ number: req.body.number}
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('number updated successfully')
      }
    })
  })

/************************** */


// Delete User
router.route('/delete-user/:id').delete((req, res, next) => {
    userSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
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



  /* ================================================
  MIDDLEWARE - Used to grab user's token from headers
  ================================================ */
  router.use((req, res, next) => {
    const token = req.headers['authorization']; // Create token found in headers
    // Check if token was found in headers
    if (!token) {
      res.json({ success: false, message: 'No token provided' }); // Return error
    } else {
      // Verify the token is valid
      jwt.verify(token, config.secret, (err, decoded) => {
        // Check if error is expired or invalid
        if (err) {
          res.json({ success: false, message: 'Token invalid: ' + err }); // Return error for token validation
        } else {
          req.decoded = decoded; // Create global variable to use in any request beyond
          next(); // Exit middleware
        }
      });
    }
  });
module.exports = router;