// login

const Joi = require("joi"); // for validation use
const User = require("../models/user");
const bcrypt = require("bcrypt");

const login = async (req, res, next) => {
  // validate input
  const userLoginSchema = Joi.object({
    username: Joi.string().min(5).max(20).required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
  });
  const { error } = userLoginSchema.validate(req.body);
  if (error) {
    return next(error);
  }
  const { username, password } = req.body;

  let user;
  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      const error = {
        status: 401,
        msg: "Invalid username",
      };
      return next(error);
    }
    // to match password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      const error = {
        status: 401,
        msg: "Invalid password",
      };
      return next(error);
    }
  } catch (error) {
    return next(error);
  }
  return res.status(200).json({ user: user });
};

//register
const register = async (req, res) => {
  //validate user input

  const userRegisterSchema = Joi.object({
    name: Joi.string().max(20).required(),
    username: Joi.string().min(5).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
  });

  const { user } = userRegisterSchema.validate(req.body);
  // return error middleware

  if (error) {
    return next(error);
  }

  // if email aur username already register
  const { name, username, email, password } = req.body;
  try {
    const emailUse = await User.exits({ email });
    const usernameUse = await User.exits({ username });

    if (emailUse) {
      const error = {
        status: 401,
        msg: "Email is already registered",
      };
      return next(error);
    }
    if (usernameUse) {
      const error = {
        status: 401,
        msg: "username is already registered",
      };
      return next(error);
    }
  } catch (error) {
    return next(error);
    // to hash the password using bcrypt
    const hashPassword = await bcrypt.hash(password, 15);
    // to store user data in database

    const userRegister = new user({
      name,
      username,
      email,
      password: hashPassword,
    });

    const user = await userRegister.save();

    //response send
    return res.status(201).json({ user });
  }
};

module.exports = { login, register };
