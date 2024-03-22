const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");

//user
//login
router.route("/login").post(authControllers.login);
//register
router.route("/register").post(authControllers.register);
//refresh
//logout

//blog
//crud
//create
// read all blogs
//update
//delete

//comment
//create comment
//read comment by blogId

module.exports = router;
