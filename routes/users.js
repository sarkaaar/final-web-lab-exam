var express = require('express');
var router = express.Router();
const User = require("../Models/user");
var bcrypt = require("bcryptjs");

//  login page
router.get('/login', function (req, res, next) {
  res.render('user/login');
});


// check login credentials
router.post('/dev', async function (req, res, next) {
  let dev = await User.findOne({
    Email: req.body.Email
  })
  if (dev.role == "admin") {
    req.session.dev = dev
    return res.redirect("/products")
  }
  router.get('/logout', function (req, res, next) {
    req.session.dev = null
    res.redirect('/login');
  })
});

router.post('/login', async function (req, res, next) {
  let user = await User.findOne({
    Email: req.body.Email,
    Password: req.body.Password
  })
  if (!user) return res.redirect("/login")
  req.session.user = user
  res.redirect("/")
  router.get('/logout', function (req, res, next) {
    req.session.user = null
    res.redirect('/login');
  });


});


module.exports = router;