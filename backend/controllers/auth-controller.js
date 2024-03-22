// login

const Joi = require("joi"); // for validation use

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const isPasswordValid = await userExist.comparePassword(password);

    if (isPasswordValid) {
      res.status(200).json({
        message: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or passord " });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
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
  }
  //   try {
  //   const data = req.body;
  //     console.log(req.body);
  //     const { username, email, phone, password } = req.body;
  //   hash the password  using bcrypt and method and second method in models folder
  //   const saltRound = 10;
  //   const hash_password = await bcrypt.hash(password, saltRound);
  //   await User.create({ username, email, password: hash_password });
  //     const userExist = await User.findOne({ email: email });
  //     if (userExist) {
  //       return res.status(400).json({ msg: "email already exists" });
  //     }
  //     const userCreated = await User.create({ username, email, phone, password });
  //   res.status(201).json({ message: "User registered successfully" });
  //     res.status(201).json({
  //       msg: "Registration Successful",
  //       token: await userCreated.generateToken(),
  //       userId: userCreated._id.toString(),
  //     });
  //   } catch (error) {
  //     res.status(500).json({ message: "Internal server error" });
  //   }
};

module.exports = { login, register };
