const mongoose = require("mongoose");

const { schema } = mongoose;

const refreshTokenSchema = schema({
  token: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.SchemaType.ObjectId,
    ref: "users",
    required: true,
  },
});

module.exports("RefreshToken", refreshTokenSchema, "token");
