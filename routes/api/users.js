const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

const User = require('../../models/User');

// @route           POST api/users
// @description     Register User Route
// @access          Public

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check(
      'password',
      'Please Enter a password with six or more characters'
    ).isLength(6),
    check('email', 'Enter a valid email address').isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const {name, email, password} = req.body;

    try {
      // see if user exists
      let user= await User.findOne({email});

      if(user) {
        return res
          .status(400)
          .json({errors: ['User Already Exist']});
      }

      // get user avatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });

      user = new User({
        name,
        email,
        avatar,
        password,
      });

      // Encrypt the password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password,salt);

      await user.save();

      // return json web token 
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (error, token) => {
          if (error) throw err;
          res.json({ token });
        }
      );

    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }

  }
);

// @route           GET api/users
// @description     Test Route
// @access          Public
// router.get('/', (req, res) => res.send('User Route'));
module.exports = router;
